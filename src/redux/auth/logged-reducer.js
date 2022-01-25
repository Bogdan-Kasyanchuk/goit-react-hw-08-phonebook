import { createReducer } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import * as operations from 'redux/auth/auth-operations';

export const loggedReducer = createReducer(initialState.auth.isLoggedIn, {
  [operations.register.fulfilled]: () => true,
  [operations.logIn.fulfilled]: () => true,
  [operations.logOut.fulfilled]: () => false,
  [operations.getCurrentUser.fulfilled]: () => true,
});
