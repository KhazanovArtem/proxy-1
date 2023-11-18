import Bowerman from '../Bowerman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('Bowerman create', () => {
    const player = new Bowerman('Legolas', "Bowerman");
    const result = {
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "Legolas",
        type: "Bowerman"}
    expect(player).toEqual(result);
});

test('Daemon create', () => {
    const player = new Daemon('Lucifer', "Daemon");
    const result = {
        attack: 10,
        defence: 40,
        health: 100,
        level: 1,
        name: "Lucifer",
        type: "Daemon"}
    expect(player).toEqual(result);
});

test('Magician create', () => {
    const player = new Magician('Merlin', "Magician");
    const result = {
        attack: 10,
        defence: 40,
        health: 100,
        level: 1,
        name: "Merlin",
        type: "Magician"}
    expect(player).toEqual(result);
});

test('Swordsman create', () => {
    const player = new Swordsman('Arthur', "Swordsman");
    const result = {
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: "Arthur",
        type: "Swordsman"}
    expect(player).toEqual(result);
});

test('Undead create', () => {
    const player = new Undead('Crispy', "Undead");
    const result = {
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "Crispy",
        type: "Undead"}
    expect(player).toEqual(result);
});

test('Zombie create', () => {
    const player = new Zombie('Shawn', "Zombie");
    const result = {
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: "Shawn",
        type: "Zombie"}
    expect(player).toEqual(result);
});

test('check name length', () => {
    expect(() => {
        const player = new Zombie('A', "Zombie");
    }).toThrow("Количество символов в имени должно быть от 2 до 10");
});

test('check right type', () => {
    expect(()=> {
        const player = new Zombie('Shawn', "Paladin");
    }).toThrow('Такого класса не существует');
});