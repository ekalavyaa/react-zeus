export const userLogin = (payload) => dispatch => {
  dispatch({
    type: 'LOGIN',
    payload: {
      ...payload
    }
  });
};
