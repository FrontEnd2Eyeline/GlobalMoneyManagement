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
        name: 'HelloWorld',
        component: load('HelloWorld')
      },
      {
        path: '*',
        component: load('404')
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
