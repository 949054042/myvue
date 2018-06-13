<template>
    <div class="radioDetail">
        <div class="radioDetailTop">
            <div class="wrapper"></div>
            <img src="../assets/icon/back.png" alt="back" class="back" @click="back()"/>
            <span class='title'>电台</span>
            <img src="../assets/icon/share.png" alt="back" class="share"/>
            <img src="../assets/icon/sound.png" alt="back" class="sound"/>
        </div>
        <div class="radioDetailBottom" id="radioDetailBottom">
            <div class="wrapper">
                <div class="poster"  @click="say()">
                    <div class='motel'></div>
                    <img src="../assets/images/mohu_04.jpg" alt='网络错误' class='bg'/>
                    <div class='operation'>
                       <div class='msg'>
                           <h3>
                               张小二的小窝
                           </h3>
                           <p>23130人订阅</p>
                       </div> 
                        <div class='order'>
                            <img src='../assets/icon/fivestar.png' alt='网络错误'/>
                            <button type='button'>订阅</button>
                       </div> 
                    </div>
                </div>
                <div class="detail">
                    <ul class='selectHead clearfix'>
                        <li :class='{active:flag}' @click='flag=true'>
                            <span>详情</span>
                        </li>
                        <li :class="{active:!flag}" @click="flag=false">
                            <span>界面</span>
                        </li>
                    </ul>
                    <ul class='selectBody clearfix'>
                        <li v-show='flag'>
                            <ul>
                                <li class='clearfix' v-for="(m,n) in listArr" v-bind:key="n">
                                    <div class='listNumber'>
                                        <h4>1</h4>
                                    </div>
                                    <div class='ListDetail'>
                                        <div class='left'>
                                            <div class='top'>
                                                <h3>后来要体面</h3>
                                            </div>
                                            <div class='bottom'>
                                                <div class='date'>05-13</div>
                                                <div>314.6万</div>
                                                <div class='playFinish'>05:04</div>
                                                <div class='status'>已播完</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li v-show='!flag'>
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
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { setTimeout } from 'timers';
import Scroll from "iscroll"
    export default{
        name:"Friend",
        props:[],
        watch:{

        },
        computed:{

        },
        data:function(){
            return {
                flag:true,
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
            var isScroll=new Scroll("#radioDetailBottom",{
                mouseWheel: true,
                click:true
            });
        },
        methods:{
            back:function(){
                this.$router.back()
            },
            say:function(){
            }
        }
    }
</script>
<style>
    .radioDetail{
        height:100vh;
    }
   .radioDetail .radioDetailTop{
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
    .radioDetail .radioDetailTop img{
         position:absolute;
     }
   .radioDetail .radioDetailTop .back{
        width:0.4rem;
        height:0.4rem;
        left:0.4rem;
        top:50%;
        transform:translateY(-50%);
        z-index:1000;
    }
    .radioDetail .radioDetailTop .share{
        width:0.65rem;
        height:0.65rem;
        right:1.6133rem;
        top:50%;
        transform:translateY(-50%);
        z-index:1000;
    }
    .radioDetail .radioDetailTop .title{
        display:inline-block;
        font-size:0.4533rem;
        color:#fff;
        font-family:inherit;
        line-height:0.8rem;
        z-index:1000;
    }
    .radioDetail .radioDetailTop .sound{
        width:0.75rem;
        height:0.5067rem;
        right:0.36rem;
        bottom:0rem;
        top:50%;
        transform:translateY(-50%);
        z-index:1000;
    }
    .radioDetail .radioDetailTop .wrapper{
        position:absolute;
        left:0;
        top:0;
        height:0.8rem;
        width:100%;
        z-index:100;
        background-color:#262b2f;
        opacity:0;
    }
    .radioDetail .radioDetailBottom{
        position:absolute;
        top:0.8rem;
        bottom:1.307rem;
        left:0;
        width:100%;
    }
   .radioDetailBottom .poster{
        width:100%;
        height:7.7733rem;
    }
    .radioDetailBottom .motel{
        position: absolute;
        width:100%;
        height:7.7733rem;
        left:0;
        top:0;
        background:#333;
        opacity:0.3;
    }
    .radioDetailBottom .poster .bg{
        width:100%;
        height:7.7733rem; 
    }
    .radioDetailBottom .poster .operation{
        position:absolute;
        bottom:2.5467rem;
        left:0;
        width:100%;
        padding-left:0.2667rem;
        box-sizing:border-box;
        height:1.0933rem;
    }
    .radioDetailBottom .msg{
        float:left;
    }
    .radioDetailBottom .msg h3{
        font-size:0.4533rem;
        color:#fff;
        font-family:inherit;
        text-align:left;
        margin-bottom:0.32rem;
    }
    .radioDetailBottom .msg p{
        font-size:0.3733rem;
        color:#fff;
        font-family:inherit;
        text-align:left;
    }
    .radioDetailBottom .order{
        float:right;
        margin-right:0.2667rem;
        width:2.333rem;
        height:0.9067rem;
        position:relative;
    }
    .radioDetailBottom .order button{
        width:2.333rem;
        height:0.9067rem;
        border-radius:0.4538rem;
        background-color:#fa5446;
        border:none;
        outline:none;
        font-size:0.3733rem;
        line-height:0.9067rem;
        color:#fff;
        font-family:inherit;
        padding-left:1.04rem;
        box-sizing:border-box;
        text-align: left;
    }
    .radioDetailBottom .order img{
        position:absolute;
        width:0.3467rem;
        height:0.3467rem;
        left:0.5333rem;
        top:0.28rem;
    }
    .radioDetail .radioDetailBottom .detail{
        position:relative;
        width: 100%;
        margin-top:-1rem;
        box-shadow: 0px -2px 10px #333;
        border-radius:0.24rem 0.24rem 0px 0px;
        z-index:1000;
        background:#fff;
        z-index:2000;
        height:100px;
     }
     .selectHead{
          height:1.333rem;
     }
     .selectHead li{
         float:left;
         height:1.333rem;
         width:50%;
         text-align:center;
         line-height:1.333rem;
     }
    .selectHead span{
        padding-bottom:0.1333rem;
    }
    .selectHead li.active span{
       border-bottom:0.08rem solid #d33a34;
        color:#d33a34;
    }
       .selectBody .playList .listNumber{
        float:left;
        width:1.0933rem;
        height:1.4533rem;
        line-height:1.4533rem;
        font-size:0.3733rem;
        color:#9d9ea0;
    }
    .selectBody li .listNumber{
        float:left;
        width:1.1067rem;
        width:11.067%;
        text-align:center;
        height:1.76rem;
    }
    .selectBody li .ListDetail{
        float:left;
        width:88.933%;
        border-bottom:1px solid #333;
        height:1.76rem;
    }
</style>