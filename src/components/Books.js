import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooksAsync } from '../redux/books/booksSlice';
import BookList from './BookList';
import BookForm from './BookForm';

function Books() {
  const dispatch = useDispatch();
  const app_id = 'ErF3GluEp9ZnqOaca0a7';
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchBooksAsync(app_id));
  }, [dispatch]);

  return (
    <div className="books-container">
      <div className="books-header">
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
    </div>
  );
}

export default Books;
