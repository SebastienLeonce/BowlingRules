import User from '/src/games/User';
import { expect } from 'chai'

let User1 = new User("Jacques");
let User2 = new User(546);
let User3 = new User(null);

describe('models/User.js', () => {
    it('User test : ["Jacque", 546, null]', () => {
        expect(User1.getNom()).to.equal("Jacques")
    })
  })
  