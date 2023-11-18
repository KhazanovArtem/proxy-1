import Character from "./Character";

export default class Undead extends Character {
    constructor(name, type, level = 1, health = 100) {
        super(name, type, level, health);
        this.attack = 25;
        this.defence = 25;
    }
}