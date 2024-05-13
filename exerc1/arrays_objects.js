
/*
//Pole (array)
let pole = ['jablko', 'ananas', 'banan']
console.log(pole[0]); // jablko

//Objekt
let obj = {
    jmeno: "Roman",
    prijmeni: "Kovac",
    vek: null
}

console.log(obj.jmeno); // Roman
console.log(obj[jmeno]); // Roman

//Iterace přes pole
pole.forEach((el) => {
    console.log(el);
});

for (let el of pole) {
    console.log(el);
}

//Iterace přes objekt
object.values(obj).forEach((elVal) => {
    console.log(elVal);
});

object.keys(obj).forEach((key) => {
    console.log(key);
});

for (let key in obj) {
    console.log(key);
}

for (let value of obj) {
    console.log(value);
}

//Přidání hodnoty do pole
pole.push('mandarinka');

//Přidání hodnoty do objektu
const object = {
    jmeno: "John",
    vek: 30
};
object.zamestnani = "programator";

/*Implementuj Array metódu find
Implementuj Array metódu forEach
Implementuj Array metódu filter
Implementuj Array metódu reverse
Implementuj Array metódu sort
Nacitaj od uzivatela 10 mien a vypis len tie, ktoré obsahujú písmeno R
Vytvor 2D pole s hodnotami 1 - 10 a vypíš ich
Vytvor 2D pole a najdi max hodnotu v poli
Vytvor 2D pole a spocitaj celkovu hodnotu pola
*/

let arr = ['15', '30', '60'];
/*
//1. Implementuj Array metódu find
function arrayFind(array, value, operator) {
    array.forEach((el) => {
        switch (operator) {
            case '<':
                if (el < value) {
                    console.log(el);
                    return;
                }
                break;
            case '>':
                if (el < value) {
                    return el;
                }
                break;
            case '<':
                if (el < value) {
                    return el;
                }
                break;
            case '<':
                if (el < value) {
                    return el;
                }
                break;
            case '<':
                if (el < value) {
                    return el;
                }
                break;
            case '<':
        }

        }
    )
}
*/


//function returnAge(age) {
//    return >= 18;
//}
//arr.find(returnAge);

//console.log(arr.find(returnAge));
//arr.find((el) => {
//    return el>= 18;
//})

//2. Implementuj Array metódu forEach
function arrayForEach(arr) {
 for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    }
}

//4. Implementuj Array metódu reverse
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

//Nacitaj od uzivatela 10 mien a vypis len tie, ktoré obsahujú písmeno R
let names = ['Roman', 'Katka', 'Kristina', 'Blanka', 'Petr'];

names.forEach((el) => {
      if (el.toLowerCase().includes('r') === true) {
    console.log(el);
   }
});

//Vytvor 2D pole s hodnotami 1 - 10 a vypíš ich
let array2d = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

/*for (let i = 3; i < array2d.length; i++) {
    for (let j = 3; j < array2d[i].length; j++) {
        console.log(array2d[i][j]);
    }
}

array2d.forEach((pole) => {
    pole.forEach((el) => {
        console.log(el);
    })
})

 */
/*
//Vytvor 2D pole a najdi max hodnotu v poli
let max = array2d[0][0];
for (let i = 0; i < array2d.length; i++) {
    for (let j = 0; j < array2d[i].length; j++) {
        if(array2d[i][j] > max) {
            max = array2d[i][j];
        }
    }
}

console.log(max);
*/

let sum = 0;
for (let i = 0; i < array2d.length; i++) {
    for (let j = 0; j < array2d[i].length; j++) {
          sum = sum + array2d[i][j];
        }
    }
console.log(sum);

