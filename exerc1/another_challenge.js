
const variable = 0;

if (variable < 10) {
    console.log('1, interval');
} else if (variable >= 10 && variable < 20) {
    console.log('2, interval');
   }

switch (variable) {
    case 0: variable > 10; {
        break;
    }
    case 1: variable >= 10 && variable < 20; {
        break;
    }
    default: break;
}

//0-9
let cislo = 10;

switch (cislo) {
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    default:
        console.log('Uzivatel nezadal spravne cislo: ');

}

let username = 'Katka';
let age = 17;

if((username === 'Marta') || (age < 18)) {
    console.log('Zakaz vstupu');
      }

for(let i = 0; i <= 10; i++) {
    console.log(i);
}

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

/*
 0. Vypiste cislo, ktore vam uzivatel zadal v tvare "Uzivatel zadal cislo: CISLO SEM a to je peklne cislo
 1. Vypis cisla od 1 - 20
 2. Vypis cisla od 20 - 1
 3. Vypis cisla, ktore su delitelne 3
 4. Vypis cisla, ktore su delitelne 4 a 6
 */

const prompt = require('prompt-sync')();

let vstup = prompt('Vloz cislo: ');

console.log(vstup);

//0
console.log(`Uzivatel zadal cislo: ${vstup}, a to je pekne cislo.`);

//1
for(let i = 1; i <= 10; i++) {
    console.log (i);
}

//2
for(let i = 20; i >=1; i--) {
    console.log (i);
}

//3
let number = prompt ('Vloz cislo: ');

for (let i = 0; i <= number; i++) {
    if(i % 3 === 0) {
    console.log (i);
    }
}

//4
for (let i = 0; i <= cislo; i++) {
    if((i % 4 === 0) && (i % 6 === 0)) {
    }
}





