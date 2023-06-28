function customFilter(bookList) {
  const booksWithU = [];
  const otherBooks = [];
  for (let i = 0; i < bookList.length; i++) {
    const book = bookList[i];
    if (book.includes('у') || book.includes('У')) {
      booksWithU.push(book);
    } else {
      otherBooks.push(book);
    }
  }
  return [booksWithU, otherBooks];
}
const books = ['Дюна', '1984', 'Мастер и Маргарита', 'Улисс', 'Атлант расправил плечи'];
const [booksWithU, otherBooks] = customFilter(books);
console.log('Книги с буквой "у":', booksWithU);
console.log('Остальные книги:', otherBooks);