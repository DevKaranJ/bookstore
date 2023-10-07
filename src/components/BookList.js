import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBookAsync } from '../redux/books/booksSlice';
import './styles/BookList.css';

function BookList({ book }) {
  const dispatch = useDispatch();

  // Function to generate a random progress value (between 0 and 100)
  const getRandomProgress = () => Math.floor(Math.random() * 101);

  const handleRemoveBook = async () => {
    const app_id = 'ErF3GluEp9ZnqOaca0a7';
    await dispatch(removeBookAsync({ app_id, item_id: book.item_id }));
  };

  // Generate a random progress value
  const randomProgress = getRandomProgress();

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
      <div className="progressBarContainer">
        <CircularProgressbar
          className="progressResult"
          value={randomProgress}
          text={`${randomProgress}%`}
          styles={buildStyles({
            textColor: '#000',
            trailColor: '#d6d6d6',
          })}
        />
        <div className="progressBar">
          <p className="percent">
            {randomProgress}
            %
          </p>
          <p className="text">completed</p>
        </div>
      </div>
      <div className="line" />
      <div className="chapter">
        <p className="currentChapter">Current Chapter</p>
        <p className="chapterNumber">Chapter 17</p>
        <button type="submit" className="update-button">
          <span className="update-button-text">Update Progress</span>
        </button>
      </div>
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
