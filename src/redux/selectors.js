import { createSelector } from 'reselect';

import { selectName } from './filtersSlice';
import { selectContacts } from './contactsSlice';

export const selectFilteredContacts = createSelector(
  [selectContacts, selectName],
  (contacts, filterName) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    )
);
