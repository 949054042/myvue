<template>
    <div class="findModule">
        <div class="title">
            <h3>有声书<img src="../assets/icon/more.png"/></h3>
        </div>
        <div class="mainContain">
            <ul class="clearfix">
                <li>
                    <div class="imgContain">
                        <img src="../assets/images/poster_01.png" alt="poster"/>
                    </div>
                    <div class="textContain">
                        <p>五分钟通晓最IN4实事</p>
                    </div>
                </li>
                <li>
                    <div class="imgContain">
                        <img src="../assets/images/poster_01.png" alt="poster"/>
                    </div>
                    <div class="textContain">
                        <p>五分钟通晓最IN实事</p>
                    </div>
                </li>
                <li>
                    <div class="imgContain">
                        <img src="../assets/images/poster_01.png" alt="poster"/>
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
</style>