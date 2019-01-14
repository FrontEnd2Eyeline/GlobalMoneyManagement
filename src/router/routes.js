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
        path: '',
        name: 'login',
        component: load('Login')
      },
      {
        path: '/:lang/home/',
        name: 'home',
        component: load('Home')
      },
      {
        path: '/:lang/register',
        name: 'register',
        component: load('Register')
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
