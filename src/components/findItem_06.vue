<template>
    <div class="findItem6">
        <div class="top2">
            <video-player    :options="playerOptions"  :playsinline="true"  ref="videoPlayer"/>
        </div>
    </div>
</template>
<script>
    export default{
        name:"findItem6",
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
                    poster: require("../assets/images/video_poster2.png")
                },
                videoArr:[

                ]
            }
        },
        methods:{

        }
    }
</script>
<style>
    .findItem6 .vjs_video_417-dimensions{
        width:100%;
    }
</style>