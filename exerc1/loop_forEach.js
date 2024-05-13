// ///////// LOOOPS
//
// /*let pole = [1,2,3,4,5,6];
//
// pole.forEach((el) => {
//     console.log(el);
// });
//
// for (let i = 0; i < pole.length; i++) {
//     console.log(pole[i]);
// }
//
// let i = 0;
// while (i < pole.length) {
//     console.log(pole[i]);
//     i++;
// }
//
// i = 0;
// do {
//     console.log(pole[i]);
//     i++;
// } while (pole.length > i);
//
// for (let cislo of pole) {
//     console.log(cislo);
// }
// */
//
// /*
//
//     Zoradenie pola: Zoraďte dané pole čísel od najmenšieho po najväčšie.
//     Generovanie prvých n čísel Fibonacciovej postupnosti: Napíšte funkciu, ktorá vygeneruje prvých n čísel Fibonacciovej postupnosti.
//     Vyhľadanie prvku v poli: Nájdite zadaný prvok v danom poli čísel.
//     Výpočet mocniny čísla: Napíšte funkciu, ktorá vypočíta zadanú mocninu zadaného čísla.
//
//  */
//
// //1. Výpis čísel od 1 do 10: Použite cyklus na výpis čísel od 1 do 10.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
//
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
//
// //2. Výpis sudých čísel od 1 do 20: Použite cyklus na výpis len sudých čísel od 1 do 20.
// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }
//
// //3. Výpis lichých čísel od 1 do 20: Použite cyklus na výpis len lichých čísel od 1 do 20.
// for (let i = 1; i <= 20; i += 2) {
//     console.log(i);
// }
//
// //4. Súčet čísel od 1 do 100: Spočítajte súčet všetkých čísel od 1 do 100.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);
//
// //5. Súčet len sudých čísel od 1 do 100: Spočítajte súčet iba sudých čísel od 1 do 100.
// sum = 0;
// for (let i = 2; i <= 100; i += 2) {
//     sum += i;
// }
// console.log(sum);
//
// //6. Výpočet faktoriálu čísla: Napíšte funkciu, ktorá vypočíta faktoriál zadaného čísla.
// const prompt = require('prompt-sync')();
// let cislo = prompt("Vlož číslo:");
// cislo = parseInt(cislo);
// let fac = 1;
// for (let i = cislo; i > 0; i--) {
//     fac = fac * i;
// }
// console.log(fac);
//
// function factorial(number) {
//     let fac = 1;
//     for (let i = cislo; i > 0; i--) {
//         fac = fac * i;
//     }
//     return fac
// }
//
// console.log(factorial(cislo));

//7. Zoradenie pola: Zoraďte dané pole čísel od najmenšieho po najväčšie.

//8. Generovanie prvých n čísel Fibonacciovej postupnosti: Napíšte funkciu, ktorá vygeneruje prvých n čísel Fibonacciovej postupnosti.
let fib = [0,1];
for (let i =2; i <= 10; i++) {
    fib[i] = fib[i -2] + fib[i - 1];
    console.log(fib[i]);
}

////9. Vyhľadanie prvku v poli: Nájdite zadaný prvok v danom poli čísel.
// let numbersField = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let element = prompt("Vlož číslo:");
//
// function findElement(numbersField) {
//     for (let el of numbersField) {
//         if (el === element) {
//             return el;
//         }
//     }
// }
//
// console.log(findElement(element, numbersField));

////10. Výpočet mocniny čísla: Napíšte funkciu, ktorá vypočíta zadanú mocninu zadaného čísla.
//let cislo = prompt("Vlož číslo:");
function mocnina(x, n) {
    let vysledek = 1;
    while (n > 0) {
        vysledek = vysledek * x;
        n--;
    }
    return vysledek;
}

console.log(mocnina(2, 2));






