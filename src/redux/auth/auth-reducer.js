import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from 'redux/auth/user-reducer';
import { tokenReducer } from 'redux/auth/token-reducer';
import { loggedReducer } from 'redux/auth/logged-reducer';
import { currentUserReducer } from 'redux/auth/currentUser-reducer';

export const authReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
  isLoggedIn: loggedReducer,
  isFetchingCurrentUser: currentUserReducer,
});
