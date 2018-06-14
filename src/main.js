// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import $ from 'jquery'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min'
import 'reset.css'
import 'lib-flexible'
import './assets/css/common.css'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import 'swiper/dist/css/swiper.min.css';
import 'video.js/dist/video-js.css'
import hammer from './assets/js/hammer-v2.0.8.min'
import VueVideoPlayer from "vue-video-player"
Vue.use(Mint);
Vue.use(VueVideoPlayer);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
