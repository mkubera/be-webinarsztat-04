import All from "./all";
import R as * from "ramda"  // Ramde mozna dorzucic do projektu (`npm i ramda`)

const CURRENT_YEAR = 2023;

const Book = {
  init: () => ({ id: crypto.randomUUID(), release: CURRENT_YEAR }),
  setTitle: (title: any) => (book: any) => ({ ...book, title }),
  setAuthor: (author: any) => (book: any) => ({ ...book, author }),
  setRelease: (release: any) => (book: any) => ({ ...book, release }),
  initFullBook: (title: any, author: any) =>
    R.pipe(
      Book.init,
      Book.setTitle(title),
      Book.setAuthor(author),
      All.timestamps
    ),
};

export default Book;
