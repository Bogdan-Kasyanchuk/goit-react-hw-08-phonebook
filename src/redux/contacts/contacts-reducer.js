import { createReducer, combineReducers } from '@reduxjs/toolkit';
import initialState from 'redux/contacts/contacts-state';
import * as operations from 'redux/contacts/contacts-operations';
import * as actions from 'redux/contacts/contacts-actions';

const itemsReducer = createReducer(initialState.contacts.items, {
  [operations.getContact.fulfilled]: (_, { payload }) => payload,
  [operations.addContact.fulfilled]: (state, { payload }) => [
    payload,
    ...state,
  ],
  [operations.deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(element => element.id !== payload),
  [operations.editContact.fulfilled]: (state, { payload }) =>
    state.map(element => (element.id === payload.id ? payload : element)),
});

const filterReducer = createReducer(initialState.contacts.filter, {
  [actions.filterContact]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
