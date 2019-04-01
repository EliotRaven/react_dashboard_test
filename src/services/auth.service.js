import api from "../helpers/api";

export const authService = {
    signin,
    checkAuth,
    getAuthUser,
    getAuthHeaders,
    logout
}

function signin(credentials) {
  return new Promise((resolve, reject)=>{
    return api.call('post', `/login`, null, credentials, true)
      .then(res => {
        setAuthUserToStorage(res.data.user)
        setSessionToStorage(res.data.session)
        return resolve(res.data)
      })
      .catch(error => reject(error.response))
  })
}

function getAuthUser() {
    if (!checkAuth) return {error: 'unauthorized'}
    return JSON.parse(sessionStorage.getItem('auth-user'))
}

function checkAuth() {
    return !!sessionStorage.hasOwnProperty('auth-user')
}

function getAuthHeaders () {
    return getAuthUser() ? {'auth-token': `${getToken()}`} : null
}

function setAuthUserToStorage(user) {
  sessionStorage.setItem('auth-user', JSON.stringify(user))
}

function setSessionToStorage(session) {
  sessionStorage.setItem('session', JSON.stringify(session))
}

function getToken() {
  return JSON.parse(sessionStorage.getItem('session')).token
}

function logout() {
  return new Promise((resolve, reject)=>{
    return api.call('post', '/logout', null, {token: getToken()}, true)
      .then(() => {
        sessionStorage.removeItem('auth-user')
        sessionStorage.removeItem('session')
        return resolve(false)
      })
      .catch(error => reject(error.response))
  })

}