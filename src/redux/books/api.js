// api.js
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

export const fetchBooksAPI = async () => {
  const response = await fetch(`${BASE_URL}/books`);
  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }
  return response.json();
};

export const addBookAPI = async (newBook) => {
  const response = await fetch(`${BASE_URL}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
  });
  if (!response.ok) {
    throw new Error('Failed to add a book');
  }
  return response.json();
};

export const removeBookAPI = async (bookId) => {
  const response = await fetch(`${BASE_URL}/books/${bookId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to remove the book');
  }
  return bookId;
};
