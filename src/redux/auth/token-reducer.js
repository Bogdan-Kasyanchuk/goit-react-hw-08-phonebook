import { createReducer } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import * as operations from 'redux/auth/auth-operations';

export const tokenReducer = createReducer(initialState.auth.token, {
  [operations.register.fulfilled]: (_, { payload }) => payload.token,
  [operations.logIn.fulfilled]: (_, { payload }) => payload.token,
  [operations.logOut.fulfilled]: () => null,
});
