///////////////////////////////////////////////////////////////

// 3 - Заметки
// Напиши класс Notes который управляет коллекцией
// заметок в свойстве notes, изначальное значение передается при вызове класса.
// Заметка это объект со свойствами text и priority.
// Добавь классу статическое свойство PRIORITY,
// в котором будет храниться объект с приоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }

// Добавь методы addNote(note), removeNote(text)
// и updateNotePriority(text, newPriority).

class Notes {
  static PRIORITY = {
      LOW: 'low',
      NORMAL: 'normal',
      HIGH: 'high',
  };

  constructor(notes) {
      this.notes = notes;
  }

  addNote(note) {
      this.notes.push(note);
  }

  removeNote(text) {
      const updatedNotes = [];
      for (const note of this.notes) {
          if (note.text !== text) {
              updatedNotes.push(note);
          }
      }
      this.notes = updatedNotes;
  }

  updateNotePriority(text, newPriority) {
      for (let note of this.notes) {
          if (note.text === text) {
              note.priority = newPriority;
          }
      }
  }
}

const myNotes = new Notes([]);

myNotes.addNote({
  text: 'Моя первая заметка',
  priority: Notes.PRIORITY.LOW,
});


myNotes.addNote({
  text: 'Моя вторая заметка',
  priority: Notes.PRIORITY.NORMAL,
});

myNotes.addNote({
  text: 'Моя третья заметка',
  priority: Notes.PRIORITY.NORMAL,
});

myNotes.removeNote('Моя первая заметка');
myNotes.updateNotePriority('Моя вторая заметка', Notes.PRIORITY.HIGH);
console.log(myNotes);


//////////////////////////////////////////////////////////////////////////

// 4 - Клиент
// Напиши класс Client который создаёт объект
// со свойствами login и email.
// login должен быть приватным свойством, а email публичным
// доступ к ним сделай через геттер и сеттер login и email.
// если сеттер логина получил пустую строку - ничего не делать и вывести в консоль 'No login!'
// если сеттер имейла получил строку 'fake@email' - ничего не делать и вывести в консоль 'Fake email!'

class Client {
  #login;
  _email;

  constructor({ login, email }) {
      this.#login = login;
      this._email = email;
  }

  get login() {
      return this.#login;
  }

  set login(value) {
      if (!value) {
          return console.log('No login!');
      }

      this.#login = value;
  }

  get email() {
      return this._email;
  }

  set email(value) {
      if (value === 'fake@email') {
          return console.log('Fake email!');
      }

      this._email = value;
  }
}

const mango = new Client({
  login: 'Mango',
  email: 'mango@dog.woof',
});

// console.log('🚀  mango', mango);

// console.log(mango.email); // mango@dog.woof
// // console.log(mango._email); //
// mango.email = 'fake@email';
// console.log(mango.email); // mango@dog.woof
// mango.email = 'nofake@email';
// console.log(mango.email); // nofake@email

// console.log(mango.login); // Mango
// // console.log(mango.#login); // Error
// mango.login = 'Mangodog';
// console.log(mango.login); // Mangodog
// mango.login = '';
// console.log(mango.login); // Mangodog

const poly = new Client({
  login: 'Poly',
  email: 'poly@mail.com',
});

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie

///////////////////////////////////////////////////////////////////////////////////

// Пример 5 - перепишите функции-конструкторы User, Student
// с использованием классов

// const User = function (name, surname) {
//   this.name = name;
//   this.surname = surname;
// };

// User.prototype.getFullName = function () {
//   return `${this.name} ${this.surname}`;
// };

// const Student = function (name, surname, year) {
//   User.apply(this, [name, surname]);

//   this.year = year;
// };

// Student.prototype = Object.create(User.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.getCourse = function () {
//   const now = new Date();
//   const course = now.getFullYear() - this.year;
//   return course;
// };

///////////////////

class User {
  name;
  surname;

  constructor({ name, surname }) {
      this.name = name;
      this.surname = surname;
  }

  getFullName() {
      return `${this.name} ${this.surname}`;
  }
}

class Student extends User {
  year;

  constructor({ name, surname, year }) {
      super({ name, surname });

      this.year = year;
  }

  getCourse() {
      const course = 2021 - this.year;
      return course;
  }
}

const student = new Student({ name: 'Петро', surname: 'Шевченко', year: 2018 });

// console.log(student);
// console.log(student.getFullName()); //выведет 'Петро Шевченко'
// console.log(student.year); //выведет 2018
// console.log(`${student.getCourse()}-й курс`); //выведет 3 - третий курс, так как текущий год 2021

///////////////////////////////////////////////////////////////////////
