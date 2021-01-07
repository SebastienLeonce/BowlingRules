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
        }
    })

    it("que des 3 solo", () => {
        let jeux = new Game();
        jeux.addPlayer("Pierre");

        for(let i = 0; i < 20; i++) {
            jeux.Users[0].ajouterScore1(3);
            jeux.Users[0].ajouterScore2(3);
            if (jeux.joueurSuivant() == -1) break;
        }
        expect(jeux.Users[0].getScoreTotal()).to.equal(60);
    })

    it("que des 3 duo", () => {
        let jeux = new Game();
        jeux.addPlayer("Pierre");
        jeux.addPlayer("Paul");

        for(let i = 0; i < 20; i++) {
            jeux.Users[0].ajouterScore1(3);
            jeux.Users[0].ajouterScore2(3);
            jeux.joueurSuivant();
            jeux.Users[1].ajouterScore1(3);
            jeux.Users[1].ajouterScore2(3);
            if (jeux.joueurSuivant() == -1) break;
        }
        expect(jeux.Users[0].getScoreTotal()).to.equal(60);
        expect(jeux.Users[1].getScoreTotal()).to.equal(60);
    })

    it("que des strike solo", () => {
        let jeux = new Game();
        jeux.addPlayer("Pierre");

        for(let i = 0; i < 20; i++) {
            //console.log(jeux.tourCourant);
            //console.log(jeux.Users[0].tourCourant);
            jeux.Users[0].ajouterScore1(10);
            
            if (jeux.joueurSuivant() == -1) break;
        }
        expect(jeux.Users[0].getScoreTotal()).to.equal(300);
    })

    it("que des strike duo", () => {
        let jeux = new Game();
        jeux.addPlayer("Pierre");
        jeux.addPlayer("Paul");

        for(let i = 0; i < 20; i++) {
            jeux.Users[0].ajouterScore1(10);
            if (jeux.joueurSuivant() == -1) break;
            jeux.Users[1].ajouterScore1(10);
            if (jeux.joueurSuivant() == -1) break;
        }
        expect(jeux.Users[0].getScoreTotal()).to.equal(300);
        expect(jeux.Users[1].getScoreTotal()).to.equal(300);
    })

    it("partie compliqué", () => {
        let jeux = new Game();
        jeux.addPlayer("Pierre");

        
        jeux.Users[0].ajouterScore1(3);
        jeux.Users[0].ajouterScore2(5);
        jeux.joueurSuivant()

        jeux.Users[0].ajouterScore1(4);
        jeux.Users[0].ajouterScore2(4);
        jeux.joueurSuivant()

        jeux.Users[0].ajouterScore1(10);
        jeux.joueurSuivant()

        jeux.Users[0].ajouterScore1(6);
        jeux.Users[0].ajouterScore2(3);
        jeux.joueurSuivant()

        jeux.Users[0].ajouterScore1(4);
        jeux.Users[0].ajouterScore2(0);
        jeux.joueurSuivant()

        jeux.Users[0].ajouterScore1(6);
        jeux.Users[0].ajouterScore2(4);
        jeux.joueurSuivant()

        jeux.Users[0].ajouterScore1(3);
        jeux.Users[0].ajouterScore2(2);
        jeux.joueurSuivant()

        jeux.Users[0].ajouterScore1(0);
        jeux.Users[0].ajouterScore2(0);
        jeux.joueurSuivant()

        jeux.Users[0].ajouterScore1(9);
        jeux.Users[0].ajouterScore2(1);
        jeux.joueurSuivant()

        jeux.Users[0].ajouterScore1(10);
        jeux.joueurSuivant()
        jeux.Users[0].ajouterScore1(10);
        jeux.joueurSuivant()
        jeux.Users[0].ajouterScore1(10);
        jeux.joueurSuivant()

        expect(jeux.Users[0].getScoreTotal()).to.equal(116);
    })
})