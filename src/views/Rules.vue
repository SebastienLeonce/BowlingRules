<template>
  <div class="Rules">
    <router-link to="/">Home</router-link> |
      <router-link to="/game">Jeu</router-link>
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
