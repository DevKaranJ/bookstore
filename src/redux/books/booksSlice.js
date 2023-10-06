import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const API_KEY = 'ErF3GluEp9ZnqOaca0a7';

const initialState = {
  books: [],
  status: '',
  error: null,
};

export const fetchBooksAsync = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(`${API_BASE_URL}/apps/${API_KEY}/books`);
  return response.data;
});

export const addBookAsync = createAsyncThunk('books/addBook', async ({ book }) => {
  await axios.post(`${API_BASE_URL}/apps/${API_KEY}/books`, book);
  return book;
});

export const removeBookAsync = createAsyncThunk('books/removeBook', async ({ item_id }) => {
  await axios.delete(`${API_BASE_URL}/apps/${API_KEY}/books/${item_id}`);
  return item_id;
});

const normalizeBooks = (books) => {
  const keys = Object.keys(books);
  return keys.map((x) => ({ item_id: x, ...books[x][0] }));
};

const updateBooks = (state, books) => {
  state.books = books;
  if (state.books.length === 0) state.error = 'No result was found!';
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.fulfilled, (state, action) => {
        if (action.payload !== '') {
          const books = normalizeBooks(action.payload);
          updateBooks(state, books);
        } else {
          state.error = 'No result was found!';
        }
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        updateBooks(state, [...state.books, action.payload]);
      })
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      })
      .addCase(removeBookAsync.pending, (state) => {
        state.status = 'Loading...';
      });
  },
});

export default booksSlice.reducer;
