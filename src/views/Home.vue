<template>
  <div class="home uk-card uk-card-default uk-box-shadow-xlarge uk-position-center uk-animation-fade uk-padding" style="position:absolute; height: 95%; width: 95%;"> 
    <div class="back uk-box-shadow-xlarge uk-animation-kenburns"></div>
    <img src="../assets/bowling-quille.gif" alt="bowling-quille" style="position: absolute; right: 2%; bottom: 20%; max-height: 100%; width: 40%;">
    <div class="back2"></div>
    <HelloWorld class="back2"/>
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
  },
  mounted: function(){
    console.log(" mount of /home\n")
  }
}
</script>

<style scoped>
.home{
  font-family: 'Big Shoulders Stencil Text', cursive;
  text-align: center;
  color: #2c3e50;
  /* background-image: url("../assets/wp2.png"); */
  background-size: 100% 90%;
}
.back{
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  clip-path: polygon(100% 0%, 69% 0%, 28% 100%, 28% 100%, 81% 100%, 45% 100%, 40% 100%, 84% 100%, 100% 100%, 100% 92%, 100% 64%, 100% 35%, 100% 15%, 100% 25%);
  /* background-image: url("../assets/dribbble.webp"); */

  /* background-image: url("../assets/bowling-quille.gif"); */
  /* background-size: 55% 100%; */
  background-size: auto, auto;
  background-color: rgb(93,108,180);
  box-shadow: 3px 3px rgb(0, 0, 0)(71, 69, 69), -1em 0 .4em rgb(0, 0, 0);
}
.back2{
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  /* clip-path: polygon(100% 0, 0% 100%, 100% 100%); */
  clip-path: polygon(0% 0%, 69% 0%, 28% 100%, 28% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 78%, 0% 27%);
  /* background-image: url("../assets/dribbble.webp"); */

  /* background-image: url("../assets/bowling-mockup3.jpg"); */
  background-size: 100% 100%;
  /* background-color: rgb(184, 184, 184); */
}
</style>
