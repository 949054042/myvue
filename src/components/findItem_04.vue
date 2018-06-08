<template>
    <div class="findModule2">
        <div class="title">
            <h3><font>VIP</font>会员专区<img src="../assets/icon/more.png"/></h3>
        </div>
        <div class="mainContain">
            <ul class="clearfix">
                <li>
                    <div class="imgContain">
                        <img src="../assets/images/poster_01.png" alt="poster"/>
                    </div>
                    <div class="textContain">
                        <p><font>单曲</font>五分钟通晓最IN4实事</p>
                    </div>
                </li>
                <li>
                    <div class="imgContain">
                        <img src="../assets/images/poster_01.png" alt="poster"/>
                    </div>
                    <div class="textContain">
                        <p><font>电台</font>五分钟通晓最IN实事</p>
                    </div>
                </li>
                <li>
                    <div class="imgContain">
                        <img src="../assets/images/poster_01.png" alt="poster"/>
                    </div>
                    <div class="textContain">
                        <p><font>电台</font>五分钟通晓最IN实事</p>
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
    .findModule2{
        margin-bottom:1.04rem;
        position: relative;
    }
    .findModule2 .mainContain li{
        float:left;
        width:33%;
    }
    .findModule2 .mainContain .imgContain{
        margin-bottom:0.2133rem;
    }
    .findModule2 .mainContain .imgContain img{
        border-radius:0.0533rem;
    }
     .findModule2 .textContain{
         position: relative;
     }
    .findModule2 .textContain p{
        font-size:0.32rem;
        color:#333436;
        font-family:inherit;
        width:88%;
        word-break:break-all;
        line-height:0.4rem;
        text-align: left;
        text-indent:0.75rem;
    }
    .findModule2 .textContain font{
        width:0.56rem;
        height:0.2667rem;
        line-height:0.2667rem;
        border:0.0267rem solid #b86b7b;
        font-size:0.2133rem;
        color:#b86b7b;
        display: inline-block;
        text-align: center;
        margin-right:0.12rem;
        box-sizing:content-box;
        position: absolute;
        left:0;
        top:0.0267rem;
        text-indent:0rem;
    }
    .findModule2 .title h3{
        font-size:0.4rem;
        color:#e76c42;
        font-family:inherit;
        text-align:left;
        margin-bottom:0.4rem;
        font-weight:600;
    }
     .findModule2 .title font{
         width:0.867rem;
         height:0.5067rem;
         background-color:#fbdfd1;
         transform:skewX(-14deg);
         display:inline-block;
         text-align: center;
         line-height: 0.5067rem;
         margin-right:0.1067rem;
     }
    .findModule2 .title h3 img{
        width:0.2133rem;
        margin-left:0.24rem;
        vertical-align:top;
    }
</style>