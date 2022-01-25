import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from 'redux/auth/user-reducer';
import { tokenReducer } from 'redux/auth/token-reducer';
import { loggedReducer } from 'redux/auth/logged-reducer';

export const authReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
  isLoggedIn: loggedReducer,
});
