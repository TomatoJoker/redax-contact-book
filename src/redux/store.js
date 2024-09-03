import { configureStore } from '@reduxjs/toolkit';
import contactSlice from './contactSlice';
import filterSlice from './filterSlice';

const store = configureStore({
  reducer: {
    contactReducer: contactSlice.reducer,
    filterReducer: filterSlice.reducer
  },
});

export default store;
