import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.items = [...state.items, payload];
      },
      prepare: value => {
        const id = nanoid();
        return { payload: { id, ...value } };
      },
    },
    deleteContact(state, { payload }) {
      state.items = state.items.filter(({ id }) => id !== payload);
    },
  },
  selectors: {
    selectContacts: state => state.items,
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const { selectContacts } = contactsSlice.selectors;
export const contactsReducer = contactsSlice.reducer;
