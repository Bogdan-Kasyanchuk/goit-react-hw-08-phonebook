import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from 'redux/contacts/contacts-reducer';
import { loadingReducer } from 'redux/contacts/loading-reducer';
import { errorReducer } from 'redux/contacts/error-reducer';
// import logger from 'redux-logger';

const rootReducer = {
  contacts: contactsReducer,
  loading: loadingReducer,
  error: errorReducer,
};

const store = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
