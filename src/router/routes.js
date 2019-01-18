import { Trans } from '@/plugins/Translation'

function load (component) {
  // '@' is aliased to src/components
  return () => import(/* webpackChunkName: "[request]" */ `@/pages/${component}.vue`)
}

export default [
  {
    path: '/:lang',
    component: {
      template: '<router-view></router-view>'
    },
    beforeEnter: Trans.routeMiddleware,
    children: [
      {
        path: 'login',
        name: 'login',
        component: load('Login')
      },
      {
        path: 'home',
        name: 'home',
        component: load('Home')
      },
      {
        path: 'register',
        name: 'register',
        component: load('Register')
      },
      {
        path: 'contact',
        name: 'contact',
        component: load('Contact')
      },
      {
        path: 'yourbusiness',
        name: 'yourbusiness',
        component: load('YourBusiness')
      },
      {
        path: 'feedback',
        name: 'feedback',
        component: load('Feedback')
      },
      {
        path: '',
        name: 'deposito',
        component: load('Deposit')
      },
      {
        path: 'enrollment',
        name: 'enrollment',
        component: load('Enrollment')
      },
      {
        path: 'cpanel',
        name: 'Cpanel',
        component: load('UserPanel')
      },
      {
        path: '*',
        component: load('404')
      }
    ]
  },

  {
    // Redirect user to supported lang version.
    path: '*',
    redirect (to) {
      return Trans.getUserSupportedLang()
    }
  }
]
