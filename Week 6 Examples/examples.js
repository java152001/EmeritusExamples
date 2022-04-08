/*** Example 1 forEach array method ***/

let bestPokemon = ['Dragonite', 'Ninetails', 'Salamence', 'Electabuzz', 'Latios', 'Shuckle', 'Squirtle'];

for (let i = 0; i < bestPokemon.length; i++) {
    for (let j = 0; j < bestPokemon.length; j++) {

    }
}

function createPokemonList(pokemon) {
  let returnList = 'These are the best pokemon ';

  pokemon.forEach(poke => {
    returnList += poke + " ";
  });

  returnList += 'but there are many more!';

  return returnList;

};

// console.log(createPokemonList(bestPokemon));


/*** Example 2 Working with Callbacks ***/

// What is a callback?

// var randomNums = [1, 2, 4, 7, 12, 17, 31, 45, 47, 51, 58]

// let oddArray = [];

// const filterOdds = (startArray, filterCallback) => {
//     for (let i = 0; i < startArray.length; i++) {
//         if (filterCallback(startArray[i])) {
//             oddArray.push(startArray[i]);
//         }
//     }
//     return oddArray;
// }

// //Ternary operator, a different way of writing a conditional statement
// const filterCallback = number => number % 2 === 1 ? true : false;

// console.log(filterOdds(randomNums, filterCallback));

/*** Example 3 Word Counting ***/

// function countWords() {
//     // The text variable contains the long string of words
//     let text =
//       "Some of the biggest and most expensive transportation projects in the world have involved building bridges. Bridges are crucial links that carry cars, trucks and trains across bodies of water, mountain gorges or other roads. As a result, they are one of the most important aspects of civil engineering and are subject to intense scrutiny, especially when they collapse. Bridge collapses can be tragic events, leading to loss of life and serious property damage. That is why bridge engineers, designers and builders must always take their jobs very seriously. The best way for them to prevent these accidents is to understand why bridges collapse in the first place. Understanding bridge collapses can lead to major changes in the design, construction and safety of future building projects. The following are main reasons why bridges fall.";
  
//     // TODO: add code here to remove the periods and commas and transform all words to lowercase letters

//     // fancy regex that replaces the characters between the brackets in the entire string
//     text = text.replace(/[,.]/g, "").toLowerCase();
  
//     // The wordArray array will contains a key value pair for words and their occurences in the text
//     const wordArray = text.split(" ");
  
//     // This loop goes through the wordArray and creates the key value pair objects
//     // const wordCount = {};
//     // wordArray.forEach((item) => {
//     //   if (wordCount[item] == null) wordCount[item] = 1;
//     //   else {
//     //     wordCount[item] += 1;
//     //   }
//     // });

//     // could also be accomplished with a reducer
//     const wordCount = wordArray.reduce((previous, current) => {
//         if (current in previous) {
//             previous[current] += 1;
//         } else {
//             previous[current] = 1;
//         }
//         return previous;
//     }, {})
  
//     // Turn objects into an array of arrays
//     let myArray = Object.entries(wordCount);

//     // TODO: sort the arrays based on the count number and store the result in a variable called bArray

//     const bArray = myArray.sort((a, b) => a[1] - b[1]);

//     // return the first three most common words.

//     bArray.splice(3);

//     //const words = bArray.map(items => items = items[0])

//     return bArray;
//   }

//   console.log(countWords());