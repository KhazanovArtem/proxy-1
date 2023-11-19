// TODO: write your code here
import Bowerman from './Bowerman';
import Daemon from './Daemon';
import Magician from './Magician';
import Swordsman from './Swordsman';
import Undead from './Undead';
import Zombie from './Zombie';

console.log('worked');

const player1 = new Bowerman('Legolas', 'Bowerman');
const player2 = new Daemon('Lucifer', 'Daemon');
const player3 = new Magician('Merlin', 'Magician');
const player4 = new Swordsman('Arthur', 'Swordsman');
const player5 = new Undead('Crispy', 'Undead');
const player6 = new Zombie('Shawn', 'Zombie');
console.log(player1,player2,player3,player4,player5,player6);

player3.levelUp();
console.log(player3);

player3.damage(35);
console.log(player3);
