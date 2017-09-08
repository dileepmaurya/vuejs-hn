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
      component: List,
      props: {type: 'topstories'}
    },
    {
      path: '/new-stories',
      name: 'New stories',
      component: List,
      props: {type: 'newstories'}
    },
    {
      path: '/best-stories',
      name: 'Best stories',
      component: List,
      props: {type: 'beststories'}
    },
  ]
})
