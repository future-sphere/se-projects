interface Book {
  title: string;
  author: string;
  genre: string;
  year: number;
  isbn: string;
  description: string;
  borrowed: boolean;
  currentBorrower: string;
}

export class Library {
  books: Book[];
  borrowingHistory: {
    book: Book;
    borrower: string;
    dateBorrowed: Date;
    dateReturned?: Date | null;
  }[];

  constructor() {
    this.books = [];
    this.borrowingHistory = [];
  }

  addBook(book: Book): boolean {
    if (
      this.books.find((b) => b.title.toLowerCase() === book.title.toLowerCase())
    ) {
      console.log(`${book.title} is already in the library.`);
      return false;
    }
    this.books.push(book);
    return true;
  }

  removeBook(book: Book): boolean {
    const bookIndex = this.books.findIndex(
      (b) => b.title.toLowerCase() === book.title.toLowerCase(),
    );
    if (bookIndex === -1) {
      console.log(`${book.title} is not in the library.`);
      return false;
    }
    this.books.splice(bookIndex, 1);
    return true;
  }

  borrowBook(book: Book, borrowerName: string): boolean {
    const bookIndex = this.books.findIndex(
      (b) => b.title.toLowerCase() === book.title.toLowerCase(),
    );
    if (bookIndex === -1) {
      console.log(`${book.title} is not in the library.`);
      return false;
    }
    if (this.books[bookIndex].borrowed) {
      console.log(`${book.title} is already borrowed.`);
      return false;
    }
    this.books[bookIndex].borrowed = true;
    this.books[bookIndex].currentBorrower = borrowerName;
    this.borrowingHistory.push({
      book: this.books[bookIndex],
      borrower: borrowerName,
      dateBorrowed: new Date(),
      dateReturned: null,
    });
    return true;
  }

  returnBook(book: Book): boolean {
    const bookIndex = this.borrowingHistory.findIndex(
      (b) => b.book.title.toLowerCase() === book.title.toLowerCase(),
    );
    if (bookIndex === -1) {
      console.log(`${book.title} is not in the library.`);
      return false;
    }
    this.borrowingHistory[bookIndex].dateReturned = new Date();
    this.books[bookIndex].borrowed = false;
    this.books[bookIndex].currentBorrower = '';
    return true;
  }

  getBorrowingHistory(): string {
    let borrowingHistory = '';
    this.borrowingHistory.forEach((b) => {
      borrowingHistory += `${b.book.title}, ${
        b.borrower
      }, ${b.dateBorrowed.toLocaleDateString()}, ${
        b.dateReturned ? b.dateReturned.toLocaleDateString() : 'Not returned'
      }\n`;
    });
    return borrowingHistory;
  }

  getBooksByAuthor(author: string): Book[] {
    return this.books.filter(
      (b) => b.author.toLowerCase() === author.toLowerCase(),
    );
  }

  getBookByTitle(title: string): Book | undefined {
    return this.books.find(
      (b) => b.title.toLowerCase() === title.toLowerCase(),
    );
  }

  getBooksByYear(year: number): Book[] {
    return this.books.filter((b) => b.year === year);
  }

  getBooksByBorrower(borrowerName: string): Book[] {
    return this.books.filter(
      (b) => b.currentBorrower.toLowerCase() === borrowerName.toLowerCase(),
    );
  }

  getBorrowedBooks(): Book[] {
    return this.books.filter((b) => b.borrowed);
  }

  getAvailableBooks(): Book[] {
    return this.books.filter((b) => !b.borrowed);
  }

  getBooksByGenre(genre: string): Book[] {
    return this.books.filter(
      (b) => b.genre.toLowerCase() === genre.toLowerCase(),
    );
  }
}
