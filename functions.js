//Functions

//Function Declarations

//1.Let’s create a function that prints a reminder to the console. Using a function declaration, create a function called getReminder().

function getReminder() {

}
 

//2.In the function body of getReminder(), log the following reminder to the console: 'Water the plants.'

function getReminder() {
    console.log('Water the plants.')
}

//3.Let’s create another function that prints a useful Spanish travel phrase to the console.

//Using a function declaration, create a function called greetInSpanish().

function greetInSpanish() {
    
}

//4.Add code to the function body of greetInSpanish():

//In the function body console.log() the following Spanish phrase to the console: 'Buenas Tardes.'

function greetInSpanish() {
    console.log('Buenas Tardes.')
}


//Calling a Function

//1.Imagine that you manage an online store. When a customer places an order, you send them a thank you note. Let’s create a function to complete this task:

//Define a function called sayThanks() as a function declaration.
//In the function body of sayThanks(), add code such that the function writes the following thank you message to the console when called: 'Thank you for your purchase! We appreciate your business.'

function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.')
}

//2.Call sayThanks() to view the thank you message in the console.

sayThanks()

//3.Functions can be called as many times as you need them.

//Imagine that three customers placed an order and you wanted to send each of them a thank you message. Update your code to call sayThanks() three times.

sayThanks()
sayThanks()
sayThanks()


//Parameters and Arguments

//1.The sayThanks() function works well, but let’s add the customer’s name in the message.

//Add a parameter called name to the function declaration for sayThanks().

function sayThanks(name) {

}

//2.With name as a parameter, it can be used as a variable in the function body of sayThanks().

//Using name and string concatenation, change the thank you message into the following:

//'Thank you for your purchase '+ name + '! We appreciate your business.'
//Copy and paste the above message into your code.

function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}


//3.A customer named Cole just purchased something from your online store. Call sayThanks() and pass 'Cole' as an argument to send Cole a personalized thank you message.

sayThanks('Cole')


//Default Parameters

//1.The function makeShoppingList() creates a shopping list based on the items that are passed to the function as arguments.

//Imagine that you always purchase milk, bread, and eggs every time you go shopping for groceries. To make creating a grocery list easier, let’s assign default values to the parameters in makeShoppingList().

//Change the parameters of makeShoppingList() into default parameters :

//Assign ‘milk’ as the default value of item1.
//Assign ‘bread’ as the default value of item2.
//Assign ‘eggs’ as the default value of item3.

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}


//Helper Functions

//1.In the previous exercise, we created a function to find the number of monitors to order for an office. Now let’s write another function that uses the monitorCount function to figure out the price.

//Below monitorCount Create a function declaration named costOfMonitors that has two parameters, the first parameter is rows and the second parameter is columns. Leave the function body empty for now.

function monitorCount(rows, columns) {
    return rows * columns;
}


//2.Time to add some code to the function body of costOfMonitors to calculate the total cost.

//Add a return statement that returns the value of calling monitorCount(rows, columns) multiplied by 200.

function costOfMonitors (rows, columns) {
    return monitorCount(rows, columns) * 200
}

//3.We should save the cost to a variable.

//Declare a variable named totalCost using the const keyword. Assign to totalCost the value of calling costOfMonitors() with the arguments 5 and 4 respectively.

const totalCost = costOfMonitors(5,4)

//4.To check that the function worked properly, log totalCost to the console.

console.log(totalCost)


//Function Expressions

//1.Let’s say we have a plant that we need to water once a week on Wednesdays. We could define a function expression to help us check the day of the week and the plant needs to be watered:

//Create a variable named plantNeedsWater using the const variable keyword.
//Assign an anonymous function that takes in a parameter of day to plantNeedsWater.

const plantNeedsWater = function(day) {
  
}

//2.Now we need to add some code to the function body of plantNeedsWater():

//In the function body add an if conditional that checks day === 'Wednesday'.
//If the conditional is truthy, inside the if code block, use the return keyword to return true.

const plantNeedsWater = function(day) {
    if (day === 'Wednesday') {
      return true
    }
}

//3.On days that aren’t 'Wednesday', plantNeedsWater() should return false:

//Add an else statement after the if statement.
//Inside the else statement use the return keyword to return false.

const plantNeedsWater = function(day) {
    if (day === 'Wednesday') {
      return true
    }else {
       return false 
    }
}

//4.Call the plantNeedsWater() and pass in 'Tuesday' as an argument.

plantNeedsWater('Tueday')

//5.Let’s check that plantNeedsWater() returned the expected value.

//Log plantNeedsWater('Tuesday') to the console. If it worked correctly, you should see false logged to the console.

console.log(plantNeedsWater('Tuesday'))


//Arrow Functions

//1.Change plantNeedsWater() to use arrow function syntax.

const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
};



//Concise Body Arrow Functions

//1.Let’s refactor plantNeedsWater() to be a concise body. Notice that we’ve already converted the if/else statement to a ternary operator to make the code fit on one line.

const plantNeedsWater = day => day === 'Wednesday' ? true : false;
