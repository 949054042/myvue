import Vue from 'vue'
import Router from 'vue-router'
import Find from '../module/find'
import Video from '../module/video'
import My from '../module/my'
import Friend from '../module/friend'
import Account from '../module/account'
import Recommend from '../module/recommend'
// const MusicList= ()=>import("../components/musicList");
const MusicList = r => require.ensure([], () => r(require('../components/musicList')), 'MusicList')//异步加载组件
const RadioList = r => require.ensure([], () => r(require('../components/radioList')), 'RadioList')//异步加载组件
const VideoDetail = r => require.ensure([], () => r(require('../components/videoDetail')), 'RadioList')//异步加载组件
const GoodsDetail = r => require.ensure([], () => r(require('../components/goodsDetail')), 'GoodsDetail')//异步加载组件
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
    },
    {
      path: '/MusicList',
      name: 'MusicList',
      component: MusicList
    },
    {
      path: '/RadioList',
      name: 'RadioList',
      component: RadioList
    },{
      path: '/VideoDetail',
      name: 'VideoDetail',
      component:VideoDetail
    },{
      path: '/GoodsDetail',
      name: 'GoodsDetail',
      component:GoodsDetail
    }
  ]
})
