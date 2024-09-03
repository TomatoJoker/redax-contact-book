import { createSlice } from "@reduxjs/toolkit";

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

export const { save, remove} = contactSlice.actions;

export default contactSlice;
