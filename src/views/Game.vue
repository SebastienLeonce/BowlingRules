<template>
  <div class="game">
      <router-link to="/game">Jeu</router-link> |
      <router-link to="/rules">Règle</router-link> |
      <router-link to="/settings">Paramètre</router-link>
      <p>This is game page</p>
      <PlayerForm/>
  </div>
</template>

<script>
import PlayerForm from '@/components/PlayerForm.vue'
export default {
  name: 'Game',
  components: {
      PlayerForm
  },
  data: function(){
      return{
          gameObj: "" //TODO Ajouter l'objet Game
      }   
  }
}
</script>
