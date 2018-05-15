<template>
  <div class="hello">
    <p class="bg-info">
      {{msg}}
    </p>
    <form>
      <div class="form-group">
        <div class="input-group">
          <input type="text" placeholder="demo" class="form-control"/>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted:function(){
    $(this.$el).bind("click",function(ev){
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
