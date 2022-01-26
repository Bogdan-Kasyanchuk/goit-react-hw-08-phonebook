import { createReducer } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import * as operations from 'redux/auth/auth-operations';

export const currentUserReducer = createReducer(
  initialState.auth.isFetchingCurrentUser,
  {
    [operations.getCurrentUser.fulfilled]: () => false,
    [operations.getCurrentUser.pending]: () => true,
    [operations.getCurrentUser.rejected]: () => false,
  },
);
