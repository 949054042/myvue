<template>
    <div class="videoDetail">
        <div class='videoContainer'>
            <video-player    :options="playerOptions"  :playsinline="true"  ref="videoPlayer"/>
        </div>
        <div class='wrapper' id='wrapper'>
            <div>
                <div class='videoDetails'>
                    <div class='first_floor'>
                        <h2>开始用网易云啦！一首在市集唱的《旅行的意义》</h2>
                    </div>
                    <div class='second_floor clearfix'>
                        <div class='time'>
                            <p>发布：&nbsp2018-06-07</p>
                        </div>
                        <div class='totalPlay'>
                            <p>播放：&nbsp15107</p>
                        </div>
                    </div>
                    <div class='third_floor'>
                        <ul class='clearfix'>
                            <li>陈绮贞</li>
                            <li>陈绮贞</li>
                            <li>陈绮贞</li>
                            <li>陈绮贞</li>
                            <li>陈绮贞</li>
                        </ul>
                    </div>
                    <div class='forth_floor'>
                        <ul>
                            <li>
                                <div class='img'>
                                    <img src='../assets/icon/operate_01.png'/>
                                </div>
                                <div class='msg'>
                                    <p>143</p>
                                </div>
                            </li>
                            <li>
                                <div class='img'>
                                    <img src='../assets/icon/operate_02.png'/>
                                </div>
                                <div class='msg'>
                                    <p>36</p>
                                </div>
                            </li>
                            <li>
                                <div class='img'>
                                    <img src='../assets/icon/operate_03.png'/>
                                </div>
                                <div class='msg'>
                                    <p>68</p>
                                </div>
                            </li>
                            <li>
                                <div class='img'>
                                    <img src='../assets/icon/operate_04.png'/>
                                </div>
                                <div class='msg'>
                                    <p>16</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class='singerName'>
                    <div class='left'>
                        <img src='../assets/images/userImg.png' alt='用户头像'/><span>小小酥很酷</span>
                    </div>
                    <div class='right order'>
                        <img src='../assets/icon/add.png' alt='加关注'/>
                        <button type='button'>关注</button>
                    </div>
                </div>
                <div class='videoAbout'>
                    <div class='aboutTitle'>
                        相关推荐
                    </div>
                    <div class='aboutList'>
                        <ul>
                            <li v-for="(m,n) in videoDetailArr" v-bind:key='n'>
                                <div class='aboutImg'>
                                    <img :src='m.src' alt='poster'/>
                                </div>
                                <div class='aboutDetail'>
                                    <div class='aboutDetailName'>
                                        <h3>{{m.title}}</h3>
                                    </div>
                                    <div class='aboutDetailMsg'>
                                        <p>{{m.msg}}</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class='videoComment'>
                        <div class='commentTitle aboutTitle'>
                            最新评价（68）
                        </div>
                        <div class='commentList'>
                            <ul>
                                <li v-for='(m,n) in commentDetailArr' :key="n">
                                    <div class='imgContainer'>
                                        <img :src='m.userImg' alt='用户头像'/>
                                    </div>
                                    <div class='userComment'>
                                        <div class='userInfo clearfix'>
                                            <div class='left'>
                                                <div class='userName'>
                                                    {{m.userName}}
                                                </div>
                                                <div class='recoverTime'>
                                                    <p>{{m.recoverTime}}</p>
                                                </div>
                                            </div>
                                            <div class='right' @click='m.flag=!m.flag'>
                                                <img :src='m.src' alt='点赞' v-show="m.flag"/>
                                                <img :src='m.srcActive' alt='点赞' v-show="!m.flag"/>
                                            </div>
                                        </div>
                                        <div class='commentDetail'>
                                            {{m.commentDetail}}
                                        </div>
                                        <div class='userRecover'  v-show='m.flag2'>
                                            <p>
                                                <font>@{{m.others}}:</font>&nbsp{{m.othersComment}}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class='voice'>
            <div class='input'>
                <input type='text' placeholder="发表评论"/>
            </div>
            <div class='msgIcon'>
                <img src='../assets/icon/upload.png' alt='发言'/>
            </div>
        </div>
    </div>
</template>
<script>
import Scroll from "iscroll"
    export default{
        name:"videoDetail",
        props:[],
        watch:{

        },
        computed:{

        },
        mounted:function(){
            var iscroll=new Scroll("#wrapper",{

            })
        },
        data:function(){
            return {
                playerOptions: {
                    // videojs options
                    muted: true,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: "video/mp4",
                        src: require("../assets/video/zcx-huanghun.mp4")
                    }],
                    poster: require("../assets/images/videoposter2.png")
                },
                videoDetailArr:[
                    {
                        src:require("../assets/images/videoDetail.png"),
                        title:"早春的树开在大理",
                        msg:"02:54,by 空船顺流"
                    },
                    {
                        src:require("../assets/images/videoDetail.png"),
                        title:"早春的树开在大理",
                        msg:"02:54,by 空船顺流"
                    },
                    {
                        src:require("../assets/images/videoDetail.png"),
                        title:"早春的树开在大理",
                        msg:"02:54,by 空船顺流"
                    },
                    {
                        src:require("../assets/images/videoDetail.png"),
                        title:"早春的树开在大理",
                        msg:"02:54,by 空船顺流"
                    },
                    {
                        src:require("../assets/images/videoDetail.png"),
                        title:"早春的树开在大理",
                        msg:"02:54,by 空船顺流"
                    },
                ],
                commentDetailArr:[
                    {
                        userImg:require("../assets/images/userImg.png"),
                        src:require("../assets/icon/paise.png"),
                        srcActive:require("../assets/icon/praiseactive.png"),
                        flag:true,
                        flag2:true,
                        userName:"小小酥很酷",
                        recoverTime:"昨天12：15",
                        commentDetail:"sdfsfsfsf",
                        others:"qwqw",
                        othersComment:"dfgdfgdg"
                    },
                    {
                        userImg:require("../assets/images/userImg.png"),
                        src:require("../assets/icon/paise.png"),
                        srcActive:require("../assets/icon/praiseactive.png"),
                        flag:true,
                        flag2:true,
                        userName:"小小酥很酷",
                        recoverTime:"昨天12：15",
                        commentDetail:"sdfsfsfsf",
                        others:"qwqw",
                        othersComment:"dfgdfgdg"
                    },
                    {
                        userImg:require("../assets/images/userImg.png"),
                        src:require("../assets/icon/paise.png"),
                        srcActive:require("../assets/icon/praiseactive.png"),
                        flag:true,
                        userName:"小小酥很酷",
                        recoverTime:"昨天12：15",
                        commentDetail:"sdfsfsfsf",
                        others:"qwqw",
                        othersComment:"dfgdfgdg"
                    },
                    {
                        userImg:require("../assets/images/userImg.png"),
                        src:require("../assets/icon/paise.png"),
                        srcActive:require("../assets/icon/praiseactive.png"),
                        flag:true,
                        flag2:false,
                        userName:"小小酥很酷",
                        recoverTime:"昨天12：15",
                        commentDetail:"sdfsfsfsf",
                        others:"qwqw",
                        othersComment:"dfgdfgdg"
                    },
                    {
                        userImg:require("../assets/images/userImg.png"),
                        src:require("../assets/icon/paise.png"),
                        srcActive:require("../assets/icon/praiseactive.png"),
                        flag:true,
                        flag2:true,
                        userName:"小小酥很酷",
                        recoverTime:"昨天12：15",
                        commentDetail:"sdfsfsfsf",
                        others:"qwqw",
                        othersComment:"dfgdfgdg"
                    }
                ]
            }
        },
        methods:{

        }
    }
</script>
<style>
    .videoDetail{
        position: relative;
        height:100vh;
    }
    .videoDetail .wrapper{
        position:absolute;
        top:5.64rem;
        bottom:1.307rem;
        width:100%;
        overflow:scroll;
        z-index:1000;
    }
    .videoDetail .videoContainer{
        width:100%;
        height:5.64rem;
        position:fixed;
        left:0;
        top:0;
        width:100%;
        z-index:100;
    }
    .videoDetail .videoContainer .vjs_video_3-dimensions{
        width:100%;
        height:5.64rem;
    }
     .videoDetail .videoContainer .vjs-poster{
        background-size:cover;
    }
    .videoDetails{
        box-sizing:border-box;
        padding-top:0.56rem;
        height:6.8267rem;
        border-bottom:1px solid #e1e2e4;
    }
    .videoDetails .first_floor{
        font-size:0.5rem;
        color:#323234;
        text-align:left;
        padding:0rem 0.2667rem;
        font-weight:500;
        line-height:0.6rem;
        margin-bottom:0.3733rem;
    }
    .videoDetails .second_floor{
        font-size:0.3467rem;
        color:#939395;
        text-align:left;
        padding:0rem 0.2667rem;
        font-weight:500;
        line-height:0.6rem;
        margin-bottom:0.44rem;
    }
    .videoDetails .second_floor .time{
        float:left;
        padding-right:0.56rem;
        border-right:1px solid #e1e2e4;
    }
    .videoDetails .second_floor .totalPlay{
        float:left;
        padding-left:0.5333rem;
    }
    .videoDetails .third_floor{
        padding-left:0.2667rem;
        box-sizing:border-box;
        margin-bottom:0.9333rem;
    }
    .videoDetails .third_floor li{
        float:left;
        padding:0rem .2666rem;
        height:0.5333rem;
        line-height:0.5333rem;
        color:#39393b;
        font-size:0.2667rem;
        border:1px solid #eaebed;
        margin-right:0.2667rem;
        border-radius:0.2667rem;
    } 
    .videoDetails .forth_floor li{
        float:left;
        width:25%;
        text-align:center;
    }
    .videoDetails .forth_floor li img{
        width:0.5867rem;
        height:0.5867rem;
        margin-bottom:0.2133rem;
    }
    .videoDetails .forth_floor li p{
        font-size:0.24rem;
        color:#7e7f81;
    }
    .videoDetail .singerName{
        box-sizing:border-box;
        padding:0.2533rem 0.2667rem;
        height:1.333rem;
        border-bottom:1px solid #e1e2e4;
    }
    .singerName .left{
        float:left;
        height:0.8rem;
        box-sizing:border-box;
    }
    .singerName .left img{
        width:0.8rem;
        height:0.8rem;
        vertical-align: middle;
        margin-right:0.28rem;
    }
    .singerName .left span{
        font-size:0.3733rem;
        color:#303133;
        line-height:0.8rem;
        display:inline-block;
    }
    .singerName .right{
        float:right;
        height:0.8rem;
    }
    .singerName .right.order {
        width: 2.333rem;
        height: 0.9067rem;
        position: relative;
    }
    .singerName .right.order img {
        position: absolute;
        width: 0.3467rem;
        height: 0.3467rem;
        left: 0.5333rem;
        top: 0.28rem;
    }
   .singerName .right.order button {
        width: 2.333rem;
        height: 0.9067rem;
        border-radius: 0.4538rem;
        background-color: #fa5446;
        border: none;
        outline: none;
        font-size: 0.3733rem;
        line-height: 0.9067rem;
        color: #fff;
        font-family: inherit;
        padding-left: 1.04rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        text-align: left;
   }
    .videoDetail .aboutTitle{
        box-sizing:border-box;
        padding-left:0.2667rem;
        padding-top:0.1867rem;
        height:0.6667rem;
        background-color:#eeeff1;
        text-align:left;
    }
    .aboutList li{
        height:1.8933rem;
        padding-left:0.16rem;
        padding-right:0.3733rem;
        padding-top:0.16rem;
    }
    .aboutList li .aboutImg{
        float:left;
        width:2.8533rem;
        height:1.6rem;
        margin-right:0.2667rem;
    }
    .aboutList li .aboutImg img{
        width:2.8533rem;
        height:1.6rem;  
    }
    .aboutList li .aboutDetail{
        float:left;
        width:6.34rem;
        height:1.7333rem;
        border-bottom:1px solid #e1e2e4;
        box-sizing:border-box;
        padding-top:0.3333rem;
        text-align:left;
    }
     .aboutList .aboutDetail .aboutDetailName{
         font-size:0.3733rem;
         color:#333;
         margin-bottom:0.24rem;
         text-overflow:ellipsis;
         overflow: hidden;
         white-space: nowrap;
     }
     .aboutList .aboutDetail .aboutDetailMsg{
         font-size:0.2933rem;
         color:#78797b;
     }
     .voice{
         position: fixed;
         bottom:0;
         width:100%;
         left:0;
         height:1.2933rem;
         background-color:#fafafa;
         border-top:1px solid #ddd;
         z-index:9999;
     }
     .voice .input{
         float:left;
         width:8.4rem;
         margin-left:0.2667rem;
         margin-top:0.2533rem;
     }
     .voice input{
         width:8.4rem;
         height:0.7733rem;
         box-sizing:border-box;
         border:1px solid #ccccce;
         border-radius:0.3861rem;
         padding-left:0.36rem;
         outline:none;
     }
     .voice input::placeholder{
         font-size:0.3333rem;
         color:#c4c4c6;
         line-height:0.7733rem;
     }
     .msgIcon{
         float:right;
         width:0.5867rem;
         height:0.533rem;
         margin-right:0.3067rem;
         margin-top:0.3867rem;
     }
     .msgIcon img{
        width:0.5867rem;
        height:0.533rem;   
     }
     .videoComment .commentTitle{
        box-sizing:border-box;
        padding-left:0.2667rem;
        padding-top:0.1867rem;
        height:0.6667rem;
        background-color:#eeeff1;
        text-align:left;
     }
     .videoComment .commentList li{
         box-sizing:border-box;
         padding-left:0.2667rem;
         padding-right:0.2667rem;
         height:3.2267rem;
     }
    .videoComment .imgContainer{
         width:0.8rem;
        height:3.2267rem;
        margin-right:0.2667rem;
        float:left;
        padding-top:0.2667rem;
        box-sizing:border-box;
     }
    .videoComment .imgContainer img{
         width:100%;
         height:0.8rem;
     }
     .videoComment .userComment{
        width:8.4rem;
        height:3.2267rem;
        border-bottom:1px solid #e1e2e4;
        float:left;
        padding-top:0.2667rem;
        box-sizing:border-box;
     }
    .videoComment .userInfo{
         margin-bottom:0.44rem;
     }
    .videoComment .userInfo .left{
        float:left;
        text-align:left;
    }
    .videoComment .userInfo .left .userName{
        font-size:0.3333rem;
        color:#a7a7a9;
        margin-bottom:0.1067rem;
    }
    .videoComment .userInfo .left .recoverTime{
        font-size:0.24rem;
        color:#969698;  
    }
    .videoComment .userInfo .right{
        float:right;
    }
     .videoComment .userInfo .right img{
         width:0.3867rem;
         height:0.3867rem;
     }
    .videoComment .commentDetail{
        margin-bottom:0.32rem;
        text-align:left;
        font-size:0.32rem;
        color:#343638;
     }
    .videoComment .userRecover{
        border:1px solid #cbcbcd;
        padding:0.2933rem;
        text-align:left;
        font-size:0.32rem;
        color:#343638;
        margin-bottom:0.3867rem;
     }
    .videoComment .userRecover font{
        font-size:0.3467rem;
        color:#4c76a6;   
    }
    .videoComment .userRecover p{
        font-size:0.3733rem;
        color:#808082;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
</style>