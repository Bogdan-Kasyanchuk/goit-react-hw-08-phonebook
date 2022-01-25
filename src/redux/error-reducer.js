import { createReducer } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import * as operationsContacts from 'redux/contacts/contacts-operations';
import * as operationsAuth from 'redux/auth/auth-operations';

export const errorReducer = createReducer(initialState.error, {
  [operationsContacts.getContact.rejected]: (_, { payload }) => payload,
  [operationsContacts.getContact.pending]: () => null,
  [operationsContacts.addContact.rejected]: (_, { payload }) => payload,
  [operationsContacts.addContact.pending]: () => null,
  [operationsContacts.deleteContact.rejected]: (_, { payload }) => payload,
  [operationsContacts.deleteContact.pending]: () => null,
  [operationsContacts.editContact.rejected]: (_, { payload }) => payload,
  [operationsContacts.editContact.pending]: () => null,
  [operationsAuth.register.rejected]: (_, { payload }) => payload,
  [operationsAuth.register.pending]: () => null,
  [operationsAuth.logIn.rejected]: (_, { payload }) => payload,
  [operationsAuth.logIn.pending]: () => null,
  [operationsAuth.logOut.rejected]: (_, { payload }) => payload,
  [operationsAuth.logOut.pending]: () => null,
  [operationsAuth.getCurrentUser.rejected]: (_, { payload }) => payload,
  [operationsAuth.getCurrentUser.pending]: () => null,
});
