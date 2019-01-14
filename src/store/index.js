'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    layout: 'login-layout',
    user: {},
    token: localStorage.getItem('access-token') || '',
    status: ''
  },
  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status
  },
  mutations: {
    SET_LAYOUT (state, newLayout) {
      state.layout = newLayout
    },
    SET_USER (state, user) {
      state.user = user
    },
    SET_TOKEN (state, token) {
      state.token = token
    },
    AUTH_REQUEST (state) {
      state.status = 'loading'
    },
    AUTH_SUCCESS  (state, token) {
      state.status = 'success'
      state.token = token
    },
    AUTH_ERROR (state) {
      state.status = 'error'
    }
  },
  actions: {

  }
})
