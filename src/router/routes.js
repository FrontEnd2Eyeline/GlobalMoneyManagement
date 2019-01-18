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
        path: 'enrollment',
        name: 'enrollment',
        component: load('Enrollment')
      },
      {
        path: 'deposit',
        name: 'deposit',
        component: load('Deposit')
      },
      {
        path: '',
        name: 'kyc',
        component: load('Kyc')
      },
      {
        path: 'nosotros',
        name: 'nosotros',
        component: load('WeAre')
      },
      {
        path: 'responsabilidades',
        name: 'responsabilidades',
        component: load('Responsabilities')
      },
      {
        path: 'userpanel',
        name: 'userpanel',
        component: load('UserPanel')
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
