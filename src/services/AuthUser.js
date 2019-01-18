import Api from './Api'

export default {
  token: null,

  getToken () {
    this.token = window.localStorage.getItem('access-token')
  },
  accessParam () {
    this.token = window.localStorage.getItem('access-token')
    return this.token
  },
  setToken (token) {
    this.token = window.localStorage.setItem('access-token', token)
  },

  login (user, password) {
    return new Promise((resolve, reject) => {
      Api.post('/auth/login', {email: user, password: password})
        .then(data => {
          this.setToken(data.data.serializeToken)
          console.log(this.getToken())
          resolve(data)
        }).catch(err => {
          reject(err)
        })
    })
  },

  isLogged () {
    return this.token != null
  }
}
