import Cookies from 'js-cookie'
const tokenKey = 'tokenAdmin'
const userNameKey = 'username'

export function getToken () {
    return Cookies.get(tokenKey)
}
export function setToken (token) {
    return Cookies.set(tokenKey, token)
}

export function removeToken () {
    return Cookies.remove(tokenKey)
}

export function getUserName () {
    return Cookies.get(userNameKey)
}

export function setUserName (userName) {
    return Cookies.set(userNameKey, userName)
}

export function removeUserName () {
    return Cookies.remove(userNameKey)
}
