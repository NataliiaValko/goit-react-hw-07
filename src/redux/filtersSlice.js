import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { name: '' },
  reducers: {
    changeFilter(state, { payload }) {
      state.name = payload;
    },
  },
  selectors: {
    selectName: state => state.name,
  },
});

export const { changeFilter } = filtersSlice.actions;
export const { selectName } = filtersSlice.selectors;
export const filtersReducer = filtersSlice.reducer;
