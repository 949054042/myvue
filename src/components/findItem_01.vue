<template>
    <div class="findItem_01">
        <swiper/>12
        <findTabBar/>
        <div class="box_01">
            <findItem3/>
            <findItem3/>1234
            <findItem4/>
        </div>
    </div>
</template>
<script>
import swiper from "../components/swiperItem"
import findTabBar from "../components/findTabBar"
import findItem3 from "../components/findItem_03"
import findItem4 from "../components/findItem_04"
import findItem5 from "../components/findItem_05"
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
            findItem3,
            findItem4,
            findItem5 
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
        z-index:1000;
        background-color:#f0f1f3;
    }
    .findItem_01 .box_01{
        box-sizing:border-box;
    }
    .box_01{
    }
     .module_01{
        margin-bottom:0.5866rem;
        background-color:#fff;
     }
    .module_02{
        background-color:#fff;
        padding:0px 0.16rem;
        padding-top:0.4rem;
        box-sizing:border-box;
    }
</style>