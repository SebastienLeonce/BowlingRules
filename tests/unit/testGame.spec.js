import Game from '../../src/models/Game';
import { expect } from 'chai'

describe('models/Game.js', () => {
    it('addPlayer', () => {
        let jeux = new Game();
        jeux.addPlayer("Pierre");
        jeux.addPlayer("Paul");
        jeux.addPlayer("Jacques");

        expect(jeux.Users[0].getNom()).to.equal("Pierre");
        expect(jeux.Users[1].getNom()).to.equal("Paul");
        expect(jeux.Users[2].getNom()).to.equal("Jacques");
    })

    it('NextTurn', () => {
        let jeux = new Game();
        jeux.addPlayer("Pierre");
        jeux.addPlayer("Paul");
        jeux.addPlayer("Jacques");

        expect(jeux.tourCourant).to.equal(1);
        jeux.tourSuivant();
        expect(jeux.tourCourant).to.equal(2);
    })
})