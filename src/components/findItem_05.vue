<template>
    <div class="findItem5">
        <div class="left">
            <video id="video_01" src="../assets/video/zcx-huanghun.mp4" control></video>
        </div>
        <div class="right">
            <div class="title">
                <span>单曲</span><h3>【经典回忆】围炉音乐会周传雄《黄昏》，熟悉的亚洲面孔</h3>
            </div>
            <div class="detail">
                <span>48090</span><span>110</span>
            </div>
            <div class="from">
                <img src="" alt='网络错误'/><span>全球音悦台</span>
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
                videoArr:[

                ]
            }
        },
       mounted:function(){
           setTimeout(function(){
                var myVideo=VideoJs("#video_01",{
                    control:true
                })
           },500)
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
    .findItem5 .left video{
        width:100%;
    }
    .findItem5 .right{
        float:left;
      height:3.1733rem;
         width:6.5067rem;
        box-sizing:border-box;
        padding-left:0.2667rem;
    }
</style>