<template>
    <div v-bind:class="{'scoreBoard-dark': $parent.isDark}" class="scoreBoard uk-card uk-card-default uk-box-shadow-large uk-padding uk-overflow-auto uk-animation-slide-top" href="#modal-center" uk-toggle>
        <div id="modal-center" class="uk-flex-top" uk-modal> 
            <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-overflow-auto uk-animation-fade" style="height: 80%; width: 90%;" v-bind:class="{'scoreBoard-dark': $parent.isDark}">
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

                            <th id=Score>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="player in playerList" v-bind:key="player.nom">
                            <td v-if="playerActive(player.nom)" class="uk-animation-slide-left" style="background-color: rgba(10,10,10,0.2);">{{player.nom}} <span style="color: #7DFF33;"> •</span></td>
                            <td v-if="!playerActive(player.nom)" class="uk-animation-slide-right">{{player.nom}}</td>
                           
                            <td class="uk-padding-remove uk-marggin-remove" style="border: 1pt solid;">
                                <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%;">
                                    <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourPremierLance(1) >= "10" ? "X" : player.getScoreTourPremierLance(1)}} </span> | 
                                    <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{((player.getScoreTourPremierLance(1) + player.getScoreTourSecondLance(1) == "10") && (player.getScoreTourPremierLance(1) != "10"))  ? "/" : player.getScoreTourSecondLance(1)}} </span>
                                </div>
                                <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%; border-top: 1pt solid;"> {{scoreTourPlayer(player, 1)}} </div>
                            </td>
                            
                            <td class="uk-padding-remove uk-marggin-remove" style="border: 1pt solid;">
                                <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%;">
                                    <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourPremierLance(2)}} </span> | 
                                    <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourSecondLance(2)}} </span>
                                </div>
                                <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%; border-top: 1pt solid;"> {{scoreTourPlayer(player, 2)}}  </div>
                            </td>
                            
                            <td class="uk-padding-remove uk-marggin-remove" style="border: 1pt solid;">
                                <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%;">
                                    <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourPremierLance(3)}} </span> | 
                                    <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourSecondLance(3)}} </span>
                                </div>
                                <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%; border-top: 1pt solid;"> {{scoreTourPlayer(player, 3)}}  </div>
                            </td>
                            
                            <td class="uk-padding-remove uk-marggin-remove" style="border: 1pt solid;">
                                <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%;">
                                    <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourPremierLance(4)}} </span> | 
                                    <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourSecondLance(4)}} </span>
                                </div>
                                <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%; border-top: 1pt solid;"> {{scoreTourPlayer(player, 4)}} </div>
                            </td>
                            
                            <td class="uk-padding-remove uk-marggin-remove" style="border: 1pt solid;">
                                <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%;">
                                    <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourPremierLance(5)}} </span> | 
                                    <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourSecondLance(5)}} </span>
                                </div>
                                <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%; border-top: 1pt solid;"> {{scoreTourPlayer(player, 5)}} </div>
                            </td>
                            
                            <td class="uk-padding-remove uk-marggin-remove" style="border: 1pt solid;">
                                <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%;">
                                    <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourPremierLance(6)}} </span> | 
                                    <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourSecondLance(6)}} </span>
                                </div>
                                <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%; border-top: 1pt solid;"> {{scoreTourPlayer(player, 6)}} </div>
                            </td>
                           
                            <td class="uk-padding-remove uk-marggin-remove" style="border: 1pt solid;">
                                <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%;">
                                    <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourPremierLance(7)}} </span> | 
                                    <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourSecondLance(7)}} </span>
                                </div>
                                <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%; border-top: 1pt solid;"> {{scoreTourPlayer(player, 7)}} </div>
                            </td>
                            
                            <td class="uk-padding-remove uk-marggin-remove" style="border: 1pt solid;">
                                <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%;">
                                    <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourPremierLance(8)}} </span> | 
                                    <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourSecondLance(8)}} </span>
                                </div>
                                <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%; border-top: 1pt solid;"> {{scoreTourPlayer(player, 8)}} </div>
                            </td>
                            
                            <td class="uk-padding-remove uk-marggin-remove" style="border: 1pt solid;">
                                <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%;">
                                    <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourPremierLance(9)}} </span> | 
                                    <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourSecondLance(9)}} </span>
                                </div>
                                <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%; border-top: 1pt solid;"> {{scoreTourPlayer(player, 9)}} </div>
                            </td>
                            
                            <td class="uk-padding-remove uk-marggin-remove" style="border: 1pt solid;">
                                <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%;">
                                    <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourPremierLance(10)}} </span> 
                                    <span v-if="player.score[10].premierLance == 0" class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> | {{player.getScoreTourSecondLance(10)}} </span>
                                    <span v-if="player.score[10].premierLance != 0" class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> | {{player.getScoreTourPremierLance(11)}}</span>
                                    <span v-if="player.score[11].premierLance != 0" class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> | {{player.getScoreTourPremierLance(12)}}</span>
                                </div>
                                <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%; border-top: 1pt solid;"> {{scoreTourPlayer(player, 10)}} </div>
                            </td>
                            
                            <td class="uk-padding-remove uk-marggin-remove" style="border: 1pt solid;">
                                {{player.getScoreTotal()}}
                            </td>
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

                    <th id=Score>Score</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="player in playerList" v-bind:key="player.nom">
                    <td v-if="playerActive(player.nom)" class="uk-animation-slide-left" style="background-color: rgba(10,10,10,0.2);">{{player.nom}} <span style="color: #7DFF33;"> •</span></td>
                    <td v-if="!playerActive(player.nom)" class="uk-animation-slide-right">{{player.nom}}</td>
                    
                    <td class="uk-padding-remove uk-marggin-remove" style="border: 1pt solid;">
                        <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%;">
                            <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourPremierLance(1) >= "10" ? "X" : player.getScoreTourPremierLance(1)}} </span> | 
                            <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{((player.getScoreTourPremierLance(1) + player.getScoreTourSecondLance(1) == "10") && (player.getScoreTourPremierLance(1) != "10"))  ? "/" : player.getScoreTourSecondLance(1)}} </span>
                        </div>
                        <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%; border-top: 1pt solid;"> {{scoreTourPlayer(player, 1)}} </div>
                    </td>
                    
                    <td class="uk-padding-remove uk-marggin-remove" style="border: 1pt solid;">
                        <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%;">
                            <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourPremierLance(2) >= "10" ? "X" : player.getScoreTourPremierLance(2)}} </span> | 
                            <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{((player.getScoreTourPremierLance(2) + player.getScoreTourSecondLance(2) == "10") && (player.getScoreTourPremierLance(1) != "10"))  ? "/" : player.getScoreTourSecondLance(2)}} </span>
                        </div>
                        <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%; border-top: 1pt solid;"> {{scoreTourPlayer(player, 2)}}  </div>
                    </td>
                    
                    <td class="uk-padding-remove uk-marggin-remove" style="border: 1pt solid;">
                        <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%;">
                            <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourPremierLance(3) >= "10" ? "X" : player.getScoreTourPremierLance(3)}} </span> | 
                            <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{((player.getScoreTourPremierLance(3) + player.getScoreTourSecondLance(3) == "10") && (player.getScoreTourPremierLance(3) != "10"))  ? "/" : player.getScoreTourSecondLance(3)}} </span>
                        </div>
                        <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%; border-top: 1pt solid;"> {{scoreTourPlayer(player, 3)}}  </div>
                    </td>
                    
                    <td class="uk-padding-remove uk-marggin-remove" style="border: 1pt solid;">
                        <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%;">
                            <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourPremierLance(4) >= "10" ? "X" : player.getScoreTourPremierLance(4)}} </span> | 
                            <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{((player.getScoreTourPremierLance(4) + player.getScoreTourSecondLance(4) == "10") && (player.getScoreTourPremierLance(4) != "10"))  ? "/" : player.getScoreTourSecondLance(4)}} </span>
                        </div>
                        <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%; border-top: 1pt solid;"> {{scoreTourPlayer(player, 4)}} </div>
                    </td>
                    
                    <td class="uk-padding-remove uk-marggin-remove" style="border: 1pt solid;">
                        <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%;">
                            <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourPremierLance(5) >= "10" ? "X" : player.getScoreTourPremierLance(5)}} </span> | 
                            <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{((player.getScoreTourPremierLance(5) + player.getScoreTourSecondLance(5) == "10") && (player.getScoreTourPremierLance(5) != "10"))  ? "/" : player.getScoreTourSecondLance(5)}} </span>
                        </div>
                        <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%; border-top: 1pt solid;"> {{scoreTourPlayer(player, 5)}} </div>
                    </td>
                    
                    <td class="uk-padding-remove uk-marggin-remove" style="border: 1pt solid;">
                        <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%;">
                            <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourPremierLance(6) >= "10" ? "X" : player.getScoreTourPremierLance(6)}} </span> | 
                            <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{((player.getScoreTourPremierLance(6) + player.getScoreTourSecondLance(6) == "10") && (player.getScoreTourPremierLance(6) != "10"))  ? "/" : player.getScoreTourSecondLance(6)}} </span>
                        </div>
                        <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%; border-top: 1pt solid;"> {{scoreTourPlayer(player, 6)}} </div>
                    </td>
                    
                    <td class="uk-padding-remove uk-marggin-remove" style="border: 1pt solid;">
                        <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%;">
                            <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourPremierLance(7) >= "10" ? "X" : player.getScoreTourPremierLance(7)}} </span> | 
                            <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{((player.getScoreTourPremierLance(7) + player.getScoreTourSecondLance(7) == "10") && (player.getScoreTourPremierLance(7) != "10"))  ? "/" : player.getScoreTourSecondLance(7)}} </span>
                        </div>
                        <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%; border-top: 1pt solid;"> {{scoreTourPlayer(player, 7)}} </div>
                    </td>
                    
                    <td class="uk-padding-remove uk-marggin-remove" style="border: 1pt solid;">
                        <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%;">
                            <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourPremierLance(8) >= "10" ? "X" : player.getScoreTourPremierLance(8)}} </span> | 
                            <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{((player.getScoreTourPremierLance(8) + player.getScoreTourSecondLance(8) == "10") && (player.getScoreTourPremierLance(8) != "10"))  ? "/" : player.getScoreTourSecondLance(8)}} </span>
                        </div>
                        <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%; border-top: 1pt solid;"> {{scoreTourPlayer(player, 8)}} </div>
                    </td>
                    
                    <td class="uk-padding-remove uk-marggin-remove" style="border: 1pt solid;">
                        <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%;">
                            <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourPremierLance(9) >= "10" ? "X" : player.getScoreTourPremierLance(9)}} </span> | 
                            <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{((player.getScoreTourPremierLance(9) + player.getScoreTourSecondLance(9) == "10") && (player.getScoreTourPremierLance(9) != "10"))  ? "/" : player.getScoreTourSecondLance(9)}} </span>
                        </div>
                        <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%; border-top: 1pt solid;"> {{scoreTourPlayer(player, 9)}} </div>
                    </td>
                    
                    <td class="uk-padding-remove uk-marggin-remove" style="border: 1pt solid;">
                        <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%;">
                            <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> {{player.getScoreTourPremierLance(10) >= "10" ? "X" : player.getScoreTourPremierLance(10)}} </span> | 
                            <span class="uk-padding-remove uk-marggin-remove" style="height:100%; width:50%;"> 
                                {{((player.getScoreTourPremierLance(10) + player.getScoreTourSecondLance(10) == "10") && (player.getScoreTourPremierLance(10) != "10"))  ? "/" : player.getScoreTourSecondLance(10)}} 
                                {{(player.getScoreTourPremierLance(10) > 10 ? " | + " + (parseInt(player.getScoreTourPremierLance(10)) - 10) : "")}}
                                {{(player.getScoreTourPremierLance(11) != 0 ? " | " + player.getScoreTourPremierLance(11) : "")}}
                            </span>
                        </div>
                        <div class="uk-padding-remove uk-marggin-remove" style="height:50%; width:100%; border-top: 1pt solid;"> {{scoreTourPlayer(player, 10)}} </div>
                    </td>
                    
                    <td class="uk-padding-remove uk-marggin-remove" style="border: 1pt solid;font-size: 20pt;">
                        {{player.getScoreTotal()}}
                    </td>
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
          playerList: this.$parent.$parent.gameObj.Users,   /** @type ArrayList<User> @description Liste des joueurs */
          score1: {tour: 1, score: -1},                     /** @type JSONObject      @description Score et tour de la case 1 */
          score2: {tour: 2, score: -1},                     /** @type JSONObject      @description Score et tour de la case 2 */
          score3: {tour: 3, score: -1},                     /** @type JSONObject      @description Score et tour de la case 3 */
          score4: {tour: 4, score: -1},                     /** @type JSONObject      @description Score et tour de la case 4 */
          score5: {tour: 5, score: -1},                     /** @type JSONObject      @description Score et tour de la case 5 */
          score6: {tour: 6, score: -1},                     /** @type JSONObject      @description Score et tour de la case 6 */
          score7: {tour: 7, score: -1},                     /** @type JSONObject      @description Score et tour de la case 7 */
          score8: {tour: 8, score: -1},                     /** @type JSONObject      @description Score et tour de la case 8 */
          score9: {tour: 9, score: -1},                     /** @type JSONObject      @description Score et tour de la case 9 */
          score10: {tour: 10, score: -1},                   /** @type JSONObject      @description Score et tour de la case 10 */
      }
    }, 
    methods: {
        /** 
         * @method playerActive()
         * @param nom
         * @returns true si le joueur $nom est le joueur courant, faux sinon
         * @description Renvoie le joueur actif
         */
        playerActive: function(nom){
            return nom == this.$parent.$parent.gameObj.Users[this.$parent.$parent.gameObj.joueurCourant].nom ? true : false
        },
        /**
         * @method scoreTourPlayer()
         * @param player le joueur, @param tour le tour courant
         * @returns res, le score total au tour n 
         * @description Calcul du score total au tour n  
         */
        scoreTourPlayer: function(player, tour){
            if(player.getScoreTourPremierLance(tour) == 0 && player.getScoreTourSecondLance(tour) == 0){
                return " "
            }
            let res = 0; 
            for (let i = 1; i <= tour; i++){
                res += player.getScoreTourPremierLance(i) + player.getScoreTourSecondLance(i)
            }
            return res
        }
    }
}
</script>

<style scoped>

.scoreBoard{
    background-color: rgb(255,255,255,0.95);
}
.scoreBoard-dark{
    background-color: rgb(51,51,51,0.95);
    color: white;
}
.text-white{
    color:white;
}
</style>