import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import page1 from '@/components/day1/page1'
import page2 from '@/components/day1/page2'
import page3 from '@/components/day1/page3'
import page4 from '@/components/day2/page4'
import page5 from '@/components/day2/page5'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: home
    },
    {
      path: '/page1',
      name: 'page1',
      component: page1,
      children: [{
        path: 'page2',
        name: 'page2',
        component: page2
      },
      {
        path: 'page3',
        name: 'page3',
        component: page3
      }]
    },
    {
      path: '/page4',
      name: 'page4',
      component: page4,
      children: [{
        path: 'page5',
        name: 'page5',
        component: page5
      }]
    }
  ]
})
