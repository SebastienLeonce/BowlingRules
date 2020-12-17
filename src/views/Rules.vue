<template>
  <div class="Rules">
    <router-link to="/game">Jeu</router-link> |
    <router-link to="/rules">Règle</router-link> |
    <router-link to="/settings">Paramètre</router-link>
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
