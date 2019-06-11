export default (state = { isLoggedIn: false }, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isLoggedIn: true,
        user: action.payload
      };
    default:
      return state;
  }
};
