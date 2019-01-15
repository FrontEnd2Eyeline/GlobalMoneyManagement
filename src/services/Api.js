import axios from 'axios'

const API_URL = 'http://f5ee89c6.ngrok.io'

let header = {
  'Content-Type': 'application/x-www-form-urlencoded'
}

export default class Api {
  static get (endPoint, userService, params) {
    if (userService != null) {
      header = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer '
      }
    }
    let url = API_URL + endPoint

    return new Promise(resolve => {
      let jsonParams = ''
      if (params) {
        jsonParams = this.jsonToURLEncoded(params)
      }
      axios.get(url + '?' + jsonParams, {headers: header}).then(data => {
        resolve(data)
        console.log('hizo get', data)
      }).catch(error => {
        console.log('error en api', error)
      })
    })
  }

  static post (endpoint, body, user) {
    let url = API_URL + endpoint
    if (user != null) {
      header = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + user.accessParam()
      }
    }
    let jsonParams = this.jsonToURLEncoded(body)
    return axios.post(url, jsonParams, {headers: header})
  }

  static jsonToURLEncoded (jsonString) {
    return Object.keys(jsonString).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key])
    }).join('&')
  }
}
