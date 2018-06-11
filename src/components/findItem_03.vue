<template>
    <div class="findModule">
        <div class="title">
            <h3>有声书</h3>
        </div>
        <div class="mainContain">
            <ul class="clearfix">
                <li>
                    <div class="imgContain addTitle">
                        <img src="../assets/images/poster_01.png" alt="poster"/>
                        <div class="Premium">
                            付费精品
                        </div>
                    </div>
                    <div class="textContain">
                        <p>五分钟通晓最IN4实事</p>
                    </div>
                </li>
                <li>
                    <div class="imgContain">
                        <img src="../assets/images/poster_01.png" alt="poster"/>
                        <div class="Premium">
                            付费精品
                        </div>
                    </div>
                    <div class="textContain">
                        <p>五分钟通晓最IN实事</p>
                    </div>
                </li>
                <li>
                    <div class="imgContain">
                        <img src="../assets/images/poster_01.png" alt="poster"/>
                        <div class="Premium">
                            付费精品
                        </div>
                    </div>
                    <div class="textContain">
                        <p>五分钟通晓最IN实事</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        name:"findModule",
        props:[],
        watch:{

        },
        computed:{

        },
        data:function(){
            return {

            }
        },
        methods:{

        }
    }
</script>
<style>
    .findModule{
        margin-bottom:1.04rem;
        position: relative;
        background-color:#fff;
    }
    .findModule .mainContain li{
        float:left;
        width:33%;
    }
    .findModule .mainContain .imgContain{
        margin-bottom:0.2133rem;
    }
    .findModule .mainContain .imgContain img{
        border-radius:0.0533rem;
    }
    .textContain p{
        font-size:0.32rem;
        color:#333436;
        font-family:inherit;
        width:100%;
        word-break:break-all;
    }
    .findModule .title h3{
        font-size:0.4rem;
        color:#333436;
        font-family:inherit;
        text-align:left;
        margin-bottom:0.4rem;
        font-weight:600;
    }
    .findModule .title h3 img{
        width:0.2133rem;
        margin-left:0.24rem;
        vertical-align:top;
    }
    .imgContain{
        position: relative;
    }
    .imgContain .Premium{
        position:absolute;
        width:1.2rem;
        height:0.4rem;
        border-radius:0px 0px 0.133rem 0px;
        left:0;
        top:0;
        background-color:#d9362d;
        font-size:0.2133rem;
        color:#fff;
        line-height:0.4rem;
        display:none;
    }
    .imgContain.addTitle .Premium{
        display:block;
    }
</style>