<template>
    <div v-bind:class="{dark: $parent.$parent.isDark}" class="rulestext uk-card uk-card-default uk-box-shadow-small uk-overflow-auto uk-animation-scale-up">
        <div id="modal-rules" class="uk-flex-top" uk-modal>
            <div v-bind:class="{dark: $parent.$parent.isDark}" class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-overflow-auto" style="height: 90%; width: 90%;">
              Une partie de bowling se joue en 10 tours.
              A chaque tour, le but est de <strong>renverser les 10 quilles</strong>.
              Les participants jouent chacun leur tour. A chaque tour, lors du premier lancer, le joueur note dans l’application le nombre de quilles renversées :
              <ul>
                  <li>- Si les 10 quilles tombent ; 
                      <ul>
                          <li>Le joueur a fait un STRIKE (noté X dans le tableau des scores)</li><br>
                          <li>Ce tour lui rapporte 10 points plus les points des deux lancers suivants.</li>
                      </ul>
                  </li>
                  <li>- Si moins de 10 quilles tombent ;
                      <ul>
                          <li>Le joueur <strong>bénéficie d’un second lancer</strong>. Il note le nombre de quille renversées dans l’application.</li>
                          <li>• Si la <strong>somme</strong> des deux lancers de ce tour vaut <strong>10</strong>, le joueur a fait un <strong>SPARE</strong> (<em>noté /</em>)
                              <ul>
                                  <li>Le joueur marque alors 10 points <strong><u>plus</u></strong> les points du lancer suivant.</li>
                              </ul>
                          </li>
                          <li>• Si la <strong>somme</strong> est <strong>inférieure à 10</strong> :
                              <ul>
                                  <li>Le joueur obtient le nombre de quilles tombées comme score, en plus de son précédent score.</li>
                              </ul>
                          </li>
                      </ul>
                  </li>
              </ul>
              Au <strong>dixième tour</strong>, si le joueur réalise :<br>
              - Un <strong>spare</strong> : il a le droit à <strong>un lancer supplémentaire</strong>.<br>
              - Un <strong>strike</strong> : il a le droit à <strong>2 lancers supplémentaires</strong>.<br><br>
              Compte tenu de ces bonifications, le maximum de points par partie est de 300.
            </div>
        </div>
        <div v-bind:class="{dark: $parent.$parent.isDark}" href="#modal-rules" uk-toggle>
        Une partie de bowling se joue en 10 tours.
        A chaque tour, le but est de <strong>renverser les 10 quilles</strong>.
        Les participants jouent chacun leur tour. A chaque tour, lors du premier lancer, le joueur note dans l’application le nombre de quilles renversées :
        <ul>
            <li>- Si les 10 quilles tombent ; 
                <ul>
                    <li>Le joueur a fait un STRIKE (noté X dans le tableau des scores)</li><br>
                    <li>Ce tour lui rapporte 10 points plus les points des deux lancers suivants.</li>
                </ul>
            </li>
            <li>- Si moins de 10 quilles tombent ;
                <ul>
                    <li>Le joueur <strong>bénéficie d’un second lancer</strong>. Il note le nombre de quille renversées dans l’application.</li>
                    <li>• Si la <strong>somme</strong> des deux lancers de ce tour vaut <strong>10</strong>, le joueur a fait un <strong>SPARE</strong> (<em>noté /</em>)
                        <ul>
                            <li>Le joueur marque alors 10 points <strong><u>plus</u></strong> les points du lancer suivant.</li>
                        </ul>
                    </li>
                    <li>• Si la <strong>somme</strong> est <strong>inférieure à 10</strong> :
                        <ul>
                            <li>Le joueur obtient le nombre de quilles tombées comme score, en plus de son précédent score.</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
        Au <strong>dixième tour</strong>, si le joueur réalise :<br>
        - Un <strong>spare</strong> : il a le droit à <strong>un lancer supplémentaire</strong>.<br>
        - Un <strong>strike</strong> : il a le droit à <strong>2 lancers supplémentaires</strong>.<br><br>
        Compte tenu de ces bonifications, le maximum de points par partie est de 300.
      </div>
    </div>
</template>


<script>
export default {
  name: 'RulesText'
}
</script>


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
  top: 20%;
  left: 10%;
  height: 60%;
  width: 80%;
  text-align: left;
  padding: 2%;
  /* font-family: 'Big Shoulders Stencil Text', cursive; */
  font-family: 'Open Sans Condensed', sans-serif;
  /* font-family: 'Quicksand', sans-serif; */
  /* font-family: 'Indie Flower', cursive; */
  /* font-family: 'Bangers', cursive; */
}
#modal-rules{
    font-family: 'Open Sans Condensed', sans-serif;
}
.dark{
    background-color: rgb(51, 51, 51);
    color: white;
}
</style>
