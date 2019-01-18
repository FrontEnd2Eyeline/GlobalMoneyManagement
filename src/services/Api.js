import axios from 'axios'
import Auth from './AuthUser'

const API_URL = 'http://d117b955.ngrok.io'

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
        'Authorization': 'Bearer ' + `${Auth.accessParam()}`
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
