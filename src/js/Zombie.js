import Character from "./Character";

export default class Zombie extends Character {
    constructor(name, type, level = 1, health = 100) {
        super(name, type, level, health);
        this.attack = 40;
        this.defence = 10;
    }
}