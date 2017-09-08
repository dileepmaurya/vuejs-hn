import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import List from '@/components/list'
import newStories from '@/components/newStories'
import bestStories from '@/components/bestStories'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/new-stories',
      name: 'New stories',
      component: newStories
    },
    {
      path: '/best-stories',
      name: 'Best stories',
      component: bestStories
    },
  ]
})
