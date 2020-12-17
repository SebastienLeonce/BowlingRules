<template>
    <div class="rulestext uk-card uk-card-default uk-position-center uk-overflow-auto">
        Une partie de bowling se joue en 10 tours.
        A chaque tour, le but est de <strong>renverser les 10 quilles</strong>.
        Les participants jouent chacun leur tour. A chaque tour, lors du premier lancer, le joueur note dans l’application le nombre de quilles renversées :
        <ul>
            <li>Si les 10 quilles tombent ; 
                <ul>
                    <li>Le joueur a fait un STRIKE (noté X dans le tableau des scores)</li>
                    <li>Ce tour lui rapporte 10 points plus les points des deux lancers suivants.</li>
                </ul>
            </li>
            <li>Si moins de 10 quilles tombent ;
                <ul>
                    <li>Le joueur <strong>bénéficie d’un second lancer</strong>. Il note le nombre de quille renversées dans l’application.</li>
                    <li>Si la <strong>somme</strong> des deux lancers de ce tour vaut <strong>10</strong>, le joueur a fait un <strong>SPARE</strong> (<em>noté /</em>)
                        <ul>
                            <li>Le joueur marque alors 10 points <strong><u>plus</u></strong> les points du lancer suivant.</li>
                        </ul>
                    </li>
                    <li>Si la <strong>somme</strong> est <strong>inférieure à 10</strong> :
                        <ul>
                            <li>Le joueur obtient le nombre de quilles tombées comme score, en plus de son précédent score.</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
        Au <strong>dixième tour</strong>, si le joueur réalise :
        <ul>
        <li>Un <strong>spare</strong> : il a le droit à <strong>un lancer supplémentaire</strong>.</li>
        <li>Un <strong>strike</strong> : il a le droit à <strong>2 lancers supplémentaires</strong>.    </li>
        </ul>
        Compte tenu de ces bonifications, le maximum de points par partie est de 300.
    </div>
</template>


<script>
export default {
  name: 'RulesText',
  props: {
  },
  data: function(){
    return{
    }
  }, 
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.rulestext{
  position: absolute;
  height: 70%;
  width: 80%;
  text-align: left;
  padding: 2%;
}
</style>
