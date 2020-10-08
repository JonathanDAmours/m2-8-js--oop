// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
  constructor(title, genre, author, isRead = false) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead;
  }
}

let book1 = new Book(
  "To kill a mockingbird",
  "Classic Litterature",
  "Harper Lee",
  false
);
let book2 = new Book(
  "Great Expectations",
  "Classic Litterature",
  "Charles Dickens",
  false
);
let book3 = new Book(
  "The Scarlet Letter",
  "Classic Litterature",
  "Nathaniel Hawthorne"
);
let book4 = new Book(
  "The Catcher in the Rye",
  "Classic Litterature",
  "JD Salinger",
  true
);
let book5 = new Book(
  "The Handmaid's Tale",
  "Classic Litterature",
  "Margaret Atwood",
  true
);

console.log(book1, book2, book3, book4, book5);
