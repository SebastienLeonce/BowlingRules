<template>
    <div class="uk-card uk-card-hover uk-box-shadow-small uk-overflow-auto uk-animation-scale-up">
        <div v-if="playerList.length" class="uk-margin uk-padding">
        <div class="uk-margin uk-padding uk-position-left">JOUEURS</div><br><br><br>
            <div v-for="player in playerList" v-bind:key="player">
                <div v-if="playerActive(player.nom)" class="uk-animation-slide-left" style="background-color: rgba(10,10,10,0.2);">
                    <div style="width: 100%;text-align: left;">
                        <span class="uk-text-uppercase" style="text-align: left;width: 50%;left:0%;">{{ player.nom }}<span style="color: #7DFF33;"> •</span></span>
                    </div>
                    <div style="text-align: left;width: 100%;font-size: 8pt;">SCORE TOTAL: {{player.getScoreTotal()}} <br><br></div>
                </div>
                <div v-if="!playerActive(player.nom)" class="uk-animation-slide-right">
                    <div style="width: 100%;text-align: left;">
                        <span class="uk-text-uppercase" style="text-align: left;width: 50%;left:0%;">{{ player.nom }}</span>
                    </div>
                    <div style="text-align: left;width: 100%;font-size: 8pt;">SCORE TOTAL: {{player.getScoreTotal()}} <br><br></div>
                </div>
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
          playerList: this.$parent.$parent.gameObj.Users,
          playerCurrent: this.$parent.currentPlayer
      }
    }, 
    mounted: function(){
        console.log(this.$parent.$parent.gameObj.Users)
        console.log("SortPlayer")
        console.table(this.sortPlayer())
    },
    methods: {
        playerActive: function(nom){
            // alert(nom)
            // alert(this.$parent.$parent.gameObj.Users[this.$parent.$parent.i])
            return nom == this.$parent.$parent.gameObj.Users[this.$parent.$parent.i].nom ? true : false
        },
        sortPlayer: function(){
            let list = this.$parent.$parent.gameObj.Users
            let res = []
            for(let i = 0; i < list.length; i++){
               res.push({
                   score: list[i].getScoreTotal(),
                   nom: list[i].nom
               })
            }
            if (res != []){
                res.sort()
            }
            return res.reverse()
        }
    }
}
</script>