import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: () => import('../views/Index.vue'),
    children: [{
        path: '/dashboard',
        component: () => import('../views/admin/Dashboard.vue')
      },
      {
        path: '/profile',
        component: () => import('../views/Profile.vue')
      },
      {
        path: '/evaluate',
        component: () => import('../views/Evaluation.vue')
      },
      {
        path: '/skp',
        component: () => import('../views/SKP.vue')
      },
      {
        path: '/evaluate-skp',
        component: () => import('../views/ReviewSKP.vue')
      },
      {
        path: '/criterias',
        component: () => import('../views/admin/Criterias.vue')
      },
      {
        path: '/employers',
        component: () => import('../views/admin/Employers.vue')
      },
      {
        path: '/users',
        component: () => import('../views/admin/Users.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Auth',
    component: () => import('../views/Auth.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router