<template>
  <div v-bind:class="{'dark': $parent.isDark}" class="rules uk-card uk-card-default uk-box-shadow-xlarge uk-position-center uk-padding" style="position:absolute; height: 95%; width: 95%;">
    <p class="uk-position-top-center uk-margin-remove uk-padding-remove" style="font-size: 8pt;">BOWLING</p>
    <div class="back uk-box-shadow-xlarge uk-animation-slide-left"></div>
    <span style="color:white;"><router-link class="uk-position-top-right" to="/game" uk-icon="icon: close; ratio:1"></router-link></span>
    <RulesText/>
  </div>
</template>

<script>
import RulesText from '@/components/RulesText.vue'
export default {
  name: 'Game',
  components: {
      RulesText
  }
}
</script>

<style scoped>
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
  .dark{
      background-color: rgb(51, 51, 51);
      color: white;
  }
</style>