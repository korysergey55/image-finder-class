
export default class PixabayApiServise {
  constructor() {
    this.KEY_PIXABAY = '21698474-fb36d7b3400c91ab3d227d6db';
    this.BASE_URL = 'https://pixabay.com/api/';
    this.searchWord = '';
    this.page = 1;
  }
  fetchImages() {
    const URL = `${this.BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchWord}&page=${this.page}&per_page=20&key=${this.KEY_PIXABAY}`;

    return fetch(URL)
      .then(response => {
        if (response.ok)
          return response.json()
      })
      .catch(reject => console.log(reject));
  }

  resetPage() {
    this.page = 1;
  }

  incrementPage() {
    this.page += 1;
  }

  get search() {
    return this.searchWord;
  }

  set search(newSearchWord) {
    return this.searchWord = newSearchWord;
  }
}

