<template>
  <div class="game uk-card uk-card-default uk-box-shadow-xlarge uk-position-center uk-padding uk-animation-fade" style="position:absolute; height: 95%; width: 95%;">
      <router-link class="uk-position-top-left" to="/" uk-icon="icon: arrow-left; ratio:1"></router-link> 
      <router-link class="uk-position-top-right uk-padding-right-small uk-padding-top-remove" to="/rules" style="color: black;font-size: 10pt;line-height: 2pt;font-size: 8pt;"><span>REGLES </span><span uk-icon="icon: question; ratio:0.7"></span></router-link>
      <p class="uk-position-top-center uk-margin-remove uk-padding-remove" style="font-size: 8pt;">BOWLING</p>
      <PlayerForm v-if="$parent.formDoned === false" class="uk-animation-scale-down"/>
      <!-- <PlayerBoard v-if="$parent.formDoned === true" style="position: absolute; height: 90%; width: 20%; left: 2%;"/> -->
      <ScoreBoard v-if="$parent.formDoned === true" style="position: absolute; width: 96.2%; height: 50%; left: 2%;"/>
      <ScoreMaker v-if="$parent.formDoned === true" style="position: absolute; width: 96.2%; top: 57.5%; height: 40%; left: 2%;"/>
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
      currentPlayer: this.$parent.gameObj.Users[0].nom,
      strike: false
    }
  }
}
</script>
