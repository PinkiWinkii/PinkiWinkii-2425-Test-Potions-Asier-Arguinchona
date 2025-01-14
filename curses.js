import Curse from "./curse";

export default class Curses {


    constructor(curses){
        this.curses = curses;
    }

    static load(data) {
        return new Curses(data.data.map(Curse.from))
    }

}