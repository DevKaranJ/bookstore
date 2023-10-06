import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: '',
  error: null,
};

const API_BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const API_KEY = 'ErF3GluEp9ZnqOaca0a7';

export const fetchBooksAsync = createAsyncThunk('books/fetchBooks', async () => {
  const response = await
  axios.get(`${API_BASE_URL}/apps/${API_KEY}/books`);
  console.log(response.data);
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

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.fulfilled, (state, action) => {
        if (action.payload !== '') {
          const books = [];
          const keys = Object.keys(action.payload);
          keys.forEach((x) => {
            books.push({ item_id: x, ...action.payload[x][0] });
          });

          state.books = books;
          if (state.books.length === 0) state.error = 'No result was found!';
        } else {
          state.error = 'No result was found!';
        }
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.books = [...state.books, action.payload];
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
