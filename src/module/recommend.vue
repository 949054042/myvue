<template>
    <div class="Recommend"   v-on:click="say()">
        <div class="wraper">
            <findItem_01/>
        </div>
    </div>
</template>
<script>
import findItem_01 from "../components/findItem_01.vue"
import Scroll from "iscroll"
    export default{
        name:"Recommend",
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
            var iscroll=new Scroll(".Recommend",{
                    mouseWheel: true,
                    click:true
            });
            console.dir(iscroll);
        },
        components:{
            findItem_01
        },
        methods:{
            say:function(){
            }
        }
    }
</script>
<style>
    .Recommend{
        position: absolute;
        box-sizing:border-box;
        top:2.1rem;
        left:0;
        bottom:1.2933rem;
        width:100%;
        z-index:1;
    }
    .wraper{
        height:100vh;
    }
</style>