export default class Character {
    constructor(name, type) {
        if (name.length > 1 && name.length < 10) {
            this.name = name;
        } else throw new Error("Количество символов в имени должно быть от 2 до 10");
        if (type === 'Bowerman' || type === 'Swordsman' || type === 'Magician' || type === 'Daemon' || type === 'Undead' || type === 'Zombie') {
            this.type = type;
        } else throw new Error('Такого класса не существует');
        this.health = 100;
        this.level = 1;
    }

    levelUp() {
        if (this.health <= 0) {
            throw new Error('Нельзя повысить уровень умершего');
        }
        this.level++;
        this.attack = this.attack + this.attack*0.2;
        this.health = 100;
    }

    damage(points) {
        if (this.health <= 0) {
            throw new Error('Персонаж уже мертв');
        }
        this.health -= points * (1 - this.defence / 100);
    }
}