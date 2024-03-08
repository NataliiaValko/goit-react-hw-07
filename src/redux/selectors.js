import { createSelector } from 'reselect';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectName = state => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectName],
  (contacts, filterName) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    )
);
