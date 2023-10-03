import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({ title: '', author: '' });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = () => {
    if (isFormValid) {
      dispatch(addBook(newBook));
      setNewBook({ title: '', author: '' });
    }
  };

  // Validate the form
  const validateForm = () => {
    setIsFormValid(newBook.title !== '' && newBook.author !== '');
  };

  React.useEffect(() => {
    validateForm();
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
        <button type="button" onClick={handleAddBook} disabled={!isFormValid}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
