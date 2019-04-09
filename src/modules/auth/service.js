import api from "../../helpers/api";

const signin = async credentials => {
  try {
    const res = await api.call('post', `/login`, null, credentials, true);
    setAuthUserToStorage(res.data.user);
    setSessionToStorage(res.data.session);
    return res.data;
  } catch (e) {
    return e.response;
  }
};

const getAuthUser = () => {
  if (!checkAuth) return {error: 'unauthorized'};
  return JSON.parse(sessionStorage.getItem('auth-user'));
};

const checkAuth = () => !!sessionStorage.hasOwnProperty('auth-user');

const getAuthHeaders = () => getAuthUser() ? {'auth-token': `${getToken()}`} : null;

const setAuthUserToStorage = user => {
  sessionStorage.setItem('auth-user', JSON.stringify(user));
};

const setSessionToStorage = session => {
  sessionStorage.setItem('session', JSON.stringify(session));
};

const getToken = () => JSON.parse(sessionStorage.getItem('session')).token;

const logout = async () => {
  try {
    await api.call('post', '/logout', null, {token: getToken()}, true);
    sessionStorage.removeItem('auth-user');
    sessionStorage.removeItem('session');
    return false;
  } catch (e) {
    return e.response;
  }
};

export const authService = {
  signin,
  checkAuth,
  getAuthUser,
  getAuthHeaders,
  logout
};
