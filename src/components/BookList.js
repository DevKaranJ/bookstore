import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/booksSlice';
import './styles/BookList.css';

function BookList({ book }) {
  const dispatch = useDispatch();

  const handleRemoveBook = async () => {
    const app_id = 'ErF3GluEp9ZnqOaca0a7';
    await dispatch(removeBookAsync({ app_id, item_id: book.item_id }));
  };

  return (
    <section>
      <ul>
        <li>
          {' '}
          {book.category}
        </li>
        <li>
          {' '}
          {book.title}
        </li>
        <li>
          {' '}
          {book.author}
        </li>
        <div className="button-row">
          <button className="comment-button" onClick={() => {}} type="button">
            comment
          </button>
          <button className="remove-button" onClick={handleRemoveBook} type="button">
            Remove Book
          </button>
          <button className="edit-button" onClick={() => {}} type="button">
            Edit
          </button>
        </div>

      </ul>
    </section>
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
