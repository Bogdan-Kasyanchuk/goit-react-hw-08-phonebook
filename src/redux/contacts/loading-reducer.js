import { createReducer } from '@reduxjs/toolkit';
import initialState from 'redux/contacts/contacts-state';
import * as operations from 'redux/contacts/contacts-operations';

export const loadingReducer = createReducer(initialState.loading, {
  [operations.getContact.pending]: () => true,
  [operations.getContact.fulfilled]: () => false,
  [operations.getContact.rejected]: () => false,
  [operations.addContact.pending]: () => true,
  [operations.addContact.fulfilled]: () => false,
  [operations.addContact.rejected]: () => false,
  [operations.deleteContact.pending]: () => true,
  [operations.deleteContact.fulfilled]: () => false,
  [operations.deleteContact.rejected]: () => false,
  [operations.editContact.pending]: () => true,
  [operations.editContact.fulfilled]: () => false,
  [operations.editContact.rejected]: () => false,
});
