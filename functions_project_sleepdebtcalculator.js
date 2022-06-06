// Sleep Debt Calculator Project

//1.The first problem to solve is determining how many hours of sleep you got each night of the week.

//You can create a function that returns any given night’s number of hours of rest. Instead of writing seven different functions (one for each day of the week), let’s write one function with a parameter for the day.

//Create a function named getSleepHours with a single parameter named day.

function getSleepHours(day) {
  
}


//2.The function should accept a day as an argument and return the number of hours you slept that night.

//For instance, if you got 8 hours of sleep on Monday night, calling getSleepHours('monday') should return 8.

//Use an if/else or switch statement to implement this.

function getSleepHours(day) {
    if (day === 'monday') {
      return Number(8)
    } else if (day === 'tuesday') {
      return Number(8)
    } else if (day === 'wednesday') {
      return Number(8)
    } else if (day === 'thursday') {
      return Number(8)
    } else if (day === 'friday') {
      return Number(8)
    } else if (day === 'saturday') {
      return Number(8)
    } else if (day === 'sunday') {
      return Number(8)
    } else {
      console.log('Input valid day')
    }
}
  
  
//3.Test the function by calling it multiple times and printing the results to the console.

//You can remove the tests when you know your function works.

getSleepHours('monday')


//4.Now that you’ve written a function to get the sleep hours for each night, we need to do three things:

//Get the total sleep hours that you actually slept
//Get the ideal sleep hours that you prefer
//Calculate the sleep debt, if any.
//To get the total sleep hours that you actually slept, create a new function named getActualSleepHours that takes no parameters.

function getActualSleepHours() {
    
}

//5.Inside the getActualSleepHours() function, call the getSleepHours() function for each day of the week. Add the results together and return the sum using an implicit return.

function getActualSleepHours() {
    let totalSleepHours = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
    return totalSleepHours
}


//6.To get the ideal sleep hours that you prefer, create a function named getIdealSleepHours with no parameters.

//Inside the function, declare a variable named idealHours and set its value to your ideal hours per night. Then return the idealHours multiplied by 7.

//You’ll want to multiply by 7 to get the total hours you prefer per week.

function getIdealSleepHours() {
    let idealHours = 7.5 * 7
    return idealHours
}


//7.Test your two new functions by calling them and printing the results to the console.

//You can remove the tests when you know your functions works.

console.log(getActualSleepHours())
console.log(getIdealSleepHours())


//8.Now that you can get the actual sleep hours and the ideal sleep hours, it’s time to calculate sleep debt.

//Create a function named calculateSleepDebt with no parameters.

//Inside of its block, create a variable named actualSleepHours set equal to the getActualSleepHours() function call.

//Then, create another variable named idealSleepHours, set equal to the getIdealSleepHours() function call.

function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours()
    let idealSleepHours = getIdealSleepHours()
}

//9.  Now that you have actualSleepHours and idealSleepHours, you can write a few if/else statements to output the result to the console. The function should fulfill this logic:

//If actual sleep equals ideal sleep, log to the console that the user got the perfect amount of sleep.
//If the actual sleep is greater than the ideal sleep, log to the console that the user got more sleep than needed.
//If the actual sleep is less than the ideal sleep, log to the console that the user should get some rest.

function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours()
    let idealSleepHours = getIdealSleepHours()
  
    if (actualSleepHours === idealSleepHours) {
      console.log('Yay! You have the perfect amount of sleep.' )
    } else if (actualSleepHours > idealSleepHours) {
      console.log('Congrats! You got more sleep than needed.')
    } else if (actualSleepHours < idealSleepHours) {
      console.log('You need to get more sleep!')
    }
}
  
calculateSleepDebt()


//10.To make this calculator more helpful, add the hours the user is over or under their ideal sleep in each log statement in calculateSleepDebt().

function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours()
    let idealSleepHours = getIdealSleepHours()
    let sleepDebt = actualSleepHours - idealSleepHours
  
    if (actualSleepHours === idealSleepHours) {
      console.log('Yay! You have the perfect amount of sleep.')
      console.log(`Your sleep debt is ${sleepDebt} hours.`)
    } else if (actualSleepHours > idealSleepHours) {
      console.log('Congrats! You got more sleep than needed.')
      console.log(`Your sleep debt is 0 and your surplus is ${sleepDebt} hours.`)
    } else if (actualSleepHours < idealSleepHours) {
      console.log('You need to get more sleep!')
      console.log(`Your sleep debt is ${sleepDebt} hours.`)
    }
}
  
calculateSleepDebt()

