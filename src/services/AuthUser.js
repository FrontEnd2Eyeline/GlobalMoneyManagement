import Api from './Api'

class AuthUser {
  static user = {
    serializeToken: ''
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
          this.setUser(data.data)
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
    this.user.serializeToken = user.serializeToken
    console.log('usuario', this.user)
    console.log('token', this.user.serializeToken)
    window.localStorage.setItem('user', JSON.stringify(user))
    window.localStorage.setItem('access-token', JSON.stringify(user.serializeToken))
  }

  static isLogged () {
    if (this.user.serializeToken) {
      return true
    } else {
      return false
    }
    console.log('token control', this.user.serializeToken)
  }
}

export default AuthUser
