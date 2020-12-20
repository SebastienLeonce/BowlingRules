<template>
    <div class="uk-card uk-card-hover uk-box-shadow-small uk-padding uk-overflow-auto uk-animation-scale-up" href="#modal-center" uk-toggle>
        <div id="modal-center" class="uk-flex-top" uk-modal> 
            <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-overflow-auto uk-animation-fade" style="height: 60%; width: 70%;">
                <p class="uk-margin uk-padding uk-position-left">TABLEAU DES SCORES</p>
                <br>
                <table class="uk-table uk-table-responsive uk-table-divider">
                    <thead>
                        <tr>
                            <th id=Joueurs>Joueurs</th>
                            <th id=1>1</th>
                            <th id=2>2</th>
                            <th id=3>3</th>
                            <th id=4>4</th>
                            <th id=5>5</th>
                            <th id=6>6</th>
                            <th id=7>7</th>
                            <th id=8>8</th>
                            <th id=9>9</th>
                            <th id=10>10</th>
                            <th id=Score>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="player in playerList" v-bind:key="player">
                            <td>{{player.nom}}</td>
                            <td>{{player.getScoreTourPremierLance(1)}} | {{player.getScoreTourSecondLance(1)}} </td>
                            <td>{{player.getScoreTourPremierLance(2)}} | {{player.getScoreTourSecondLance(2)}} </td>
                            <td>{{player.getScoreTourPremierLance(3)}} | {{player.getScoreTourSecondLance(3)}} </td>
                            <td>{{player.getScoreTourPremierLance(4)}} | {{player.getScoreTourSecondLance(4)}} </td>
                            <td>{{player.getScoreTourPremierLance(5)}} | {{player.getScoreTourSecondLance(5)}} </td>
                            <td>{{player.getScoreTourPremierLance(6)}} | {{player.getScoreTourSecondLance(6)}} </td>
                            <td>{{player.getScoreTourPremierLance(7)}} | {{player.getScoreTourSecondLance(7)}} </td>
                            <td>{{player.getScoreTourPremierLance(8)}} | {{player.getScoreTourSecondLance(8)}} </td>
                            <td>{{player.getScoreTourPremierLance(9)}} | {{player.getScoreTourSecondLance(9)}} </td>
                            <td>{{player.getScoreTourPremierLance(10)}} | {{player.getScoreTourSecondLance(10)}}</td>
                            <td>{{player.getScoreTotal()}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <p class="uk-margin uk-padding uk-position-left">TABLEAU DES SCORES</p>
        <br>
        <table class="uk-table uk-table-responsive uk-table-divider">
            <thead>
                <tr>
                    <th id=Joueurs>Joueurs</th>
                    <th id=1>1</th>
                    <th id=2>2</th>
                    <th id=3>3</th>
                    <th id=4>4</th>
                    <th id=5>5</th>
                    <th id=6>6</th>
                    <th id=7>7</th>
                    <th id=8>8</th>
                    <th id=9>9</th>
                    <th id=10>10</th>
                    <th id=Score>Score</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="player in playerList" v-bind:key="player">
                    <td>{{player.nom}}</td>
                    <td>{{player.getScoreTourPremierLance(1)}} | {{player.getScoreTourSecondLance(1)}} </td>
                    <td>{{player.getScoreTourPremierLance(2)}} | {{player.getScoreTourSecondLance(2)}} </td>
                    <td>{{player.getScoreTourPremierLance(3)}} | {{player.getScoreTourSecondLance(3)}} </td>
                    <td>{{player.getScoreTourPremierLance(4)}} | {{player.getScoreTourSecondLance(4)}} </td>
                    <td>{{player.getScoreTourPremierLance(5)}} | {{player.getScoreTourSecondLance(5)}} </td>
                    <td>{{player.getScoreTourPremierLance(6)}} | {{player.getScoreTourSecondLance(6)}} </td>
                    <td>{{player.getScoreTourPremierLance(7)}} | {{player.getScoreTourSecondLance(7)}} </td>
                    <td>{{player.getScoreTourPremierLance(8)}} | {{player.getScoreTourSecondLance(8)}} </td>
                    <td>{{player.getScoreTourPremierLance(9)}} | {{player.getScoreTourSecondLance(9)}} </td>
                    <td>{{player.getScoreTourPremierLance(10)}} | {{player.getScoreTourSecondLance(10)}}</td>
                    <td>{{player.getScoreTotal()}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'ScoreBoard',
    props: {
    },
    data: function(){
      return{
          playerList: this.$parent.$parent.gameObj.Users
      }
    }, 
    mounted: function(){
        console.log(this.$parent.$parent.gameObj.Users);
    }
}
</script>

<style scoped>
</style>