/* Whale Talk
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

1. There are no consonants. Only vowels excluding “y”.
2. The u‘s and e‘s are extra long, so we must double them in our program.
*/


let input = "Let's see if this really works."
const vowels = ['a', 'e', 'i', 'o', 'u']

let resultArray = []

for (let i = 0; i < input.length; i++) {
  //console.log(`i is ${i}`) counts the number of characters in the input string
  if (input[i] === 'e') {
    resultArray.push(input[i])
  }
  if (input[i] === 'u') {
    resultArray.push(input[i])
  }

  for (let j = 0; j < vowels.length; j++) {
    //console.log(`j is ${j}`) each index in vowels is checked for each character in the input string
    if (input[i] === vowels[j]) {
    //console.log(input[i]) when a match is found between input and vowels, it is logged (it is comparing the two)
    resultArray.push(input[i])

   }
  }
}

//console.log(resultArray) the vowels have been pulled out and the 'e' and 'u' are doubled. However they are lowercase and each letter is in a separate index within the array

let resultString = resultArray.join('').toUpperCase()
console.log(resultString) // the individual letters are made to appear uppercase and joined into one string

