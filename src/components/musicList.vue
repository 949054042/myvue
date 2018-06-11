<template>
    <div class="musicList">
        <div class="musicListTop">
            <img src="../assets/icon/back.png" alt="back" class="back" @click="back()"/>
            <span class='title'>电台</span>
            <img src="../assets/icon/share.png" alt="back" class="share"/>
            <img src="../assets/icon/sound.png" alt="back" class="sound"/>
        </div>
        <div class="musicListBottom">

        </div>
    </div>
</template>
<script>
    export default{
        name:"Friend",
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
            back:function(){
                this.$router.back()
            }
        }
    }
</script>
<style>
    .musicListTop{
        box-sizing:border-box;
        padding-right:0.36rem;
        padding-left:0.48rem;
        height:0.8rem;
        background-color:#262b2f;
        opacity:0.8;
        position: relative;
    }
     .musicListTop img{
         position:absolute;
     }
    .musicListTop .back{
        width:0.4rem;
        height:0.8rem;
        left:0.4rem;
        top:0rem;
    }
    .musicListTop .share{
        width:0.6333rem;
        height:0.8rem;
        right:1.6133rem;
        top:50%;
        transform:translateY(-50%)
    }
    .musicListTop .title{
        display:inline-block;
        font-size:0.4533rem;
        color:#fff;
        font-family:inherit;
        line-height:0.8rem;
    }
    .musicListTop .sound{
        width:0.75rem;
        height:0.5067rem;
        right:0.36rem;
        bottom:0rem;
    }
</style>