"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
    #books = [];
    constructor(books = []) {
        if (new Set(books.map(book => book.title)).size !== books.length) {
            throw new Error('Начальный список книг содержит дубликаты');
        }
        this.#books = books;
    }
    get allBooks() {
        return this.#books;
    }
    addBook(title) {
        if (this.#books.some(book => book.title === title)) {
            throw new Error('Книга с таким названием уже существует');
        }
        this.#books.push({ title });
    }
    removeBook(title) {
        const bookIndex = this.#books.findIndex(book => book.title === title);
        if (bookIndex === -1) {
            throw new Error('Книги с таким названием нет в списке');
        }
        this.#books.splice(bookIndex, 1);
    }
    hasBook(title) {
        return this.#books.some(book => book.title === title);
    }
}