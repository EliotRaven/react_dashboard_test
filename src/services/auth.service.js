import API from '../helpers/api'

export const authService = {
    signin,
    checkAuth,
    getAuthUser,
    getAuthHeaders,
    logout
}

function signin(credentials) {
    return new Promise((resolve, reject)=>{
        API.call(
          'post',
          'https://t0vbba5oqk.execute-api.us-west-2.amazonaws.com/prod/jazz/login',
          null,
          {...credentials})
          .then(res => {
            setUserToStorage(res.data)
            return resolve(res.data)
        }).catch(err => {
            return reject(err.response)
        })
    })
}

function getAuthUser() {
    if (!checkAuth) return {error: 'unauthorized'}
    return JSON.parse(sessionStorage.getItem('auth-user'))
}

function checkAuth() {
    return !!JSON.parse(sessionStorage.getItem('auth-user'))
}

function getAuthHeaders () {
    return getAuthUser() ? {'Authorization': `${getAuthUser().data.token}`} : null
}

function setUserToStorage(user) {
    sessionStorage.setItem('auth-user', JSON.stringify(user))
}

function logout() {
    sessionStorage.removeItem('auth-user')
}