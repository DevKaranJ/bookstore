import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import BookForm from './BookForm';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books); // Assuming your state structure

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div>
      <h1>Books</h1>
      <BookForm />
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            {book.title}
            {' '}
            by
            {' '}
            {book.author}
            {' '}
            <button type="button" onClick={() => handleRemoveBook(book.item_id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
