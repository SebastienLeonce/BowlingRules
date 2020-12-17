<template>
    <div class="uk-card uk-card-default">
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
                    <!-- <td>{{player.getScore1Tour(1)}} | {{player.getScore2Tour(1)}}</td> -->
                    <td>{{0}} | {{0}}</td>
                    <td>{{0}} | {{0}}</td>
                    <td>{{0}} | {{0}}</td>
                    <td>{{0}} | {{0}}</td>
                    <td>{{0}} | {{0}}</td>
                    <td>{{0}} | {{0}}</td>
                    <td>{{0}} | {{0}}</td>
                    <td>{{0}} | {{0}}</td>
                    <td>{{0}} | {{0}}</td>
                    <td>{{0}} | {{0}}</td>
                    <td>{{0}}</td>
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
        console.log(this.$parent.$parent.gameObj.Users)
    }
}
</script>