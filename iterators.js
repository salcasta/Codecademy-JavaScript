//Iterators

//Introduction to Iterators

/*
.forEach()
.map()
.filter()
*/

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);


//The .forEach() Method

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

//1.Iterate over the fruits array to log I want to eat a plus the name of each fruit to the console. For example, I want to eat a mango.

//You may use any form of callback you prefer.

fruits.forEach(function(fruit) {
  console.log(`I want to eat a ${fruit}`)
})

//The .map() Method

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

//1.Add your code under the animals array and before the line console.log(secretMessage.join(''));

//Use .map() to create a new array that contains the first character of each string in the animals array. Save the new array to a const variable named secretMessage.

const secretMessage = animals.map(animal => animal[0])

//2.Use .map() to divide all the numbers in bigNumbers by 100. Save the returned values to a variable declared with const called smallNumbers.

const smallNumbers = bigNumbers.map(num => num / 100)

console.log(smallNumbers)


//The .filter() Method

const randomNumbers = [375, 200, 3.14, 7, 13, 852];


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


//1.Call the .filter() method on randomNumbers to return values that are less than 250. Save them to a new array called smallNumbers, declared with const.

const smallNumbers = randomNumbers.filter(num => {
    return num < 250
})

console.log(smallNumbers)

//2.Now let’s work with an array of strings. Invoke .filter() on the favoriteWords array to return elements that have more than 7 characters. Save the returned array to a const variable named longFavoriteWords.

const longFavoriteWords = favoriteWords.filter(word => {
    return word.length > 7
})
  
console.log(longFavoriteWords)


//The .findIndex() Method

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

//1.Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.

const foundAnimal = animals.findIndex(animal => {
    return animal === 'elephant'
})
  
console.log(foundAnimal)


//2.Let’s see if we can find the index of the first animal that starts with the letter 's'.

//Call .findIndex() on the animals array and return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS.

const startsWithS = animals.findIndex(animal => {
    return animal.charAt(0) === 's'
})
  
console.log(startsWithS)


//The .reduce() Method

const newNumbers = [1, 3, 5, 7];

//Let’s practice calling .reduce() and using console.log() to check the values as .reduce() iterates through the array.

//In main.js, there is an array of numbers, newNumbers.

//To start, declare a new variable named newSum using the const keyword. Assign to newSum the value of calling .reduce() on newNumbers. You don’t need to provide any arguments to .reduce() yet.

//You’ll also see a TypeError: undefined is not a function but we’ll fix that after we add our callback function in the next step!

const newSum = newNumbers.reduce()

//2.Provide .reduce with an argument of a callback function. The callback function has two parameters. The first parameter is accumulator and the second parameter is currentValue. Use either a function expression or an arrow function.

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  
})

//3.To check the value being used as we iterate through the array, add three statements to the function body of the callback:

//console.log('The value of accumulator: ', accumulator);
//console.log('The value of currentValue: ', currentValue);
//a return statement that adds accumulator to currentValue.

const newSum = newNumbers.reduce((accumulator, currentValue) => {
    console.log('The value of accumulator: ', accumulator)
    console.log('The value of currentValue: ', currentValue)
    return accumulator + currentValue
})

//4.Log the value of newSum to the console to see the return value of calling .reduce() on newNumbers.

console.log(newSum)

//5.While we have this code set up, let’s also check what happens if you add a second argument to .reduce(). The second argument acts as an initial value for the accumulator.

//Add a second argument of 10 to .reduce().

const newSum = newNumbers.reduce((accumulator, currentValue) => {
    console.log('The value of accumulator: ', accumulator)
    console.log('The value of currentValue: ', currentValue)
    return accumulator + currentValue
}, 10)
  
console.log(newSum)


//Iterator Documentation

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some(() => {
  return word.length < 6;
}));

//1.In the code editor, there is an array called words. We want to create a new array of interesting words. The first thing we want to do is check if there are words that are fewer than 6 characters long. There is something missing in the words.some() method call. Fix this method so that true is printed to the console.

console.log(words.some((word) => {
    return word.length < 6;
}));

//2.The .some() method returned true, which means there are some words in the array that are shorter than six characters. Use the .filter() method to save any words longer than 5 characters to a new variable called interestingWords, declared with const.

const interestingWords = words.filter(word => {
    return word.length > 5
})

//3.In the last line of main.js, there is this code:

// console.log(interestingWords.every(word =>        ));
//Complete the code between the parentheses to check if every element has more than 5 characters.

//Make sure to uncomment (delete the // before) the last line of the program before you run the code.

console.log(interestingWords.every((word) => {return word.length > 5}));


//Choose the Right Iterator

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//1.Replace the word method in the first method call with a method that will do something to each of the values in the array and return undefined.

//cities.method(city => console.log('Have you visited ' + city + '?'));

cities.forEach(city => console.log('Have you visited ' + city + '?'));


//2.In the second method call, replace the word method with a method that will return a new array with only those elements longer than 7 characters.

//const longCities = cities.method(city => city.length > 7);

const longCities = cities.filter(city => city.length > 7);

//3.In the third method call, replace the word method with a method that take an array that contains multiple values and returns a single value.
/*
const word = cities.method((acc, currVal) => {
    return acc + currVal[0]
}, "C");

console.log(word)
*/

const word = cities.reduce((acc, currVal) => {
    return acc + currVal[0]
}, "C");
  
console.log(word)

//4.In the fourth method call, replace the word method with a method that will return a new array of numbers returned from the function.

//const smallerNums = nums.method(num => num - 5);

const smallerNums = nums.map(num => num - 5);

//5.In the fifth method call, replace the word method with a method that will return a boolean value.

//nums.method(num => num < 0);

nums.every(num => num < 0);
