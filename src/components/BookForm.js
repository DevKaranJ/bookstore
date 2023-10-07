import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAsync } from '../redux/books/booksSlice';
import './styles/BookForm.css';

function BookForm() {
  const dispatch = useDispatch();
  const app_id = 'ErF3GluEp9ZnqOaca0a7';
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Fiction');

  const categories = ['Fiction', 'Non-Fiction', 'Science Fiction', 'Mystery', 'Fantasy', 'Romance']; // Define your categories here

  const handleAddBook = async () => {
    console.log('Adding book...');
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    console.log('New Book:', newBook);
    await dispatch(addBookAsync({ app_id, book: newBook }));
    console.log('Book added successfully');
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <hr style={{ borderTop: '1px solid #e8e8e8', marginTop: '40px' }} />

      <h2>Add New Book</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button className="add-book-button" type="button" onClick={handleAddBook}>
          <span className="button-text">Add Book</span>
        </button>
      </div>
    </div>
  );
}

export default BookForm;
