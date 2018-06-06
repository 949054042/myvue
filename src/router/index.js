import Vue from 'vue'
import Router from 'vue-router'
import Find from '../module/find'
import Video from '../module/video'
import My from '../module/my'
import Friend from '../module/friend'
import Account from '../module/account'
import Recommend from '../module/recommend'
import RadioStation from '../module/radioStation'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Find',
      name: 'Find',
      component: Find,
      children:[
        {
          path: '/Find/Recommend',
          name: 'Recommend',
          component: Recommend,
        },
        {
          path: '/Find/radioStation',
          name: 'RadioStation',
          component: RadioStation,
        }
      ]
    },
    {
      path: '/Video',
      name: 'Video',
      component: Video
    },
    {
      path: '/My',
      name: 'My',
      component: My
    },
    {
      path: '/Friend',
      name: 'Friend',
      component: Friend
    },
    {
      path: '/Account',
      name: 'Account',
      component: Account
    }
  ]
})
