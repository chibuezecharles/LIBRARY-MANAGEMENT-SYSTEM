// index.js
import { Book } from './Book.js';
import { User } from './User.js';
import { Library } from './Library.js';

// Create a library instance
const library = new Library();

// Add some books
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '1234567890');
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', '0987654321');

library.addBook(book1);
library.addBook(book2);

// Add a user
const user1 = new User('John Doe', '1');
library.addUser(user1);

// Borrow a book
library.borrowBook('1', '1234567890');

// Check book availability
console.log(library.isBookAvailable('1234567890')); // false

// Return a book
library.returnBook('1', '1234567890');

// Check book availability again
console.log(library.isBookAvailable('1234567890')); // true

// Search for a book
console.log(library.searchBook('The Great Gatsby'));

// Remove a book
library.removeBook('1234567890');

// Search for a user
console.log(library.searchUser('John Doe'));

// Remove a user
library.removeUser('1');
