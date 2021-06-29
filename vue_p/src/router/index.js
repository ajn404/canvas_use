import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import page1 from '@/components/page1'
import page2 from '@/components/page2'
import page3 from '@/components/page3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
  ]
})
