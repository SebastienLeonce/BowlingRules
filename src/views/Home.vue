<template>
  <div class="home uk-card uk-card-default uk-box-shadow-xlarge uk-position-center uk-animation-fade uk-padding" style="position:absolute; height: 95%; width: 95%;">
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
</style>
