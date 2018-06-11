<template>
    <div class="findItem5">
        <div class="left">
            <video-player    :options="playerOptions"  :playsinline="true"/>
        </div>
        <div class="right">
            <div class="title">
            <h3><span>单曲</span>【经典回忆】围炉音乐会周传雄《黄昏》，熟悉的亚洲面孔</h3>
            </div>
            <div class="detail">
                <img src="../assets/images/stop.png"/><span>48090</span><img src="../assets/images/msg.png"/><span>110</span>
            </div>
            <div class="from">
                <img src="../assets/images/video_poster.png" alt='网络错误'/><span>全球音悦台</span>
            </div>
        </div>
    </div>
</template>
<script>
 import { setTimeout } from 'timers';
    export default{
        name:"findItem5",
        props:[],
        watch:{

        },
        computed:{

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
                videoArr:[

                ],
                obj:{}
            }
        },
        beforeCreate:function(){
            console.log(1)
        },
        created:function(){
            console.log(2)
        },
        beforeMount:function(){
            console.log(3)
        },
        mounted:function(){
        },
        updated:function(){
        },
        beforeRouteEnter:function(to,form,next){
            var myVideo=VideoJs("#video_01",{
                poster:require("../assets/images/video_poster.png")
            });
        },
        methods:{

        }
    }
</script>
<style>
    .findItem5{
        height:4rem;
    }
    .findItem5 .left{
        float:left;
        width:3.1733rem;
        height:3.1866rem;
    }
    .findItem5 .vjs_video_3-dimensions{
        width: 100%;
        height: 3.1866rem;
        position: relative;
        object-fit:fill;
     }
    .findItem5 .right{
        float:left;
      height:3.1733rem;
         width:6.5067rem;
        box-sizing:border-box;
        padding-left:0.2667rem;
    }
     .findItem5 .right .title{
         position: relative;
         margin-bottom:0.3333rem;
     }
      .findItem5 .title span{
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
        left: 0;
        top: 0.05rem;
        text-indent: 0rem;
      }
       .findItem5 .title h3{
          font-size: 0.3733rem;
            color: #333436;
            font-family: inherit;
            width: 88%;
            word-break: break-all;
            line-height: 0.6rem;
            text-align: left;
            width:100%;
      }
      .findItem5 .detail{
          text-align:left;
          width:100%;
          display:table-cell;
          align-items: center;
          height:0.8rem;
      }
       .findItem5 .detail span{
           display:inline-block;
       }
      .findItem5 .detail img:nth-of-type(1){
          width:0.24rem;
          height:0.2933rem;
          margin-right:0.0933rem;
      }
      .findItem5 .detail img:nth-of-type(2){
          width:0.32rem;
          height:0.2933rem;
          margin-left:0.3867rem;
          margin-right:0.0933rem;
      }
       .findItem5 .from{
           text-align:left;
           height:0.7467rem;
           line-height:0.5rem;
           border-top:0.0133rem solid #e1e2e4;
           padding-top:0.1533rem;
           box-sizing:content-box;
       }
       .findItem5 .from img{
           width:0.6933rem;
           height:0.6933rem;
           border-radius:50%;
            display:inline-block;
            vertical-align: middle;
            margin-right:0.1467rem;
       }
        .findItem5 .from span{
            display:inline-block;
        }
</style>