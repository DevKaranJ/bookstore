import { createSlice } from '@reduxjs/toolkit';

let nextItemId = 1;

function getNextItemId() {
  const newItemId = `item${nextItemId}`;
  nextItemId += 1;
  return newItemId;
}

const initialState = {
  books: [
    {
      item_id: 'getNextItemId()',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'getNextItemId()',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'getNextItemId()',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        item_id: getNextItemId(),
        ...action.payload,
      };
      // add new book to the array
      state.books.push(newBook);
    },
    removeBook: (state, action) => {
      // remove book by its ID
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
