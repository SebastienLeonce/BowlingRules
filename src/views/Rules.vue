<template>
  <div class="rules uk-card uk-card-default uk-box-shadow-xlarge uk-position-center uk-padding uk-animation-fade" style="position:absolute; height: 95%; width: 95%;">
    <p class="uk-position-top-center uk-margin-remove uk-padding-remove" style="font-size: 8pt;">BOWLING</p>
    <router-link class="uk-position-top-left" to="/game" uk-icon="icon: arrow-left; ratio:1"></router-link> 
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
