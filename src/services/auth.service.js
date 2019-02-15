import {history} from "../helpers";

export const authService = {
    signin,
    checkAuth,
    getAuthUser,
    getAuthHeaders,
    logout
}

function signin(credentials) {
    return new Promise((resolve, reject)=>{
        let user = getUserFromStorage(credentials)
        if(!user) {
          setUserToStorage(credentials)
        }
        if(user && user.password !== credentials.password)
            return reject({message: 'wrong password'})

        setAuthUserToStorage(credentials)

        return resolve(getAuthUser())
    })
}

function getUserFromStorage(credentials) {
    let users = JSON.parse(sessionStorage.getItem('users'))
    if (!users) {
      sessionStorage.setItem('users', JSON.stringify([]))
      return null
    }
    return users.find(i => i.username === credentials.username)
}

function getAuthUser() {
    if (!checkAuth) return {error: 'unauthorized'}
    return JSON.parse(sessionStorage.getItem('auth-user'))
}

function checkAuth() {
    return !!JSON.parse(sessionStorage.getItem('auth-user'))
}

function getAuthHeaders () {
    return getAuthUser() ? {'Authorization': `${getAuthUser().token}`} : null
}

function setAuthUserToStorage(user) {
  sessionStorage.setItem('auth-user', JSON.stringify(user))
}

function setUserToStorage(user) {
  let users = JSON.parse(sessionStorage.getItem('users'))
  users.push(user)

  sessionStorage.setItem('users', JSON.stringify(users))
}

function logout() {
    sessionStorage.removeItem('auth-user')
    history.push('/')
}