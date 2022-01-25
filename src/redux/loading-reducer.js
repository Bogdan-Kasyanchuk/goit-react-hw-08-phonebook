import { createReducer } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import * as operationsContacts from 'redux/contacts/contacts-operations';
import * as operationsAuth from 'redux/auth/auth-operations';

export const loadingReducer = createReducer(initialState.loading, {
  [operationsContacts.getContact.fulfilled]: () => false,
  [operationsContacts.getContact.pending]: () => true,
  [operationsContacts.getContact.rejected]: () => false,
  [operationsContacts.addContact.pending]: () => true,
  [operationsContacts.addContact.fulfilled]: () => false,
  [operationsContacts.addContact.rejected]: () => false,
  [operationsContacts.deleteContact.pending]: () => true,
  [operationsContacts.deleteContact.fulfilled]: () => false,
  [operationsContacts.deleteContact.rejected]: () => false,
  [operationsContacts.editContact.pending]: () => true,
  [operationsContacts.editContact.fulfilled]: () => false,
  [operationsContacts.editContact.rejected]: () => false,
  [operationsAuth.register.fulfilled]: () => false,
  [operationsAuth.register.pending]: () => true,
  [operationsAuth.register.rejected]: () => false,
  [operationsAuth.logIn.fulfilled]: () => false,
  [operationsAuth.logIn.pending]: () => true,
  [operationsAuth.logIn.rejected]: () => false,
  [operationsAuth.logOut.fulfilled]: () => false,
  [operationsAuth.logOut.pending]: () => true,
  [operationsAuth.logOut.rejected]: () => false,
  [operationsAuth.getCurrentUser.fulfilled]: () => false,
  [operationsAuth.getCurrentUser.pending]: () => true,
  [operationsAuth.getCurrentUser.rejected]: () => false,
});
