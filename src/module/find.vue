<template>
    <div class="Find">
        <router-view/>
    </div>
</template>
<script>
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

            }
        },
        methods:{

        }
    }
</script>
<style>

</style>