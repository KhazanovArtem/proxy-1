import Character from "./Character";

export default class Magician extends Character {
    constructor(name, type, level = 1, health = 100) {
        super(name, type, level, health);
        this.attack = 10;
        this.defence = 40;
    }
}