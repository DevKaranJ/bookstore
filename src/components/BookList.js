// BookList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, fetchBooks, removeBook } from '../redux/books/booksSlice';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const status = useSelector((state) => state.books.status);
  const error = useSelector((state) => state.books.error); // Add this line to access the error

  const handleAddBook = () => {
    const newBook = {
      title: 'New Book',
      author: 'Author',
    };
    dispatch(addBook(newBook));
  };

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h1>Book List</h1>
      <button type="button" onClick={handleAddBook}>Add Book</button>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && (
        <p>
          Error:
          {error}
          {' '}
          {/* Display the error message */}
        </p>
      )}
      {status === 'succeeded' && (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              {book.title}
              {' '}
              by
              {book.author}
              <button type="button" onClick={() => handleRemoveBook(book.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
