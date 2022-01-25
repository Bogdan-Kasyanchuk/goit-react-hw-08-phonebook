import { createReducer } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import * as operations from 'redux/auth/auth-operations';

export const userReducer = createReducer(initialState.auth.user, {
  [operations.register.fulfilled]: (_, { payload }) => payload.user,
  [operations.logIn.fulfilled]: (_, { payload }) => payload.user,
  [operations.logOut.fulfilled]: () => ({ name: null, email: null }),
  [operations.getCurrentUser.fulfilled]: (_, { payload }) => payload,
});
