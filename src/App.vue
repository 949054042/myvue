<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <ul class="navigation">
      <li v-for="(m,n) in pageArr" v-bind:key="m.id">
        <p>{{m.text}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return {
      pageArr:[
        {
          i:0,
          url:"/",
          text:"发现",
          iconPath:("./assets/icon/find_01.png"),
          iconPath_active:("./assets/icon/find_02.png"),
        },
        {
          i:1,
          url:"/video",
          text:"视频",
          iconPath:("./assets/icon/video_01.png"),
          iconPath_active:("./assets/icon/video_02.png"),
        },
        {
          i:2,
          url:"/my",
          text:"我的",
          iconPath:("./assets/icon/my_01.png"),
          iconPath_active:("./assets/icon/my_02.png"),
        },
        {
          i:3,
          url:"/friend",
          text:"朋友",
          iconPath:("./assets/icon/friend_01.png"),
          iconPath_active:("./assets/icon/friend_02.png"),
        },
        {
          i:4,
          url:"/account",
          text:"账号",
          iconPath:("./assets/icon/account_01.png"),
          iconPath_active:("./assets/icon/account_02.png"),
        }
      ]
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
}
.navigation li{
  list-style:none;
  float:left;
  width:20%;
  text-align:center;
  margin:0;
  padding:0;
}
.navigation li p{
  font-size:0.24rem;/*px*/
  color:#bcb2b1;
}
</style>
