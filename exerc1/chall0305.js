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