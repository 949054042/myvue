<template>
    <div class="videoDetail">
        <div class='videoContainer'>
            <video-player    :options="playerOptions"  :playsinline="true"  ref="videoPlayer"/>
        </div>
        <div class='wrapper' id='wrapper'>
            <div class='videoDetails'>

            </div>
            <div class='singerName'>

            </div>
            <div class='videoAbout'>
                <div class='aboutTitle'>

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
            </div>
        </div>
        <div class='voice'>
            <div class='input'>
                <input type='text' placeholder="发表评论"/>
            </div>
            <div class='msgIcon'>
                <img src=''/>
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
                    poster: require("../assets/images/video_poster.png")
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
    }
    .videoDetail .videoContainer{
        width:100%;
        height:5.64rem;
        position:fixed;
        left:0;
        top:0;
        width:100%;
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
    .videoDetail .singerName{
        box-sizing:border-box;
        padding:0.2533rem 0.2667rem;
        height:1.333rem;
        border-bottom:1px solid #e1e2e4;
    }
    .aboutTitle{
        box-sizing:border-box;
        padding-left:0.2667rem;
        padding-top:0.1867rem;
        height:0.6667rem;
        background-color:#eeeff1;
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
</style>