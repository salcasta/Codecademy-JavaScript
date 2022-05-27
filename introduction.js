//INTRODUCTION TO JAVASCRIPT
//Console

//1. Use the console.log code in the editor to log your age to the console.
//Run your code when you are ready to see the result.

console.log(34)

//2. On the next line, write another console.log to print out a different number representing the number of weeks you’ve been programming.

console.log(17)


//Comments

//1. Let’s practice adding some code comments.

//To the right, we’ve provided you with the beginning of the book Catch-22 by Joseph Heller.

//On line 1, write a single line comment that says Opening line.

//2. Single line comments are great for adding context to your code. Multi-line comments are often best suited to prevent a block of code from running. However, both types of comments can be used for either purpose.

//Use a multi-line comment so that the bottom 6 console.log() statements are all commented out.

// Opening Line
console.log('It was love at first sight.');
/*
console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');
*/


//Data Types

//1. On line 1, log the string 'JavaScript' to the console.

console.log('JavaScript')

//2. On line 2, log the number 2011 to the console.

console.log(2011)

//3. On line 3, print 'Woohoo! I love to code! #codecademy' to the console.

console.log('Woohoo! I love to code! #codecademy')

//4. On line 4, print the number 20.49 to the console.

console.log(20.49)


//Arithmetic Operators

//1. Inside of a console.log(), add 3.5 to your age.

//This is the age you’ll be when we start sending people to live on Mars.

console.log(3.5 + 34)


//2. On a new line write another console.log(). Inside the parentheses, take the current year and subtract 1969.

//The answer is how many years it’s been since the 1969 moon landing.

console.log(2022 - 1969)

//3. Create another console.log(). Inside the parentheses divide 65 by 240.

console.log(65/240)

//4. Create one last console.log(). Inside the parentheses, multiply 0.2708 by 100.

//That’s the percent of the sun that is made up of helium. Assuming we could stand on the sun, we’d all sound like chipmunks!

console.log(0.2708*100)


//String Concatenation

//1. Inside a console.log() statement, concatenate the two strings 'Hello' and 'World'.

//Note: You should concatenate the two strings exactly (without introducing any additional characters).

console.log('Hello' + 'World')

//2. We left off the space last time. Create a second console.log() statement in which you concatenate the strings 'Hello' and 'World', but this time make sure to also include a space (' ') between the two words.

console.log('Hello' + ' ' + 'World')


//Properties

//1. Use the .length property to log the number of characters in the following string to the console:

//'Teaching the world how to code'

console.log('Teaching the world how to code'.length)


//Methods

//1. Use the .toUpperCase() method to log the string 'Codecademy' to the console in all capital letters.

console.log('Codecademy'.toUpperCase())

//2. In the second console.log() statement in app.js, we have a string ' Remove whitespace ' which has spaces before and after the words 'Remove whitespace'.

//If we browse the JavaScript string documentation, we find several built-in string methods that each accomplish a different goal. The one method that seems ideal for us is .trim().

//Use the method to remove the whitespace at the beginning and end of the string in the second console.log() statement.

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());


//Built-in Objects

//1. Inside of a console.log(), create a random number with Math.random(), then multiply it by 100.

console.log(Math.floor(Math.random()* 100))

//2. Now, use Math.floor() to make the output a whole number.

//Inside the console.log() you wrote in the last step, put the existing Math.random() * 100 code inside the parentheses of Math.floor().

console.log(Math.floor(Math.random()* 100))

//3.Find a method on the JavaScript Math object that returns the smallest integer greater than or equal to a decimal number.

//Use this method with the number 43.8. Log the answer to the console.

console.log(Math.ceil(43.8))

//4. Use the JavaScript documentation to find a method on the built-in Number object that checks if a number is an integer.

//Put the number 2017 in the parentheses of the method and use console.log() to print the result.

console.log(Number.isInteger(2017))

