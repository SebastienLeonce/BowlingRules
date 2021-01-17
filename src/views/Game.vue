<template>
  <div v-bind:class="{ dark: isDark }" class="game uk-card uk-card-default uk-box-shadow-xlarge uk-position-center uk-padding">
      <div class="back uk-animation-slide-right"></div>
      <Header/>
      <PlayerForm v-if="$parent.formDoned === false" class="playerForm uk-animation-slide-left"/>
      <ScoreBoard v-if="$parent.formDoned === true" style="position: absolute; width: 96.2%; height: 50%; left: 2%;"/>
      <ScoreMaker v-if="$parent.formDoned === true" style="position: absolute; width: 96.2%; top: 57.5%; height: 40%; left: 2%;"/>
  </div>
</template>

<script>
import PlayerForm from '@/components/PlayerForm.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
import ScoreMaker from '@/components/ScoreMaker.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Game',
  components: {
      PlayerForm,
      ScoreBoard,
      ScoreMaker,
      Header
  },
  data: function(){
    return {
      currentPlayer: "",            /** @type string  @description Nom du joueur courant */
      strike: false,                /** @type boolean @description Indication si le lancer est un strike ou non pour l'affichage des animations */
      isDark: this.$parent.isDark   /** @type boolean @description Indication si le thème selectionné est en mode nuit ou non */
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
.text-white{
  color: white;
}
.text-dark{
  color: rgb(51,51,51);
}
.dark{
  background-color: rgb(51,51,51);
  color:white;
}

@media screen and (min-width: 800px) {
  .game{
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
    clip-path: polygon(0% 0%, 69% 0%, 28% 100%, 28% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 78%, 0% 27%);
    background-size: 100% 100%;
    background-color: rgb(93,108,180);
  }
} 

@media screen and (max-width: 800px) {
  .game{
  position:absolute; 
  height: 100%; 
  width: 100%
  }
  .playerForm{
    position:absolute; 
    height: 90%; 
    width: 90%;
    left: 5%;
    top: 5%;
  }
  .black-mobile{
    color: black;
  }
} 
</style>
