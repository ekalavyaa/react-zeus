export const logIn = (loginResponse) => {
  // eslint-disable-next-line no-undef
  localStorage.setItem('token', loginResponse.token);
  // eslint-disable-next-line no-undef
  localStorage.setItem('details', loginResponse.user);
};

export const logOut = () => {
  // eslint-disable-next-line no-undef
  localStorage.clear();
};

export const getToken = () => {
  // eslint-disable-next-line no-undef
  return localStorage.getItem('token');
};

export const getDetails = () => {
  // eslint-disable-next-line no-undef
  let userDetails = JSON.parse(localStorage.getItem('user'));
  return userDetails;
};
