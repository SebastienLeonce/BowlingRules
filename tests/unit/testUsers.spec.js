import User from '../../src/models/User';
import { expect, assert } from 'chai'

describe('models/User.js', () => {
    it('User test : ["Jacques", 546, null]', () => {
        let User1 = new User("Jacques");
        expect(User1.getNom()).to.equal("Jacques");
        assert.throw(function() { new User(546) }, Error, /Use String Type/);
        assert.throw(function() { new User(null) }, Error, /Use String Type/);
    })

    it('testStrike', () => {
        let User1 = new User("Jacques");
        User1.ajouterScore1(10);
        expect(User1.score[0].isStrike()).to.equal(true);
        expect(User1.isRelance2Available()).to.equal(false);
        expect(User1.score[1].premierLanceDouble).to.equal(true);
        expect(User1.score[1].secondLanceDouble).to.equal(true);

        User1 = new User("Jacques");
        User1.ajouterScore1(5);
        expect(User1.score[0].isStrike()).to.equal(false);
        expect(User1.isRelance2Available()).to.equal(true);
        expect(User1.score[1].premierLanceDouble).to.equal(false);
        expect(User1.score[1].secondLanceDouble).to.equal(false);
    })

    it('testSpare', () => {
        let User1 = new User("Jacques");
        User1.ajouterScore1(5);
        expect(User1.isRelance2Available()).to.equal(true);
        User1.ajouterScore2(5);
        expect(User1.score[0].isSpare()).to.equal(true);
        expect(User1.score[1].premierLanceDouble).to.equal(true);
        expect(User1.score[1].secondLanceDouble).to.equal(false);

        User1 = new User("Jacques");
        User1.ajouterScore1(10);
        expect(User1.isRelance2Available()).to.equal(false);
        User1.ajouterScore2(0);
        expect(User1.score[0].isSpare()).to.equal(false);
        expect(User1.score[1].premierLanceDouble).to.equal(true);
        expect(User1.score[1].secondLanceDouble).to.equal(true);

        User1 = new User("Jacques");
        User1.ajouterScore1(0);
        expect(User1.isRelance2Available()).to.equal(true);
        User1.ajouterScore2(10);
        expect(User1.score[0].isSpare()).to.equal(true);
        expect(User1.score[1].premierLanceDouble).to.equal(true);
        expect(User1.score[1].secondLanceDouble).to.equal(false);
    })

    it('testScore', () => {
        //let User1 = new User("Jacques");
    })
})
