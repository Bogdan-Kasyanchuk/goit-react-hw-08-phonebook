import { createReducer } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import * as contactsOperations from 'redux/contacts/contacts-operations';
import * as authOperations from 'redux/auth/auth-operations';

export const loadingReducer = createReducer(initialState.loading, {
  [contactsOperations.getContact.fulfilled]: () => false,
  [contactsOperations.getContact.pending]: () => true,
  [contactsOperations.getContact.rejected]: () => false,
  [contactsOperations.addContact.pending]: () => true,
  [contactsOperations.addContact.fulfilled]: () => false,
  [contactsOperations.addContact.rejected]: () => false,
  [contactsOperations.deleteContact.pending]: () => true,
  [contactsOperations.deleteContact.fulfilled]: () => false,
  [contactsOperations.deleteContact.rejected]: () => false,
  [contactsOperations.editContact.pending]: () => true,
  [contactsOperations.editContact.fulfilled]: () => false,
  [contactsOperations.editContact.rejected]: () => false,
  [authOperations.register.fulfilled]: () => false,
  [authOperations.register.pending]: () => true,
  [authOperations.register.rejected]: () => false,
  [authOperations.logIn.fulfilled]: () => false,
  [authOperations.logIn.pending]: () => true,
  [authOperations.logIn.rejected]: () => false,
  [authOperations.logOut.fulfilled]: () => false,
  [authOperations.logOut.pending]: () => true,
  [authOperations.logOut.rejected]: () => false,
  [authOperations.getCurrentUser.fulfilled]: () => false,
  [authOperations.getCurrentUser.pending]: () => true,
  [authOperations.getCurrentUser.rejected]: () => false,
});
