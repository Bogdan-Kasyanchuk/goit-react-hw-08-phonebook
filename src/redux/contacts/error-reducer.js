import { createReducer } from '@reduxjs/toolkit';
import initialState from 'redux/contacts/contacts-state';
import * as operations from 'redux/contacts/contacts-operations';

export const errorReducer = createReducer(initialState.error, {
  [operations.getContact.rejected]: (_, { payload }) => payload,
  [operations.getContact.pending]: () => null,
  [operations.addContact.rejected]: (_, { payload }) => payload,
  [operations.addContact.pending]: () => null,
  [operations.deleteContact.rejected]: (_, { payload }) => payload,
  [operations.deleteContact.pending]: () => null,
  [operations.editContact.rejected]: (_, { payload }) => payload,
  [operations.editContact.pending]: () => null,
});
