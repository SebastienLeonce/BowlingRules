<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data: function(){
      return{
          gameObj: "", //TODO Ajouter l'objet Game,
          formDoned: false,
          i: 0,
          j: 0,
      }   
  },
  mounted: function(){
    console.clear();
    console.log("Bowling App\n")
    console.log(" mount of /\n")
  }
}
</script>
<style>
body{
  font-family: 'Big Shoulders Stencil Text', cursive;
  /* font-family: 'Yusei Magic', sans-serif; */
  /* text-align: center; */
  color: #2c3e50;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* font-family: 'Big Shoulders Stencil Text', cursive; */
  font-family: 'Big Shoulders Stencil Text', cursive;
  /* font-family: 'Yusei Magic', sans-serif; */
  /* font-family: 'Montserrat', sans-serif; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.uk-heading-medium{
  font-family: 'Big Shoulders Stencil Text', cursive;
  /* font-family: 'Yusei Magic', sans-serif; */
}
</style>
