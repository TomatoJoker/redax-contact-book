import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from './constants';

const statusInitial = {
  status: statusFilters.all
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: statusInitial,
  reducers: {
    setStatus(state, action) {
      state.status = action.payload
    }
  },
})

export const getFilter = (state) => state.filterReducer.status;

export const { setStatus } = filterSlice.actions;
