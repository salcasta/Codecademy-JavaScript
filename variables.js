//VARIABLES

//Create a Variable: var

//1. Declare a variable named favoriteFood using the var keyword and assign to it the string 'pizza'.

var favoriteFood = 'pizza'

//2. Declare a variable named numOfSlices using the var keyword and assign to it the number 8.

var numOfSlices = 8

//3. Under the numOfSlices variable, use console.log() to print the value saved to favoriteFood.

//On the following line, use console.log() to print the value saved to numOfSlices.

console.log(favoriteFood)
console.log(numOfSlices)


//Create a Variable: let

//1. Create a let variable called changeMe and set it equal to the boolean true.

let changeMe = true

//2. On the line after changeMe is declared, set the value of changeMe to be the boolean false.

//To check if changeMe was reassigned, log the value saved to changeMe to the console.

changeMe = false
console.log(changeMe)


//Create a Variable: const

//1. Create a constant variable named entree and set it to equal to the string 'Enchiladas'.

const entree = 'Enchiladas'

//2. Just to check that you’ve saved the value of 'Enchiladas' to entree, log the value of entree to the console.

console.log(entree)

//3. Great, let’s see what happens if you try to reassign a constant variable.

//Paste the following code to the bottom of your program.

//entree = 'Tacos'
//This code throws the following error when you run your code:

//TypeError: Assignment to constant variable.
//After you clear this checkpoint, if you want to see about another quirk of const in action open the hint!

entree = 'taco'


//Mathematical Assignment Operators

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

//1. Use the += mathematical assignment operator to increase the value stored in levelUp by 5.

levelUp += 5

//2. Use the -= mathematical assignment operator to decrease the value stored in powerLevel by 100.

powerLevel -= 100

//3. Use the *= mathematical assignment operator to multiply the value stored in multiplyMe by 11.

multiplyMe *= 11

//4. Use the /= mathematical assignment operator to divide the value stored in quarterMe by 4.

quarterMe /= 4


// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);


//The Increment and Decrement Operator

let gainedDollar = 3;
let lostDollar = 50;

//1. Using the increment operator, increase the value of gainedDollar.

gainedDollar++

//2. Using the decrement operator, decrease the value of lostDollar.

lostDollar--


//String Concatenation with Variables

//1. Create a variable named favoriteAnimal and set it equal to your favorite animal.

let favoriteAnimal = 'panda'

//2. Use console.log() to print 'My favorite animal: ANIMAL' to the console. Use string concatenation so that ANIMAL is replaced with the value in your favoriteAnimal variable.

console.log('My favorite animal:' + ' ' + favoriteAnimal)


//String Interpolation

//1. Create a variable called myName and assign it your name.

let myName = 'Sal'

//2. Create a variable called myCity and assign it your favorite city’s name.

let myCity = 'Chicago'

//3.Use a single template literal to interpolate your variables into the sentence below. Use console.log() to print your sentence to the console in the following format:

//My name is NAME. My favorite city is CITY.

//Replace NAME and CITY in the string above by interpolating the values saved to myName and myCity.

console.log(`My name is ${myName}. My favorite city is ${myCity}.`)


//typeof operator

let newVariable = 'Playing around with typeof.';

//1. Use console.log() to print the typeof newVariable.

console.log(typeof newVariable)

//2. Great, now let’s check what happens if we reassign the variable. Below the console.log() statement, reassign newVariable to 1.

newVariable = 1

//3. Since you assigned this new value to newVariable, it has a new type! On the line below your reassignment, use console.log() to print typeof newVariable again.

console.log(typeof newVariable)

