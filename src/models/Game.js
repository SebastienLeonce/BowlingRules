import ObjUser from './User';

export default class Game {
    constructor () {
        this.Users = [];
    }

    addPlayer(Username) {
        this.Users.push(new ObjUser(Username));
    }
}