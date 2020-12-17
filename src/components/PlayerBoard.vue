<template>
    <div class="uk-card uk-card-default">
        <div v-if="playerList.length" class="uk-margin uk-padding">
        <p class="uk-margin uk-padding uk-position-left">JOUEURS</p><br><br><br>
            <div v-for="player in playerList" v-bind:key="player">
                <p style="text-align: left; width: 70%;">{{ player.nom }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PlayerForm',
    props: {
    },
    data: function(){
      return{
          playerList: this.$parent.$parent.gameObj.Users
      }
    }, 
    mounted: function(){
        console.log(this.$parent.$parent.gameObj.Users)
    }
}
</script>