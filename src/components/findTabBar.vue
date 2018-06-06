<template>
    <div class="findTabBar">
        <ul v-for="(m,n) in imgArr" :key="n">
            <li>
                <img :src="m.src"/>
                <p>{{m.text}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:"findTabBar",
        props:[],
        watch:{

        },
        computed:{

        },
        data:function(){
            return {
                imgArr:[
                    {
                        src:require("../assets/images/findTab_01.png"),
                        text:"私人FM"
                    },
                    {
                        src:require("../assets/images/findTab_02.png"),
                        text:"每日推荐"
                    },
                    {
                        src:require("../assets/images/findTab_03.png"),
                        text:"歌单"
                    },
                     {
                        src:require("../assets/images/findTab_04.png"),
                        text:"排行榜"
                    },
                ]
            }
        },
        methods:{

        }
    }
</script>
<style>
    .findTabBar{
        height:2.7467rem;
        border-bottom:1px solid #e1e2e4;

    }
    .findTabBar ul{
    }
    .findTabBar li{
        float:left;
        width:25%;
        height:2.7467rem;
        padding-top:0.4533rem;
    }
    .findTabBar li img{
        width:1.333rem;
        height:1.333rem;
    }
    .findTabBar li p{
        font-size:0.32rem;
        color:#414244;
        font-family:inherit;
        margin-top:0.1867rem;
    }
</style>