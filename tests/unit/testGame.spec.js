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
        expect(jeux.Users[2].tourCourant).to.equal(1);
        jeux.tourSuivant();
        expect(jeux.tourCourant).to.equal(2);
        expect(jeux.Users[2].tourCourant).to.equal(2);
    })

    it('NextTurnV2', () => {
        let jeux = new Game();
        jeux.addPlayer("Pierre");
        jeux.addPlayer("Paul");
        jeux.addPlayer("Jacques");

        expect(jeux.tourCourant).to.equal(1);
        expect(jeux.joueurCourant).to.equal(0);
        jeux.joueurSuivant();
        expect(jeux.joueurCourant).to.equal(0);
        jeux.Users[0].ajouterScore1(6);
        jeux.joueurSuivant();
        expect(jeux.joueurCourant).to.equal(0);
        jeux.Users[0].ajouterScore2(2);
        jeux.joueurSuivant();
        expect(jeux.joueurCourant).to.equal(1);
        jeux.Users[1].ajouterScore1(10);
        jeux.joueurSuivant();
        expect(jeux.joueurCourant).to.equal(2);
        jeux.Users[2].ajouterScore1(10);
        jeux.joueurSuivant();
        expect(jeux.joueurCourant).to.equal(0);
    }) 
    
    it("FinDePartie oklm", () => {
        let jeux = new Game();
        jeux.addPlayer("Pierre");

        for(let i = 0; i < 10; i++) {
            jeux.Users[0].ajouterScore1(6);
            jeux.Users[0].ajouterScore2(2);
            jeux.joueurSuivant();
            expect(jeux.joueurCourant).to.equal(0);
            console.log(jeux.Users[0].getScoreTotal());
        }
    })

    it("FinDePartie Strike", () => {
        let jeux = new Game();
        jeux.addPlayer("Pierre");

        for(let i = 0; i < 12; i++) {
            jeux.Users[0].ajouterScore1(10);
            jeux.joueurSuivant();
            expect(jeux.joueurCourant).to.equal(0);
            console.log(jeux.Users[0].getScoreTotal());
        }
    })
})