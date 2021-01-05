<template>
  <div class="home uk-card uk-card-default uk-box-shadow-xlarge uk-position-center uk-animation-fade uk-padding" style="position:absolute; height: 95%; width: 95%;"> 
    <div class="back"></div>
    <div class="back2"></div>
    <HelloWorld/>
    <span class="uk-position-bottom-center uk-margin" style="font-size: 8pt;">
      <!-- <strong class="uk-label uk-label-danger" style="font-size: 6pt;">PROD</strong> | 
      <strong class="uk-label uk-label-warning" style="font-size: 6pt;">DEV</strong> | 
      <strong class="uk-label uk-label-success" style="font-size: 6pt;">SPRINT 1</strong> | 
      <strong class="uk-label" style="font-size: 6pt;">v1</strong> -->
    </span>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.home{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: #2c3e50;
    /* background-image: url("../assets/bowling.gif"); */
    background-size: 100%;
}
.back{
  position: absolute;
  top: 0%;
  left: 25%;
  height: 100%;
  width: 50%;
  /* clip-path: polygon(100% 0, 0% 100%, 100% 100%); */
  clip-path: polygon(84.1% 0, 17% 100%, 84.1% 100%);
  background-image: src("../assets/dribbble.svg");
  background-color: rgb(184, 184, 184);
}
.back2{
  position: absolute;
  top: 0%;
  left: 67%;
  height: 100%;
  width: 32.99%;
  background-image: src("../assets/dribbble.svg");
  background-color: rgb(184, 184, 184);
}
</style>
