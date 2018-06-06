<template>
    <div class="findItem_01">
        <swiper/>
        <findTabBar/>
    </div>
</template>
<script>
import swiper from "../components/swiperItem"
import findTabBar from "../components/findTabBar"
    export default{
        name:"findItem_01",
        props:[],
        watch:{

        },
        computed:{

        },
        components:{
            swiper,
            findTabBar
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
    .findItem_01{
        min-height:100vh;
    }
</style>