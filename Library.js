// Library.js
import { Book } from './Book.js';
import { User } from './User.js';

export class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }

    // Add a book to the library
    addBook(book) {
        this.books.push(book);
    }

    // Remove a book from the library by ISBN
    removeBook(isbn) {
        this.books = this.books.filter(book => book.isbn !== isbn);
    }

    // Search for a book by title, author, or ISBN
    searchBook(query) {
        return this.books.filter(book => 
            book.title.includes(query) || 
            book.author.includes(query) || 
            book.isbn.includes(query)
        );
    }

    // Add a user to the library
    addUser(user) {
        this.users.push(user);
    }

    // Remove a user from the library by ID
    removeUser(id) {
        this.users = this.users.filter(user => user.id !== id);
    }

    // Search for a user by name or ID
    searchUser(query) {
        return this.users.filter(user => 
            user.name.includes(query) || 
            user.id.includes(query)
        );
    }

    // Allow a user to borrow a book
    borrowBook(userId, isbn) {
        const user = this.users.find(user => user.id === userId);
        const book = this.books.find(book => book.isbn === isbn);
        
        if (user && book && book.isAvailable) {
            user.borrowedBooks.push(book);
            book.isAvailable = false;
            return true;
        }
        return false;
    }

    // Allow a user to return a book
    returnBook(userId, isbn) {
        const user = this.users.find(user => user.id === userId);
        const book = user ? user.borrowedBooks.find(book => book.isbn === isbn) : null;
        
        if (user && book) {
            user.borrowedBooks = user.borrowedBooks.filter(book => book.isbn !== isbn);
            book.isAvailable = true;
            return true;
        }
        return false;
    }

    // Check if a book is available
    isBookAvailable(isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        return book ? book.isAvailable : false;
    }
}
