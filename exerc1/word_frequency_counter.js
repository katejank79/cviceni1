/* Programming Assignment: Word Frequency Counter
Objective:
    Write a program in a language of your choice that reads a text file containing words and counts the frequency of each word.
    The program should output the word frequencies in descending order.
    Requirements:
Your program should read input from a text file named input.txt.
    Words should be case-insensitive, meaning Word, word, and WORD should all be considered the same word.
    The program should count only alphabetic words. Exclude punctuation, numbers, and special characters from the word count.
    Output the word frequencies in descending order, along with their counts.
    If there are multiple words with the same frequency, order them alphabetically.
    Example:
Suppose input.txt contains the following text:
    The quick brown fox jumps over the lazy dog. The dog barks loudly, but the fox ignores it.
    Output:
the: 4 fox: 2 dog: 2 quick: 1 brown: 1 jumps: 1 over: 1 lazy: 1 barks: 1 loudly: 1 but: 1 ignores: 1 it: 1
 */

const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

        console.log(data);
    let words = data.split(' ');
    console.log(words);

    let wordUnique = [];

    words.forEach((word) => {
           if(wordUnique.includes(word.toLowerCase())) {
        } else {
               wordUnique.push(word.toLowerCase());
           }
    })
});