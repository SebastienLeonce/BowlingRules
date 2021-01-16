<template>
  <div class="home uk-card uk-card-default uk-box-shadow-xlarge uk-position-center uk-animation-fade uk-padding"> 
    <div class="back uk-box-shadow-xlarge uk-animation-kenburns"></div>
    <img src="../assets/bowling-quille.gif" alt="bowling-quille" class="quille">
    <div class="back2"></div>
    <HelloWorld class="back2"/>
    <Label version="v3" sprintNumber="3"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Label from '@/components/Label.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld,
    Label
  },
  data: function(){
    return{
      isLabeled : false
    }
  },
  mounted: function(){
    console.log(" mount of /home\n")
  }
}
</script>

<style scoped>
.back2-dark{
  background-color: rgb(51,51,51);
}
@media screen and (min-width: 800px) {
  .home{
    text-align: center;
    color: #2c3e50;
    background-size: 100% 90%;
    position:absolute; 
    height: 95%; 
    width: 95%;
  }
  .back{
    position: absolute;
    top: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    clip-path: polygon(100% 0%, 69% 0%, 28% 100%, 28% 100%, 81% 100%, 45% 100%, 40% 100%, 84% 100%, 100% 100%, 100% 92%, 100% 64%, 100% 35%, 100% 15%, 100% 25%);
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
    clip-path: polygon(0% 0%, 69% 0%, 28% 100%, 28% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 78%, 0% 27%);
    background-size: 100% 100%;
  }
  .quille{
    position: absolute; 
    right: 2%; 
    bottom: 20%; 
    max-height: 100%; 
    width: 40%;
  }
}
@media screen and (max-width: 800px) {
  .home{
    text-align: center;
    color: #2c3e50;
    background-size: 100% 90%;
    position:absolute; 
    height: 100%; 
    width: 100%;
  }
  .back{
    position: absolute;
    top: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
    background-size: auto, auto;
    background-color: rgb(93,108,180);
  }
  .back2{
    position: absolute;
    top: 40%;
    left: 0%;
    height: 100%;
    width: 100%;
    background-size: 100% 100%;
  }
    .quille{
    position: absolute; 
    right: 0%; 
    left: 20%;
    top: 10%; 
    max-height: 100%; 
    width: 60%;
  }
} 
</style>
