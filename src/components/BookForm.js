import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({ title: '', author: '', category: '' });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = () => {
    if (isFormValid) {
      dispatch(addBook(newBook));
      setNewBook({ title: '', author: '', category: '' });
    }
  };

  useEffect(() => {
    // Validate the form
    const validateForm = () => {
      setIsFormValid(newBook.title !== '' && newBook.author !== '' && newBook.category !== '');
    };

    validateForm(); // Call the validation function here

    // Since the validation function doesn't have any external dependencies,
    // there's no need to include it in the dependency array of useEffect.
  }, [newBook]);

  return (
    <div>
      <h2>Add a New Book</h2>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={newBook.category}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleAddBook} disabled={!isFormValid}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
