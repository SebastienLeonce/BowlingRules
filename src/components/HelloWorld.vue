<template>
  <div v-bind:class="{'hello-dark': $parent.$parent.isDark}" class="hello uk-card uk-card-default uk-animation-kenburns uk-padding-large">
    <p v-bind:class="{'text-white': $parent.$parent.isDark}" class="hello-title uk-heading-medium uk-text-center uk-animation-shake uk-text-light">BOWLING</p>
    <div v-bind:class="{'text-white': $parent.$parent.isDark}" class="hello-button uk-margin-large" >
      <router-link to="/game" class="uk-light uk-button uk-button-default uk-animation-shake uk-box-shadow-xlarge" style="color: white;background-color: rgb(93,108,180);">JOUER</router-link>
      <p class="uk-dark" style="font-size: 8pt;" uk-tooltip="title: @claireBauchu<br> @alexisdacosta<br> @zpaul91<br>@SebastienLeonce; pos: bottom">Qualité Logicielle<br>APP4 Informatique<br>Polytech Paris-Saclay ©</p>
    </div>
 </div>
</template>


<script>
export default {
  name: 'HelloWorld'
}
</script>


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
.hello-dark{
  background-color: rgb(51, 51, 51);
}
.text-white{
  color: white;
}
@media screen and (min-width: 800px) {

  .hello{
    position: absolute;
    height: 70%;
    width: 40%;
    top: 15%;
    left: 30%;
  }
  .hello-title{
    position: absolute;
    left: 15%;
    top: 25%;
    font-size: 61.9pt;
  }
  .hello-button{
    position: absolute;
    left: 24.9%;
    top: 30%;
    font-size: 80pt;
    
  }
  .picture{
    margin: 0%;
    height: 100%;
    width: 100%;
  }
}
@media screen and (max-width: 800px) {
  .hello{
    position: absolute;
    height: 70%;
    width: 40%;
    top: 15%;
    left: 30%;
    text-align: center;
  }
  .picture{
    margin: 0%;
    height: 100%;
    width: 100%;
  }
} 

</style>
