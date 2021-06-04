import './sass/main.scss';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import cartGalaryTpl from './tpl/cartGalary.hbs';
import PixabayApiServise from './js/api';

const formRef = document.querySelector('.search-form');
const inputRef = document.querySelector('.intup');
const galleryRef = document.querySelector('.gallery');
const btnLoadMoreRef = document.querySelector('.load-more');

formRef.addEventListener('submit', searchForm);
btnLoadMoreRef.addEventListener('click', loadMore);
galleryRef.addEventListener('click', biggestFoto);

const pixabayApiServise = new PixabayApiServise();

function searchForm(event) {
  event.preventDefault();
  galleryRef.innerHTML = '';
  pixabayApiServise.resetPage()
  btnLoadMoreRef.classList.remove('is-open');

  pixabayApiServise.search = inputRef.value;
  if (pixabayApiServise.search === '') return;
  getImages(false);
}

function getImages(shouldScroll) {
  pixabayApiServise.fetchImages()
    .then(images => {
      const carts = images.hits;
      markupImages(carts);

      if (images.hits.length < 3) {
        btnLoadMoreRef.classList.remove('is-open');
      }
      if (images.hits.length === 0) {
        alert('Enter correct name of search please!');
      }
      if (shouldScroll) {
        scroll();
      }
    })
}

function markupImages(images) {
  galleryRef.insertAdjacentHTML('beforeend', cartGalaryTpl(images));
  btnLoadMoreRef.classList.add('is-open');
  formRef.reset();
}

function loadMore(event) {
  pixabayApiServise.incrementPage()
  getImages(true);
}

function scroll() {
  window.scrollTo({
    top: document.documentElement.offsetHeight,
    behavior: 'smooth',
  });
}

function biggestFoto(event) {
  if (event.target.tagName !== 'IMG') return;
  const largeImageURL = event.target.dataset.bigImage;
  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" width="800" height="600">
`);
  instance.show();
}
