import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Main from '@/components/main'
import Introduction from '@/components/Introduction'
import CityGallery from '@/components/cityGallery'
import Course from '@/components/course'
import Significance from '@/components/significance/significance'
import AboutUs from '@/components/aboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/main',
      component: Main,
      children: [
        {
          path: 'introduction',
          component: Introduction
        },
        {
          path: 'cityGallery',
          component: CityGallery
        },
        {
          path: 'course',
          component: Course
        },
        {
          path: 'significance',
          component: Significance
        },
        {
          path: 'aboutUs',
          component: AboutUs
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
