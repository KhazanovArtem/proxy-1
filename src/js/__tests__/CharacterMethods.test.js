import Character from '../Character';
import Magician from '../Magician';

test('Check method levelUp', () => {
    const player = new Magician('Merlin', "Magician");
    const result = {
        attack: 12,
        defence: 40,
        health: 100,
        level: 2,
        name: "Merlin",
        type: "Magician"}
    player.levelUp();
    expect(player).toEqual(result);
});

test('check error method levelUp', () => {
    expect(() => {
        const player = new Magician('Merlin', "Magician");
        player.health = 0;
        player.levelUp();
    }).toThrow('Нельзя повысить уровень умершего');
})

test('check method damage', () => {
    const player = new Magician('Merlin', "Magician");
    const result = {
        attack: 10,
        defence: 40,
        health: 79,
        level: 1,
        name: "Merlin",
        type: "Magician"}
    player.damage(35);
    expect(player).toEqual(result);
})

test('check error method damage', () => {
    expect(() => {
        const player = new Magician('Merlin', "Magician");
        player.health = 0;
        player.damage(35);
    }).toThrow('Персонаж уже мертв');
})