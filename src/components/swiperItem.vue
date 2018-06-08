<template>
    <div class="SwiperItem">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../assets/images/swiper_01.png" alt="网络错误"/>
                </div>
                <div class="swiper-slide">
                     <img src="../assets/images/swiper_03.png" alt="网络错误"/>
                </div>
                <div class="swiper-slide">
                      <img src="../assets/images/swiper_01.png" alt="网络错误"/>
                </div>
                <div class="swiper-slide">
                    <img src="../assets/images/swiper_01.png" alt="网络错误"/>
                </div>
                <div class="swiper-slide">
                     <img src="../assets/images/swiper_03.png" alt="网络错误"/>
                </div>
                <div class="swiper-slide">
                      <img src="../assets/images/swiper_01.png" alt="网络错误"/>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            
            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            
            <!-- 如果需要滚动条 -->
            <div class="swiper-scrollbar"></div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"SwiperItem",
        props:[],
        watch:{

        },
        computed:{

        },
        data:function(){
            return {

            }
        },
        mounted:function(){
            var swiper=new Swiper(".swiper-container",{
                direction: 'horizontal',
                loop: true,
                autoPlay:true,
                // 如果需要分页器
                pagination: {
                el: '.swiper-pagination',
                },
            })
        },
        methods:{

        }
    }
</script>
<style>

</style>