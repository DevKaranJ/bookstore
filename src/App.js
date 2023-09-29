import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import BookList from './components/BookList'; // Import BookList component
import BookForm from './components/BookForm'; // Import BookForm component
import Navigation from './components/Navigation'; // Import Navigation component

function App() {
  // State to store the list of books
  const [books, setBooks] = useState([]);

  // Function to add a new book to the list
  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  // Function to delete a book from the list
  const deleteBook = (bookId) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/categories"
          element={<Categories />}
        />
      </Routes>
      {/* Render BookList and BookForm with book data and functions */}
      <BookList books={books} onDelete={deleteBook} />
      <BookForm onAdd={addBook} />
    </Router>
  );
}

export default App;
