//Scope

//Blocks and Scope

//1.At the top of main.js, declare a const variable, named city set equal to 'New York City'. This variable will exist outside of the block.

const city = 'New York City'

//2.Below the city variable, write a function named logCitySkyline.

function logCitySkyline () {

}

//3.Inside of the function body of logCitySkyline(), write another variable using let named skyscraper and set it equal to 'Empire State Building'.

function logCitySkyline () {
    let skyscraper = 'Empire State Building'
}
  
//4.Inside the function, include a return statement like this:

//return 'The stars over the ' + skyscraper + ' in ' + city;

function logCitySkyline () {
    let skyscraper = 'Empire State Building'
    return 'The stars over the ' + skyscraper + ' in ' + city;
}

//5.Beneath the logCitySkyline() function, use console.log() to log the value of logCitySkyline() to the console.

//You’ll notice that the logCitySkyline() function is able to access both variables without any problems. In the next exercise we’ll consider why would it be preferable to have one variable outside of a block and the other inside of a block.

console.log(logCitySkyline())


//Global Scope

//1.At the top of main.js, write three global variables:

//Name the first variable satellite and set it equal to 'The Moon'.
//Name the second variable galaxy and set it equal to 'The Milky Way'.
//Name the third variable stars and set it equal to 'North Star'.

let satellite = 'The Moon'
let galaxy = 'The Milky Way'
let stars = 'North Star'

//2.Below the variables created in the previous step, write a function named callMyNightSky. Inside the function, include a return statement like this:

//return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;

function callMyNightSky () {
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

//3.Beneath the callMyNightSky() function, use console.log() to log the value of callMyNightSky() to the console.

//You’ll notice that the function block for callMyNightSky() is able to access the global variables freely since the variables are available to all lines of code in the file.

console.log(callMyNightSky())


//Block Scope

//1.In main.js, define a function logVisibleLightWaves().

function logVisibleLightWaves () {
  
}

//2.Within the logVisibleLightWaves() function, using const, create a variable lightWaves and set it equal to 'Moonlight'.

function logVisibleLightWaves () {
    const lightWaves = 'Moonlight'
}

//3.Within the logVisibleLightWaves() function, beneath the lightWaves variable, add a console.log() statement that will log the value of the lightWaves variable when the function runs.

function logVisibleLightWaves () {
    const lightWaves = 'Moonlight'
    console.log(lightWaves)
}

//4.Call the logVisibleLightWaves() function from outside the function.

console.log(logVisibleLightWaves())

//5.Beneath the function call, log the value of lightWaves to the console from outside the function.

//You’ll notice that it logs a ReferenceError since the variable is tied to the block scope of the function!

console.log(lightWaves)


//Scope Pollution

//1.Let’s see what happens if we create a variable that overwrites a global variable.

//Inside the callMyNightSky() function, on the very first line of the function body, assign the variable stars to 'Sirius' as such:

//stars = 'Sirius';

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

//2.Outside the function, under the current console.log() statement, add another console.log() statement to log stars to the console.

//You’ll notice that the global variable stars was reassigned to 'Sirius'. In other words, we changed the value of the global stars variable but it’s not easy to read what exactly happened. This is bad practice in code maintainability and could impact our program in ways we do not intend.

console.log(callMyNightSky());
console.log(stars)


//Practice Good Scoping

//1.Inside the function body of logVisibleLightWaves(), beneath the region variable and before the provided console.log() statement, create an if statement that checks if the region is the 'The Arctic'.

//2.Inside the if block, define a new let variable lightWaves and set it equal to 'Northern Lights'.

//3.Beneath the variable in the if block, use console.log() to log the value of the block variable inside the if block.

//Run your code and notice the output. Inside the if block console.log(lightWaves) logs the value Northern Lights to the console. Outside the if block, but still within the function, the same statement logs Moonlight to the console.


const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    // Add if statement here:
    if (region === 'The Arctic'){
      let lightWaves = 'Northern Lights'
      console.log(lightWaves)
    }
  
    console.log(lightWaves);
};
  
logVisibleLightWaves();
