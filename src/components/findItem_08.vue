<template>
    <div class="bigVideoPlay" @click='$router.push({name:"VideoDetail"})'>
       <img src='../assets/images/video_02.png' alt='mv封面'/>
       <div class='introduce'>
           <span class='mv'>MV</span>
           <span class='name'>家乡（电影雄狮）宣传曲MV</span>
           <span></span>
       </div>
    </div>
</template>
<script>
    export default{
        name:"videoPlay",
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
    .bigVideoPlay{
        position:relative;
        width:9.667rem;
        height:5.467rem;
    }
    .bigVideoPlay img{
        width:9.667rem;
        height:5.467rem;
        position: absolute;
        z-index:100;
        border-radius:0.0667rem;
        left:0;
        top:0;
    }
    .introduce{
        position:absolute;
        bottom:0.4rem;
        left:0;
        padding-left:0.16rem;
        width:100%;
        z-index:200;
        color: #fff;
        text-align:left;
    }
    .introduce .mv{
        font-size:0.2133rem;
        color:#fff;
        padding:0.08rem 0.0533rem;
        border:1px solid #bfbcb3;
        vertical-align:middle;
    }
</style>