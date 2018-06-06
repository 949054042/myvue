<template>
    <div class="searchBar">
      <div class="left" v-show="flag1">
          <img src="../assets/icon/mic2.png" alt="网络错误"/>
      </div>
      <div class="center" :class="{center2:flag2}">
          <input placeholder="你是我的眼很好听哦" type="text" v-on:focus="change(1)"/>
      </div>
      <div class="right">
            <img src="../assets/icon/enter.png" alt="网络错误" v-show="flag1"/>
            <p v-show="!flag1" v-on:click="change(0)">取消</p>
      </div>
    </div>
</template>
<script>
    export default{
        name:"searchBar",
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
                flag1:true,
                flag2:false
            }
        },
        methods:{
            change:function(m){
                if(m){
                    this.flag1=false;
                    this.flag2=true;
                }else{
                    this.flag2=false;
                    this.flag1=true;
                }
            }
        }
    }
</script>
<style>
    .searchBar{
        height:0.8rem;
        box-sizing:border-box;
        padding:0px 0.4rem;
        background-color:#de4138;
    }
    .left,.center,.right{
        float:left;
        height:0.8rem;
        box-sizing: border-box;
        transition: margin-left ease .5s;
    }
    .left,.right{
        padding-top:0.065rem;
    }
    .center{
        margin:0px 0.56rem;
    }
    .center input{
        width:100%;
        border-radius:0.4rem;
        height:0.8rem;
        border:none;
        outline:none;
        padding-left:1.947rem;
        box-sizing: border-box;
        background:url('../assets/icon/search_01.png') no-repeat #e26760;;
        background-size:0.333rem 0.333rem;
        background-position: 1.4rem center;
        font-size:0.32rem;
        color:#fff;
        font-family:inherit;
    }
    .center input::placeholder{
        font-size:0.32rem;
        color:#fff;
        font-family:inherit;
    }
    .center{
        width:7.147rem;
        height:0.8rem;
    }
    .center2{
        margin-left:0px;
        width:8.233rem;
        margin-right:0.24rem;
     }
    .center2 input{
           padding-left:0.8rem;
           background-position: 0.213rem center;
    }
    .left img,.right img{
        width:0.453rem;
        height:0.667rem;
    }
    .right{
        line-height:0.8rem;
    }
    .right p{
        font-size:0.32rem;
        color:#fff;
        font-family:inherit;
    }
</style>