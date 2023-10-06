// bookSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBooksAPI, addBookAPI, removeBookAPI } from './api';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => fetchBooksAPI());

export const addBook = createAsyncThunk('books/addBook', async (newBook) => addBookAPI(newBook));

export const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  await removeBookAPI(bookId);
  return bookId;
});

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.id !== action.payload);
      });
  },
});

export default bookSlice.reducer;
