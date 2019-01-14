import Api from './Api'
import App from '@/App'

class AuthUser {
  static user = {
    serializeToken: false
  }

  static accessParam () {
    if (this.user != null) {
      return this.user.serializeToken
    }
    return null
  }

  static login (user, password) {
    return new Promise((resolve, reject) => {
      Api.post('/auth/login', {email: user, password: password})
        .then(data => {
          console.log(data)
          const token = data.data.serializeToken
          this.setUser(data.data)
          localStorage.setItem('access-token', token)
          // commit('AUTH_SUCCESS', token)
          // dispatch('USER_REQUEST')
          resolve(data)
          console.log('logeo bien', data)
        }).catch(err => {
          reject(err)
          console.log('erorr en el login', err)
        })
    })
  }

  static setUser (user) {
    this.user = user

    console.log('usuario', this.user)
    console.log('token', this.user.serializeToken)
    localStorage.setItem('user', user)
  }

  static isLogged () {
    if (localStorage.getItem('access-token')) {
      console.log('auttttt true', this.user.serializeToken)
      App.loginControl = true
      return true
    } else {
      console.log('auttttt', this.user.serializeToken)
      return false
    }
  }
}

export default AuthUser
