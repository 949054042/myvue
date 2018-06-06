<template>
    <div class="swiperItem">
        <div class="redBg"></div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../assets/images/swiper_03.png" alt=""/>
                </div>
                <div class="swiper-slide">
                    <img src="../assets/images/swiper_01.png" alt=""/>
                </div>
                <div class="swiper-slide">
                    <img src="../assets/images/swiper_03.png" alt=""/>
                </div>
                <div class="swiper-slide">
                    <img src="../assets/images/swiper_03.png" alt=""/>
                </div>
                <div class="swiper-slide">
                    <img src="../assets/images/swiper_01.png" alt=""/>
                </div>
                <div class="swiper-slide">
                    <img src="../assets/images/swiper_03.png" alt=""/>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script> 
import Swiper from "swiper/dist/js/swiper.min.js";
    export default{
        name:"swiperItem",
        props:[],
        watch:{

        },
        computed:{

        },
        mounted:function(){
            var mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                 autoplay:true,  
                // 如果需要分页器
                pagination: {
                el: '.swiper-pagination',
                },
            })      
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
    .swiperItem{
        height:3.773rem;
        position:relative;
    }
    .redBg{
        height:2.827rem;
        background-color:#eb493c; 
    }
    .swiper-container{
        position:absolute !important;
        width:9.6933rem;
        height:3.773rem;
        left:0.12rem;
        top:0px;
        box-sizing:border-box;
    }
    .swiper-container img{
        width:100%;
        height:3.773rem;
    }
</style>