<template>
  <div class="home uk-card uk-card-default uk-box-shadow-xlarge uk-position-center uk-animation-fade" style="position:absolute; height: 95%; width: 95%;">
    <HelloWorld/>
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

    /* background-image: url("../assets/bowling.gif"); */
    background-size: 100%;
}
</style>
