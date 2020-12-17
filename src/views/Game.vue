<template>
  <div class="game">
      <router-link to="/">Home</router-link> |
      <router-link to="/rules">Règles</router-link>
      <PlayerForm v-if="$parent.formDoned === false"/>
      <PlayerBoard v-if="$parent.formDoned === true" style="position: absolute; width: 30%; left: 2%;"/>
      <ScoreBoard v-if="$parent.formDoned === true" style="position: absolute; width: 60%; left: 34%;"/>
  </div>
</template>

<script>
import PlayerForm from '@/components/PlayerForm.vue'
import PlayerBoard from '@/components/PlayerBoard.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
export default {
  name: 'Game',
  components: {
      PlayerForm,
      PlayerBoard,
      ScoreBoard
  },
  data: function(){
    return {
    }
  }
}
</script>
