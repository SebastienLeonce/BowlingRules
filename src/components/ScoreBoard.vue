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
                            <th id=1 v-if="$parent.$parent.gameObj.tourCourant == 1" style="color: red;">1</th>
                            <th id=1 v-if="$parent.$parent.gameObj.tourCourant != 1">1</th>

                            <th id=2 v-if="$parent.$parent.gameObj.tourCourant == 2" style="color: red;">2</th>
                            <th id=2 v-if="$parent.$parent.gameObj.tourCourant != 2">2</th>

                            <th id=3 v-if="$parent.$parent.gameObj.tourCourant == 3" style="color: red;">3</th>
                            <th id=3 v-if="$parent.$parent.gameObj.tourCourant != 3">3</th>

                            <th id=4 v-if="$parent.$parent.gameObj.tourCourant == 4" style="color: red;">4</th>
                            <th id=4 v-if="$parent.$parent.gameObj.tourCourant != 4">4</th>

                            <th id=5 v-if="$parent.$parent.gameObj.tourCourant == 5" style="color: red;">5</th>
                            <th id=5 v-if="$parent.$parent.gameObj.tourCourant != 5">5</th>

                            <th id=6 v-if="$parent.$parent.gameObj.tourCourant == 6" style="color: red;">6</th>
                            <th id=6 v-if="$parent.$parent.gameObj.tourCourant != 6">6</th>

                            <th id=7 v-if="$parent.$parent.gameObj.tourCourant == 7" style="color: red;">7</th>
                            <th id=7 v-if="$parent.$parent.gameObj.tourCourant != 7">7</th>

                            <th id=8 v-if="$parent.$parent.gameObj.tourCourant == 8" style="color: red;">8</th>
                            <th id=8 v-if="$parent.$parent.gameObj.tourCourant != 8">8</th>

                            <th id=9 v-if="$parent.$parent.gameObj.tourCourant == 9" style="color: red;">9</th>
                            <th id=9 v-if="$parent.$parent.gameObj.tourCourant != 9">9</th>

                            <th id=10 v-if="$parent.$parent.gameObj.tourCourant == 10" style="color: red;">10</th>
                            <th id=10 v-if="$parent.$parent.gameObj.tourCourant != 10">10</th>

                            <th id=11 v-if="$parent.$parent.gameObj.tourCourant == 11" style="color: red;">11</th>
                            <th id=11 v-if="$parent.$parent.gameObj.tourCourant != 11">11</th>

                            <th id=12 v-if="$parent.$parent.gameObj.tourCourant == 12" style="color: red;">12</th>
                            <th id=12 v-if="$parent.$parent.gameObj.tourCourant != 12">12</th>

                            <th id=Score>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="player in playerList" v-bind:key="player">
                            <td v-if="playerActive(player.nom)" style="background-color: rgba(10,10,10,0.2);">{{player.nom}} <span style="color: #7DFF33;"> •</span></td>
                            <td v-if="!playerActive(player.nom)">{{player.nom}}</td>
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
                            <td>{{player.getScoreTourPremierLance(11)}}</td>
                            <td>{{player.getScoreTourPremierLance(12)}}</td>
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
                    <th id=1 v-if="$parent.$parent.gameObj.tourCourant == 1" style="color: red;">1</th>
                    <th id=1 v-if="$parent.$parent.gameObj.tourCourant != 1">1</th>

                    <th id=2 v-if="$parent.$parent.gameObj.tourCourant == 2" style="color: red;">2</th>
                    <th id=2 v-if="$parent.$parent.gameObj.tourCourant != 2">2</th>

                    <th id=3 v-if="$parent.$parent.gameObj.tourCourant == 3" style="color: red;">3</th>
                    <th id=3 v-if="$parent.$parent.gameObj.tourCourant != 3">3</th>

                    <th id=4 v-if="$parent.$parent.gameObj.tourCourant == 4" style="color: red;">4</th>
                    <th id=4 v-if="$parent.$parent.gameObj.tourCourant != 4">4</th>

                    <th id=5 v-if="$parent.$parent.gameObj.tourCourant == 5" style="color: red;">5</th>
                    <th id=5 v-if="$parent.$parent.gameObj.tourCourant != 5">5</th>

                    <th id=6 v-if="$parent.$parent.gameObj.tourCourant == 6" style="color: red;">6</th>
                    <th id=6 v-if="$parent.$parent.gameObj.tourCourant != 6">6</th>

                    <th id=7 v-if="$parent.$parent.gameObj.tourCourant == 7" style="color: red;">7</th>
                    <th id=7 v-if="$parent.$parent.gameObj.tourCourant != 7">7</th>

                    <th id=8 v-if="$parent.$parent.gameObj.tourCourant == 8" style="color: red;">8</th>
                    <th id=8 v-if="$parent.$parent.gameObj.tourCourant != 8">8</th>

                    <th id=9 v-if="$parent.$parent.gameObj.tourCourant == 9" style="color: red;">9</th>
                    <th id=9 v-if="$parent.$parent.gameObj.tourCourant != 9">9</th>

                    <th id=10 v-if="$parent.$parent.gameObj.tourCourant == 10" style="color: red;">10</th>
                    <th id=10 v-if="$parent.$parent.gameObj.tourCourant != 10">10</th>

                    <th id=11 v-if="$parent.$parent.gameObj.tourCourant == 11" style="color: red;">11</th>
                    <th id=11 v-if="$parent.$parent.gameObj.tourCourant != 11">11</th>

                    <th id=12 v-if="$parent.$parent.gameObj.tourCourant == 12" style="color: red;">12</th>
                    <th id=12 v-if="$parent.$parent.gameObj.tourCourant != 12">12</th>

                    <th id=Score>Score</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="player in playerList" v-bind:key="player">
                    <td v-if="playerActive(player.nom)" class="uk-animation-slide-left" style="background-color: rgba(10,10,10,0.2);">{{player.nom}} <span style="color: #7DFF33;"> •</span></td>
                    <td v-if="!playerActive(player.nom)" class="uk-animation-slide-right">{{player.nom}}</td>
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
                    <td>{{player.getScoreTourPremierLance(11)}}</td>
                    <td>{{player.getScoreTourPremierLance(12)}}</td>
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
    methods: {
        playerActive: function(nom){
            // alert(nom)
            // alert(this.$parent.$parent.gameObj.Users[this.$parent.$parent.i])
            return nom == this.$parent.$parent.gameObj.Users[this.$parent.$parent.gameObj.joueurCourant].nom ? true : false
        },
    },
    mounted: function(){
        console.log(this.$parent.$parent.gameObj.Users);
    }
}
</script>

<style scoped>
</style>