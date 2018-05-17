import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/layouts/MainLayout'
import HomePage from '@/pages/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '/',
          name: 'HomePage',
          component: HomePage
        }
      ]
    }
  ]
})
