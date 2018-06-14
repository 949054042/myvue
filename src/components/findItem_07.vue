<template>
    <div class="goodSale" @click='$router.push({name:"GoodsDetail"})'>
        <div class='wrapper clearfix'>
            <div class='left'>
                <img src='../assets/images/goods.png' alt='商品照片'/>
            </div>
            <div class='right'>
                <div class='first_floor'>
                    <p>
                        <font>商品</font>【网易云音乐专供版】漫步者WX800X立体声头戴式蓝牙耳机
                    </p>
                </div>
                <div class='second_floor'>
                    <p>
                        <font class='first_font'>￥199</font> <font class='second_font'>/229</font>
                    </p>
                </div>
                <div class='third_floor'>
                    <button type='button'>购买</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"goodSale",
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
    .goodSale .left{
        float:left;
        width:3.4533rem;
        height:3.0933rem;
        text-align:center;
        padding-top:0.4rem;
        box-sizing:border-box;
    }
    .goodSale .left img{
        width:1.5rem;
        height:2.24rem;
    }
    .goodSale .right{
        float:left;
        width:6.2rem;
        height:3.0933rem;
    }
    .goodSale .right .first_floor{
        margin-bottom:0.28rem;
        position:relative;
    }
   .goodSale .right .first_floor p{
        font-size:0.4rem;
        color:#323234;
        overflow:hidden;/*超出隐藏*/
        text-overflow:ellipsis;/*文本溢出时显示省略标记*/
        display:-webkit-box;/*设置弹性盒模型*/
        -webkit-line-clamp:2;/*文本占的行数,如果要设置2行加...则设置为2*/
        -webkit-box-orient:vertical;/*子代元素垂直显示*/
        line-height:0.52rem;
    }
    .goodSale .right .first_floor font{      
        width: 0.56rem;
        height: 0.2667rem;
        line-height: 0.2667rem;
        border: 0.0267rem solid #b74851;
        font-size: 0.2133rem;
        color: #b74851;
        display: inline-block;
        text-align: center;
        margin-right: 0.12rem;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        position: absolute;
        left: 0;
        top: 0.09rem;
        text-indent: 0rem;
    }
    .goodSale .right .second_floor{
        margin-bottom:0.1rem;
        text-align:left;
    }
    .goodSale .right .second_floor .first_font{
        color:#b74344;
        font-size:0.3733rem;
    }
    .goodSale .right .second_floor .second_font{
        color:#59595b;
        font-size:0.32rem;
        text-decoration:line-through;
    }
    .goodSale .right .third_floor{
        text-align:left;
    }
    .goodSale .right .third_floor button{
        width:1.9733rem;
        height: 0.7467rem;
        border-radius: 0.4538rem;
        background-color:#fff;
        border:1px solid #eb686d;
        outline: none;
        font-size: 0.3733rem;
        line-height: 0.7467rem;
        color: #eb686d;
        font-family: inherit;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        text-align:center;
    }
</style>