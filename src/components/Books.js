import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooksAsync } from '../redux/books/booksSlice';
import BookList from './BookList';
import BookForm from './BookForm';

function Books() {
  const dispatch = useDispatch();
  const app_id = 'ErF3GluEp9ZnqOaca0a7';
  const books = useSelector((state) => state.books.books);
  const status = useSelector((state) => state.books.status);

  useEffect(() => {
    dispatch(fetchBooksAsync(app_id));
  }, [dispatch]);

  return (
    <div>
      <p>{status}</p>
      {books.map((book) => (
        <div key={book.id}>
          {' '}
          {

        }
          <BookList book={book} />
        </div>
      ))}
      <BookForm />
    </div>
  );
}

export default Books;
