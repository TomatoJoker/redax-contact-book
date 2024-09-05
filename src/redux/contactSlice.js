import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['contacts']
}

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: [],
  },
  reducers: {
    save(state, action) {
     state.contacts.push(action.payload);
    },
    remove(state, action) {
      state.contacts = state.contacts.filter(state => state.id !== action.payload.id);
    }
  },
})


export const persistedReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
)

export const getContacts = (state) => state.contactReducer.contacts;

export const { save, remove} = contactSlice.actions;
