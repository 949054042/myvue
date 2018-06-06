<template>
    <div class="Recommend">
        <findItem_01/>
    </div>
</template>
<script>
import findItem_01 from "../components/findItem_01.vue"
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
        components:{
            findItem_01
        },
        methods:{

        }
    }
</script>
<style>
    .Recommend{
        box-sizing:border-box;
        overflow-y:auto;
        position: absolute;
        top:2.1rem;
        left:0;
        bottom:1.2933rem;
        width:100%;
    }
</style>