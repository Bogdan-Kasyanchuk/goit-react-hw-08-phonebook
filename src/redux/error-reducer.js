import { createReducer } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import * as contactsOperations from 'redux/contacts/contacts-operations';
import * as authOperations from 'redux/auth/auth-operations';

export const errorReducer = createReducer(initialState.error, {
  [contactsOperations.getContact.rejected]: (_, { payload }) => payload,
  [contactsOperations.getContact.pending]: () => null,
  [contactsOperations.addContact.rejected]: (_, { payload }) => payload,
  [contactsOperations.addContact.pending]: () => null,
  [contactsOperations.deleteContact.rejected]: (_, { payload }) => payload,
  [contactsOperations.deleteContact.pending]: () => null,
  [contactsOperations.editContact.rejected]: (_, { payload }) => payload,
  [contactsOperations.editContact.pending]: () => null,
  [authOperations.register.rejected]: (_, { payload }) => payload,
  [authOperations.register.pending]: () => null,
  [authOperations.logIn.rejected]: (_, { payload }) => payload,
  [authOperations.logIn.pending]: () => null,
  [authOperations.logOut.rejected]: (_, { payload }) => payload,
  [authOperations.logOut.pending]: () => null,
  [authOperations.getCurrentUser.rejected]: (_, { payload }) => payload,
  [authOperations.getCurrentUser.pending]: () => null,
});
