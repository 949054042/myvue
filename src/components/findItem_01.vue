<template>
    <div class="findItem_01">
        <swiper/>12
        <findTabBar/>
        <div class="box_01">
            <findItem3/>
        </div>
    </div>
</template>
<script>
import swiper from "../components/swiperItem"
import findTabBar from "../components/findTabBar"
import findItem3 from "../components/findItem_03"
    export default{
        name:"findItem_01",
        props:[],
        watch:{

        },
        computed:{

        },
        components:{
            swiper,
            findTabBar,
            findItem3
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
    .findItem_01 .box_01{
        margin-top:0.4533rem;
        padding:0px 0.16rem;
        box-sizing:border-box;
    }
</style>