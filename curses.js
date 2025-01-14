import Curse from "./curse.js";

export default class Curses {


    constructor(curses){
        this.curses = curses;
    }

    static load(data) {
        return new Curses(data.data.map(Curse.from))
    }

}