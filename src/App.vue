<template>
  <div v-bind:class="{'app-dark': isDark}" id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data: function(){
    return{
        gameObj: "",  /** @type object @description Objet de la classe Game */
        formDoned: false, /** @type boolean @description Indication si le formulaire des nom des joueur est rempli */
        i: 0,
        j: 0,
        isDark: true  /** @type boolean @description Indication si le thème choisi est le thème sombre */
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
  font-family: 'Open Sans Condensed', sans-serif;
  font-family: 'Quicksand', sans-serif;
  font-family: 'Indie Flower', cursive;
  font-family: 'Bangers', cursive;
  color: #1d2022;
}
#app {
  font-family: 'Big Shoulders Stencil Text', cursive;
  font-family: 'Open Sans Condensed', sans-serif;
  font-family: 'Quicksand', sans-serif;
  font-family: 'Indie Flower', cursive;
  font-family: 'Bangers', cursive;
  text-align: center;
  color: #2c3e50;
  font-weight: lighter;
}
.app-dark{
  background-color: rgb(65, 65, 65);
  position: absolute;
  height: 100%;
  width: 100%;
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
  font-family: 'Zilla Slab Highlight', cursive;
}
</style>
