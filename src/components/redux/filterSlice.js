import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filterValue(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { filterValue } = filterSlice.actions;

export default filterSlice.reducer;
