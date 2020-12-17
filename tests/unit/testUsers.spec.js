import User from '../../src/models/User';
import { expect, assert } from 'chai'

let User1 = new User("Jacques");

describe('models/User.js', () => {
    it('User test : ["Jacques", 546, null]', () => {
        expect(User1.getNom()).to.equal("Jacques");
        assert.throw(function() { new User(546) }, Error, /Use String Type/);
        assert.throw(function() { new User(null) }, Error, /Use String Type/);
    })

    it('testStrike', () => {
        
    })
})
