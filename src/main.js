// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Api from './services/Api'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'

import 'vue-material/dist/vue-material.min.css'
import VueMaterial from 'vue-material'
import Vuelidate from 'vuelidate'
import router from './router'
import { i18n } from './plugins/i18n'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import {store} from './store'

Vue.use(Vuex)
Vue.use(Element)
Vue.use(Vuelidate)
Vue.use(Vuesax)
Vue.use(VueMaterial)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  i18n,
  Api,
  Element,
  render: (h) => h(App)
})
