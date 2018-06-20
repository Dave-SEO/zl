import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['views/login/login'], resolve)
    },
    {
      path: '/home',
      name: 'Home',
      // component: resolve => require(['components/demo'], resolve),
      component: resolve => require(['views/Home'], resolve),
      children: [
        {
          path: '/MeetingList',
          name: 'MeetingList',
          component: resolve => require(['views/Meeting/MeetingList'], resolve)
        },
        {
          path: '/UserCenter',
          name: 'UserCenter',
          component: resolve => require(['views/UserCenter/UserCenter'], resolve)
        }
      ]
    },
    {
      path: '/addMeeting/:id',
      name: '/addMeeting',
      component: resolve => require(['views/Meeting/AddMeeting'], resolve)
    }
    // {
    //   path: '/demo',
    //   name: 'demo',
    //   component: resolve => require(['components/demo'], resolve)
    // }
  ]
})
