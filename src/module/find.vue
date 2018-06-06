<template>
    <div class="Find">
        <div class="top">
            <Header/>
            <div class="checkMenu">
                <span v-on:click="follow(1)">个性推荐</span>
                <span v-on:click="follow(0)">主播电台</span>
                <i class="follow" v-bind:class="{follow2:flag3}"></i>
            </div>
        </div>
        <router-view/>
    </div>
</template>
<script>
import Header from "../components/searchBar";
    export default{
        name:"Find",
        props:[],
        watch:{

        },
        mounted:function(){
            this.$router.push({
                name:"Recommend"
            })
        },
        computed:{

        },
        data:function(){
            return {
                flag3:false
            }
        },
        components:{
            Header
        },
        methods:{
            follow:function(m){
                if(m){
                    this.flag3=false;
                    this.$router.push("/Find/Recommend")
                }else{
                   this.flag3=true;
                   this.$router.push("/Find/radioStation")
                }
            }
        }
    }
</script>
<style>
    .checkMenu{
        height:1.28rem;
        background-color:#de4138;
        padding:0px 1.44rem;
        position: relative;
    }
    .checkMenu span{
        display:inline-block;
        font-size:0.3466rem;
        color:#fff;
        font-family:inherit;
        line-height:1.28rem;
    }
    .checkMenu span:nth-child(1){
        float:left;
        margin-left:0.8rem;
    }
    .checkMenu span:nth-child(2){
        float:right;
        margin-right:0.8267rem;
    }
     .checkMenu i{
        transition:all ease .5s;
        width:0.8rem;
        height:0.08rem;
        border-radius:0.04rem;
        background-color:#fff;
     }
    .checkMenu .follow{
        position:absolute;
        left:2.5rem;
        top:1.013rem;
    }
    .checkMenu .follow2{
        left:6.533rem;
        top:1.013rem; 
    }
    .top{
        position: fixed;
        height:2.2133rem;
        width:100%;
        left:0;
        top:0;
        z-index:1000;
    }
</style>