<template>
    <div class="musicList">
        <div class="musicListTop">
            <div class="wrapper"></div>
            <img src="../assets/icon/back.png" alt="back" class="back" @click="back()"/>
            <span class='title'>专辑</span>
            <img src="../assets/icon/share.png" alt="back" class="share"/>
            <img src="../assets/icon/sound.png" alt="back" class="sound"/>
        </div>
        <div class="musicListBottom" id="musicListBottom">
            <div class="wrapper">
                <div class="poster">
                    <div class='motel'></div>
                    <img src="../assets/images/mohu_03.jpg" alt='网络错误' class='bg'/>
                    <div class="search">
                        <input type="search" placeholder="搜索歌单内歌曲"/>
                    </div>
                    <div class='pronunce'>
                        <div class="left">
                            <div class='model'></div>
                            <img src='../assets/images/bg_01.jpg' alt="poster"/>
                            <div class='totalNumber'>
                                <img src='../assets/icon/listen.png' alt='all'/><span>3795</span>&nbsp<span>万</span>
                            </div>
                            <div class='info'>
                                <img src='../assets/icon/info.png'/>
                            </div>
                        </div>
                        <div class='right'>
                            <div class='title'>
                                <h3>如果您想听民谣，可以从这些歌曲开始。</h3>
                            </div>
                            <div class="more">
                                <img src='../assets/images/user.png' alt='网络错误' class='user'/><span class='username'>完美的灵魂</span><img src='../assets/icon/more_02.png' alt='网络错误' class='more2'/>
                            </div>
                        </div>
                    </div>
                    <div class='select'>
                        <ul>
                            <li>
                                <img src='../assets/icon/message.png'/>
                                <p>2733</p>
                            </li>
                            <li>
                                <img src='../assets/icon/share.png'/>
                                <p>2733</p>
                            </li>
                            <li>
                                <img src='../assets/icon/download.png'/>
                                <p>2733</p>
                            </li>
                            <li>
                                <img src='../assets/icon/morecheck.png'/>
                                <p>2733</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="detail">
                    <div class='operation'>
                        <div class='left'>
                            <img src='../assets/icon/play.png' alt='网络错误'/><span class='playAll'>播放全部</span><span class='total'>（共111首）</span>
                        </div>
                        <div class='right'>
                            <img src='../assets/icon/add.png' alt='网络错误'/><span class='playAll'>收藏</span><span class='total'>（67.1万）</span>
                        </div>
                    </div>
                    <div class='playList'>
                        <ul>
                            <li class='clearfix' v-for="(m,n) in listArr" v-bind:key="n">
                                <div class='listNumber'>
                                    <p>{{m.number}}</p>
                                </div>
                                <div class='musicDetail'>
                                    <div class='left'>
                                        <h4>{{m.musicName}}</h4>
                                        <p><font v-show="m.isSq">SQ</font>{{m.cdName}}</p>
                                    </div>
                                    <div class='right'>
                                        <img src='../assets/icon/play_03.png' class='play'/><img src='../assets/icon/shenglve.png' class='shenglve'/>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"Friend",
        props:[],
        watch:{

        },
        computed:{

        },
        data:function(){
            return {
                listArr:[
                    {
                        number:1,
                        musicName:"涩",
                        cdName:"纣王老胡-昨天",
                        isSq:true
                    },
                                        {
                        number:2,
                        musicName:"涩",
                        cdName:"纣王老胡-昨天",
                        isSq:true
                    },
                                        {
                        number:3,
                        musicName:"涩",
                        cdName:"纣王老胡-昨天",
                        isSq:true
                    },
                                        {
                        number:4,
                        musicName:"涩",
                        cdName:"纣王老胡-昨天",
                        isSq:true
                    },
                                        {
                        number:5,
                        musicName:"涩",
                        cdName:"纣王老胡-昨天",
                        isSq:true
                    },
                                        {
                        number:6,
                        musicName:"涩",
                        cdName:"纣王老胡-昨天",
                        isSq:true
                    },
                                        {
                        number:7,
                        musicName:"涩",
                        cdName:"纣王老胡-昨天",
                        isSq:true
                    },
                                        {
                        number:8,
                        musicName:"涩",
                        cdName:"纣王老胡-昨天",
                        isSq:true
                    },
                                        {
                        number:9,
                        musicName:"涩",
                        cdName:"纣王老胡-昨天",
                        isSq:true
                    },
                                        {
                        number:10,
                        musicName:"涩",
                        cdName:"纣王老胡-昨天",
                        isSq:true
                    },
                                        {
                        number:1,
                        musicName:"涩",
                        cdName:"纣王老胡-昨天",
                        isSq:true
                    },
                ]
            }
        },
        mounted:function(){
            var isScroll=new Scroll("#musicListBottom",{

            });
        },
        methods:{
            back:function(){
                this.$router.back()
            }
        }
    }
</script>
<style>
    .musicListTop{
        box-sizing:border-box;
        padding-right:0.36rem;
        padding-left:0.48rem;
        height:0.8rem;
        box-sizing:border-box;
        position: fixed;
        top:0;
        left:0;
        width:100%;
        z-index:9999;
        background-color:#262b2f;
        opacity:0.5;
    }
     .musicListTop img{
         position:absolute;
     }
    .musicListTop .back{
        width:0.4rem;
        height:0.4rem;
        left:0.4rem;
        top:50%;
        transform:translateY(-50%);
        z-index:1000;
    }
    .musicListTop .share{
        width:0.65rem;
        height:0.65rem;
        right:1.6133rem;
        top:50%;
        transform:translateY(-50%);
        z-index:1000;
    }
    .musicListTop .title{
        display:inline-block;
        font-size:0.4533rem;
        color:#fff;
        font-family:inherit;
        line-height:0.8rem;
        z-index:1000;
    }
    .musicListTop .sound{
        width:0.75rem;
        height:0.5067rem;
        right:0.36rem;
        bottom:0rem;
        top:50%;
        transform:translateY(-50%);
        z-index:1000;
    }
     .musicListTop .wrapper{
        position:absolute;
        left:0;
        top:0;
        height:0.8rem;
        width:100%;
        z-index:100;
        background-color:#262b2f;
        opacity:0;
    }
    .musicListBottom{
        height:100vh;
        position:absolute;
        top:0.8rem;
        left:0;
        width:100%;
    }
    .musicListBottom .wrapper{
        height:100vh;
    }
    .musicListBottom .poster{
        width:100%;
        height:7.7733rem;
        left:0;
        top:0;
        position:absolute;
        z-index:100;
    }
    .musicListBottom .motel{
        position: absolute;
        width:100%;
        height:7.7733rem;
        left:0;
        top:0;
        background:#333;
        opacity:0.3;
    }
    .musicListBottom .poster .bg{
        width:100%;
        height:7.7733rem; 
    }
    .musicListBottom .poster .search{
        position:absolute;
        left:0.2667rem;
        top:0.48rem;
    }
    .musicListBottom .poster input{
        width:9.4933rem;
        height:0.8rem;
        border-radius:0.4rem;
        outline:none;
        background:#333;
        opacity:0.6;
        text-align:center;
        color:#fff;
    }
    .musicListBottom .poster .pronunce{
        position:absolute;
        left:0.2667rem;
        right:0.2667rem;
        top:1.8rem;
        height:3.76rem;
    }
     .musicListBottom .pronunce  .left img{
         width:3.8933rem;
         height:3.76rem;
     }
     .musicListBottom .pronunce .left,.musicListBottom .pronunce .right{
         float:left;
     }
     .musicListBottom .pronunce .left{
         width:3.8933rem;
         height:3.76rem;
         position:relative;
     }
      .musicListBottom .pronunce .left .model{
          position:absolute;
          left:0;
          top:0;
          background:#333;
          opacity:0.3;
            width:3.8933rem;
            height:3.76rem;
        z-index:100;
      }
     .musicListBottom .pronunce .totalNumber{
         position:absolute;
         right:0.2rem;
         top:0.12rem;
          z-index:1000;
     }
     .musicListBottom .pronunce .totalNumber img{
         width:0.2667rem;
         height:0.2667rem;
        margin-right:0.08rem;
        vertical-align:middle;
     }
      .musicListBottom .pronunce .totalNumber span{
          display:inline-block;
          font-size:0.3733rem;
          color:#fff;
      }
    .musicListBottom .pronunce .info{
        position:absolute;
         right:0.2rem;
         bottom:0.12rem;
          z-index:1000;
     }
    .musicListBottom .pronunce .info img{
        width:0.5467rem;
         height:0.5467rem;
    }
     .musicListBottom .pronunce .right{
         width:4.8rem;
         height:3.76rem;
         margin-left:0.4rem;
         box-sizing:border-box;
         padding-top:0.5333rem;
     }
     .musicListBottom .pronunce .right .title{
         margin-bottom:0.6667rem;
     }
     .musicListBottom .pronunce .more{
         text-align:left;
     }
      .musicListBottom .pronunce .username{
          font-size:0.3733rem;
          color:#fff;
          margin-left:0.067rem;
          margin-right:0.2933rem;
          display: inline-block;
      }
      .musicListBottom .pronunce .user{
          width:0.9067rem;
          height:0.8rem;
          vertical-align:middle;
      }
        .musicListBottom .pronunce .more2{
            width: 0.3rem;
            height: 0.3rem;
      }
     .musicListBottom .pronunce h3{
         font-size:0.4rem;
         color:#fff;
         word-break:break-all;
         text-align:left;
         line-height:0.6667rem;
     }
     .select{
         position:absolute;
         width:100%;
         bottom:0.3067rem;
     }
     .select li{
         float:left;
         width:25%;
         text-align:center;
         padding-bottom:0.32rem;
     }
    .select li img{
        width:0.5467rem;
        height:0.5067rem;
    }
    .select li p{
        font-size:0.32rem;
        color:#fff;  
    }
    .musicListBottom .detail{
        position: absolute;
        width: 100%;
        top:7.5rem;
        box-shadow: 0px -2px 10px #333;
        border-radius:0.24rem 0.24rem 0px 0px;
        z-index:1000;
        background:#fff;
    }
    .musicListBottom .detail .operation{
        height:1.333rem;
        box-sizing:border-box;
        padding-left:0.2667rem;
    }
    .musicListBottom .operation .left{
        display:flex;
        align-items:center;
        float:left;
        width:6.66rem;
        height:1.333rem;
    }
    .musicListBottom .operation .left img{
        width:0.5333rem;
        height:0.5333rem;
        margin-right:0.28rem;
    }
     .musicListBottom .operation .left .playAll{
         display:inline-block;
         font-size:0.4267rem;
         color:#000000; 
     }
    .musicListBottom .operation .left .total{
        display:inline-block;
         font-size:0.32rem;
         color:#97989a; 
     }
    .musicListBottom .operation .right{
        float:left;
        width:3.0667rem;
        height:1.333rem;
        display:flex;
        align-items:center;
        background:#f65246;
    }
    .musicListBottom .operation .right img{
        width:0.3467rem;
        height:0.3467rem;
        margin-left:0.2rem;
    }
     .musicListBottom .operation .right .playAll{
         display:inline-block;
         font-size:0.3467rem;
         color:#fff; 
     }
    .musicListBottom .operation .right .total{
         display:inline-block;
         font-size:0.3467rem;
         color:#fff; 
     }
    .musicListBottom .playList .listNumber{
        float:left;
        width:1.0933rem;
        height:1.4533rem;
        line-height:1.4533rem;
        font-size:0.3733rem;
        color:#9d9ea0;
    }
    .musicListBottom .playList .musicDetail{
        float:left;
        width:8.9067rem;
        height:1.4533rem;
        border-top:0.0133rem solid #e2e3e5;
        box-sizing:border-box;
        padding-right:0.2667rem;
     }
     .musicListBottom .playList .musicDetail .left{
        float:left;
        display:flex;
        align-items:center;
         height:1.4533rem;
         width:3.44rem;
         flex-wrap:wrap;
     }
     .musicListBottom .playList .musicDetail .left h4{
         flex-basis:100%;
         text-align:left;
     }
    .musicListBottom .playList .musicDetail .left p{
          flex-basis:100%;
          text-align:left;
          position: relative;
     }
     .musicListBottom .playList .musicDetail .left font{
         width: 0.56rem;
        height: 0.2667rem;
        line-height: 0.2667rem;
        border: 0.0267rem solid #b86b7b;
        font-size: 0.2133rem;
        color: #b86b7b;
        display: inline-block;
        text-align: center;
        margin-right: 0.12rem;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        vertical-align:middle;
     }
    .musicListBottom .playList .musicDetail .right{
        float:right;
        display:flex;
        align-items:center;
        height:1.4533rem;
        width:1.68rem;
     }
     .musicListBottom .playList .musicDetail .right .play{
         width:0.52rem;
         height:0.4267rem;
         margin-right:0.5333rem;
     }
    .musicListBottom .playList .musicDetail .right .shenglve{
         width:0.5333rem;
         height:0.2667rem;
     }
</style>