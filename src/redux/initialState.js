const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
  auth: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false,
  },
  loading: false,
  error: null,
};

export default initialState;
