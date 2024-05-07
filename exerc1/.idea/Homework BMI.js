/*HOMEWORK
CHALLENGE #1
Blanka, Katka and Tina are trying to compare their BMI (Body Mass Index),
which is calculated using the formula: BMI = mass / (height * height)(mass in kg and height in meters).
Your task is to write some code to help them:
    Store Blankas's, Tina’s and Katkas's mass and height in variables.
    Calculate both their BMIs using the formula, and store the results in three variables
    called BMIBlanka and BMIKatka and BMITina.
    Log the value of BMIBlanka, BMITina and BMIKatka to the console.
    BONUS: Create a boolean variable nameHasHigherBMI containing information about whether Blanka,
    Tina or Katka has a the highest BMI Log it to the console too
*/

let weightTina = 60;
let heightTina = 1.65;

let weightBlanka = 65;
let heightBlanka = 1.7;

let weightKatka = 68;
let heightKatka = 1.6;

const BMITina = weightTina / (heightTina * heightTina);
const BMIBlanka = weightBlanka / (heightBlanka * heightBlanka);
const BMIKatka = weightKatka / (heightKatka * heightKatka);

console.log("Tina BMI:", BMITina);
console.log("Blanka BMI:", BMIBlanka);
console.log("Katka BMI:", BMIKatka);

let nameHasHigherBMI = "";
if (BMIBlanka > BMITina && BMIBlanka > BMIKatka) {
    nameHasHigherBMI = "Blanka";
} else if (BMITina > BMIBlanka && BMITina > BMIKatka) {
    nameHasHigherBMI = "Tina";
} else if (BMIKatka > BMIBlanka && BMIKatka > BMITina) {
    nameHasHigherBMI = "Katka";
}   else {
    nameHasHigherBMI = "Same BMI";
}


console.log("The person with the highest BMI is:", nameHasHigherBMI);