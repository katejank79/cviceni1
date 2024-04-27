/*
Values and variables
Declare variables called country, continent and population and assign their values according
to your own country (population in millions).
    Log their values into console
*/

const country = 'Czech republic';
const continent = 'Europe';
let population = 10;

console.log(country);
console.log(continent);
console.log(population);

/*
Data types
Declare a variable called isIsland and set its value according to your country.
The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.
Log the types of isIsland, population, country and language to console
*/

let isIsland= false;
let language;

console.log(isIsland);
console.log(language);
console.log(country);
console.log(continent);
console.log(population);

/*
Set the value of language to the language spoken where you live (some countries have multiple languages,
but just choose one).
 */
language = 'Czech';

console.log(language);

/*
Think about which variables should be const variables (which values will never change, and which might change?).
Then, change these variables to const.
 */

const language = 'Czech';
console.log(language);

/*Try to change one of the changed variables now, and observe what happens.
*/

/*
Basic operators
If your country split in half, and each half would contain half the population,
then how many people would live in each half?
 */
const halfPopulation = population / 2;
console.log(halfPopulation);

/*
Increase the population of your country by 1 and log the result to the console.
 */
population += 1;
console.log(population);

/*
Finland has a population of 6 million. Does your country have more people than Finland?
 */
finlandPopulation = 6;
console.log(finlandPopulation);

/*
The average population of a country is 33 million people.
Does you country have less people than the average country?
 */
const averagePopulation = 33;

/*
 Based on the variables you created, create a new variable description which contains a string
 with this format: 'Portugal is in Europe, and its 11 million people speak Portuguese'.
 */


