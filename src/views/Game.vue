<template>
  <div class="game uk-card uk-card-default uk-box-shadow-xlarge uk-position-center uk-padding uk-animation-fade" style="position:absolute; height: 95%; width: 95%;">
      <!-- <router-link class="uk-position-top-left" to="/" uk-icon="icon: arrow-left; ratio:1"></router-link>  -->
      <router-link class="uk-position-top-right uk-padding-right-small uk-padding-top-remove" to="/rules" style="color: black;font-size: 10pt;line-height: 2pt;font-size: 8pt;"><span>REGLES </span><span uk-icon="icon: question; ratio:0.7"></span></router-link>
      <p v-if="$parent.formDoned === true" class="uk-position-top-left" type="button" uk-icon="icon: list; ratio:0.7" style="left: 1px; top: 1px;"></p>
      <div v-if="$parent.formDoned === true" uk-dropdown>
          <ul class="uk-nav uk-dropdown-nav" style="text-align: left;">
              <span v-if="$parent.formDoned === true">
                <li class="uk-nav-header">Partie en cours</li>
                <li class="uk-nav-divider"></li>
                <li style="color: black;" v-on:click="reloadPage()"><a style="color: black;">Recommencez</a></li>
                <router-link class="uk-padding-right-small uk-padding-top-remove" to="/" style="color: black;">Quitter</router-link><br>
              </span>
              <!-- <li class="uk-nav-divider"></li>
              <li><a href="">Credits</a></li> -->
          </ul>
      </div>

      <p class="uk-position-top-center uk-margin-remove uk-padding-remove" style="font-size: 8pt;">BOWLING</p>
      <PlayerForm v-if="$parent.formDoned === false" class="uk-animation-scale-down"/>
      <!-- <PlayerBoard v-if="$parent.formDoned === true" style="position: absolute; height: 90%; width: 20%; left: 2%;"/> -->
      <ScoreBoard v-if="$parent.formDoned === true" style="position: absolute; width: 96.2%; height: 50%; left: 2%;"/>
      <ScoreMaker v-if="$parent.formDoned === true" style="position: absolute; width: 96.2%; top: 57.5%; height: 40%; left: 2%;"/>
      <!-- <div id="offcanvas-push" >
          <div class="uk-offcanvas-bar uk-animation-slide-left" style="position: absolute; height: 100%; top: 0%; left: 0%;">

              <button class="uk-offcanvas-close" type="button" uk-close></button>

              <h3>Title</h3>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          </div>
      </div> -->
  </div>
</template>

<script>
import PlayerForm from '@/components/PlayerForm.vue'
// import PlayerBoard from '@/components/PlayerBoard.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
import ScoreMaker from '@/components/ScoreMaker.vue'
export default {
  name: 'Game',
  components: {
      PlayerForm,
      // PlayerBoard,
      ScoreBoard,
      ScoreMaker
  },
  data: function(){
    return {
      // currentPlayer: this.$parent.gameObj.Users[0].nom,
      currentPlayer: "",
      strike: false
    }
  },
  methods: {
    reloadPage(){
            window.location.reload()
        }
  },
  mounted: function(){
    console.log(" mount of /game\n")
  }
}
</script>

<style scoped>
.uk-offcanvas-page, .uk-offcanvas-container, .uk-offcanvas-container-animation{
  position: absolute;
  height: 95%; 
  top: 2.5%; 
  left: 2.5%;
}
</style>
