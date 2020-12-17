<template>
  <div class="hello uk-card uk-card-default uk-position-center">
    <img class="picture" alt="Vue logo" src="../assets/bowling.png">
    <h1 class="uk-text-center">BOOLING APP</h1>
    <router-link to="/game" class="uk-button uk-button-default">JOUER</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  },
  data: function(){
    return{

    }
  }, 
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
.hello{
  position: absolute;
  height: 70%;
  width: 80%;

}
.picture{
  height: 40%;
  width: 30%;
}
</style>
