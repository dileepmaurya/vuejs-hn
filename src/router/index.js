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
      path: '/top-stories/:page?',
      name: 'Top stories',
      component: List,
      props: (route) => ({
        type: 'topstories', 
        page: (isNaN(parseInt(route.params.page))) ? 1 : parseInt(route.params.page)
      })
    },
    {
      path: '/new-stories/:page?',
      name: 'New stories',
      component: List,
      props: (route) => ({
        type: 'newstories', 
        page: (isNaN(parseInt(route.params.page))) ? 1 : parseInt(route.params.page)
      })
    },
    {
      path: '/best-stories/:page?',
      name: 'Best stories',
      component: List,
      props: (route) => ({
        type: 'beststories', 
        page: (isNaN(parseInt(route.params.page))) ? 1 : parseInt(route.params.page)
      })
    },
    {
      path: '/ask-stories/:page?',
      name: 'Ask stories',
      component: List,
      props: (route) => ({
        type: 'askstories', 
        page: (isNaN(parseInt(route.params.page))) ? 1 : parseInt(route.params.page)
      })
    },
    
  ]
})
