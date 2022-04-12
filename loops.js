// #1 Repeating Tasks Manually


//Create the variable vacationSpots, and assign its value to an array of three strings naming places you’d like to visit.

let vacationSpot = ['Cancun', 'Paris', 'Phoenix']

//Next, console.log() each item in vacationSpots. Since we don’t know loops yet, we have to console.log() each element in the array separately.

console.log(vacationSpots[0])
console.log(vacationSpots[1])
console.log(vacationSpots[2])



// #2 The For Loop

//Now, make your own! Create a program that loops from 5 to 10 and logs each number to the console.

for (let num = 5; num < 11; num++) {
    console.log(num)
}


// #3 Looping in Reverse

//Make a for loop that loops backwards printing 3 to 0 to the console. Use the >= comparison operator in your stopping condition and the -- operator in your iteration statement.


for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
}


// #4 Looping through Arrays

//Write a for loop that iterates through our vacationSpots array using i as the iterator variable.

//Inside the block of the for loop, use console.log() to log each element in the vacationSpots array after the string 'I would love to visit '. For example, the first round of the loop should print 'I would love to visit Bali' to the console.

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for(let i = 0; i < vacationSpots.length; i++) {
    console.log(`I would love to visit ${vacationSpots[i]}`)
}
  


// #5 Nested Loops

//Imagine you’re a big-wig programmer for a social media platform! You have been tasked with building a prototype for a mutual followers program. You’ll need two arrays of “friends” from two mock users so that you can extract the names of the followers who exist in both lists. Make a variable called bobsFollowers and set it equal to an array with four strings representing the names of Bob’s friends.

const bobsFollowers = ['sal', 'alonso', 'carlos', 'victor']


//Make a variable called tinasFollowers and set it equal to an array with three strings representing the names of Tina’s friends. Make exactly two of these the same as two of the friends in the bobsFollowers array.

const tinasFollowers = ['fabi', 'sal', 'carlos']


//Create a third variable named mutualFollowers and set it to an empty array.

const mutualFollowers = []

//Create a nested loop that iterates through bobsFollowers as the array for the outer loop and tinasFollowers as the array for the inner loop. If the current element from the outer loop is the same as the current element from the inner loop, push that element into the mutualFollowers array.

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
      if (bobsFollowers[i] === tinasFollowers[j]) {
        mutualFollowers.push(bobsFollowers[i])
      }
    }
}


// #6 The While Loop

const cards = ['diamond', 'spade', 'heart', 'club'];


//Below the cards array, declare a variable, currentCard, with the let keyword but don’t assign it a value.

let currentCard = []

//Create a while loop with a condition that checks if the currentCard does not have that value 'spade'.

//Inside the block of your while loop, add the following line of code:

// currentCard = cards[Math.floor(Math.random() * 4)];

//Math.floor(Math.random() * 4) will give us a random number from 0 to 3. We’ll use this number to index the cards array, and assign the value of currentCard to a random element from that array.

while ( currentCard != 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}


// #7 Do...While Statements

//We’d like a program to simulate part of the cake-baking process. Depending on the recipe, a different number of cups of sugar is required. Create the variable cupsOfSugarNeeded, and assign it a number value of your choosing.

//The cups of sugar must be added to the batter one at a time. Declare the variable cupsAdded and assign it the value 0.

const cupsOfSugarNeeded = 5

let cupsAdded = 0


//We have a sweet tooth, so we want to add at least one cup of sugar to the batter even if the value of cupsOfSugarNeeded is 0.

//Create a do...while loop which increments cupsAdded by one while cupsAdded is less than cupsOfSugarNeeded.

//In order to help us visualize the output on each iteration of the loop, add a console.log within the do...while block and log the value of cupsAdded.

do {
    cupsAdded++
    console.log(`${cupsAdded} cup was added`) 
} while (cupsAdded < cupsOfSugarNeeded)


// #8 The break Keyword

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

//Log each element from rapperArray in a for loop with the iterator variable i.

for (let i = 0; i < rapperArray.length; i++) {
    console.log(rapperArray[i])
}

//After the for loop, log the string "And if you don't know, now you know." to the console. Note: since there’s a single quote character, ', in our string, we can use double quotes around the string to make sure character prints.

console.log("And if you don't know, now you know.")


//Add a break inside your loop’s block that breaks out of the loop if the element at the current index in the rapperArray is 'Notorious B.I.G.'.

for (let i = 0; i < rapperArray.length; i++) {
    console.log(rapperArray[i])
    if (rapperArray[i] === 'Notorious B.I.G.'){
      break;
    }
}