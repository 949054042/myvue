<template>
  <div id="app">
    <router-view/>
    <ul class="navigation">
      <li v-for="(m,n) in pageArr" v-bind:key="m.i" v-on:click="change(m.i)">
        <img :src="m.iconPath" v-show="flag!=m.i"/>
        <img :src="m.iconPath_active" v-show="flag==m.i"/>
        <p v-bind:class="{selected:flag==m.i}">{{m.text}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return {
      flag:0,
      pageArr:[
        {
          i:0,
          url:"/",
          text:"发现",
          iconPath:require("./assets/icon/find_01.png"),
          iconPath_active:require("./assets/icon/find_02.png"),
          display:'block'
        },
        {
          i:1,
          url:"/video",
          text:"视频",
          iconPath:require("./assets/icon/video_01.png"),
          iconPath_active:require("./assets/icon/video_02.png"),
          display:'block'
        },
        {
          i:2,
          url:"/my",
          text:"我的",
          iconPath:require("./assets/icon/my_01.png"),
          iconPath_active:require("./assets/icon/my_02.png"),
          display:'block'
        },
        {
          i:3,
          url:"/friend",
          text:"朋友",
          iconPath:require("./assets/icon/friend_01.png"),
          iconPath_active:require("./assets/icon/friend_02.png"),
          display:'block'
        },
        {
          i:4,
          url:"/account",
          text:"账号",
          iconPath:require("./assets/icon/account_01.png"),
          iconPath_active:require("./assets/icon/account_02.png"),
          display:'block'
        }
      ]
    }
  },
  methods:{
    change:function(m){
      this.flag=m;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navigation{
  position:absolute;
  bottom:0px;
  width:100vw;
  margin:0;
  padding:0;
  border-top:1px solid #d0d0d0;
  height:1.307rem;
}
.navigation li{
  list-style:none;
  float:left;
  width:20%;
  text-align:center;
  margin:0;
  padding:0;
  height:1.307rem;
  box-sizing:border-box;
  padding-top:0.146rem;
}
.navigation li img{
  width:0.64rem;/*px*/
  height:0.667rem;
}
.navigation li p{
  font-size:0.24rem;/*px*/
  color:#bcb2b1;
  line-height:0.48rem;
}
.navigation li .selected{
  color:#c64653;
}
</style>
