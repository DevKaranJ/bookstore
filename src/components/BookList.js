import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/booksSlice';

function BookList({ book }) {
  const dispatch = useDispatch();

  const handleRemoveBook = async () => {
    const app_id = 'ErF3GluEp9ZnqOaca0a7';
    await dispatch(removeBookAsync({ app_id, item_id: book.item_id }));
  };

  return (
    <div>
      <p>
        Title:
        {' '}
        {book.title}
      </p>
      <p>
        Author:
        {' '}
        {book.author}
      </p>
      <p>
        Category:
        {' '}
        {book.category}
      </p>
      <button onClick={handleRemoveBook} type="button">
        {' '}
        {/* Add type="button" */}
        Remove Book
      </button>
    </div>
  );
}

BookList.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookList;
