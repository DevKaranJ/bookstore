import React, { useState } from 'react';

function BookForm({ onAdd }) {
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newBook);
    setNewBook({ title: '', author: '' });
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
