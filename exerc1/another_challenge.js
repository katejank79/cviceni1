
/*
 0. Vypiste cislo, ktore vam uzivatel zadal v tvare "Uzivatel zadal cislo: CISLO SEM a to je peklne cislo
 1. Vypis cisla od 1 - 20
 2. Vypis cisla od 20 - 1
 3. Vypis cisla, ktore su delitelne 3
 4. Vypis cisla, ktore su delitelne 4 a 6
 */

const prompt = require('prompt-sync')();
//let vstup = prompt('Vloz cislo: ');
//console.log(vstup);

//0
//console.log(`Uzivatel zadal cislo: ${vstup}, a to je pekne cislo.`);

//1
//for(let i = 1; i <=20; i++) {
  //  console.log (i);
//}

//2
//for(let i = 20; i >=1; i--) {
//    console.log (i);
//}

//3
//let cislo = prompt ('Vloz cislo: ');

for (let i = 0; i <= cislo; i++) {
    if (i % 3 === 0) {
    console.log (i);
    }
}

//4
for (let i = 0; i <= cislo; i++) {
    if((i % 4 === 0) && (i % 6 === 0)) {
    }
}

console.log('9' - '5'); // -> ?
console.log('19' - '13' + '17'); // -> ?
console.log('19' - '13' + 17); // -> ?
console.log('123' < 57); // -> ?
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ?
