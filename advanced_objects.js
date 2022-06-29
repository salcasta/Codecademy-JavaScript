//ADVANCED OBJECTS

//The this Keyword

const robot = {
  
}

//1.Let’s create a new object to practice using this.

//In main.js there is an object robot, add a property of model and assign to it a value of '1E78V2'. Add another property, energyLevel and assign to it a value of 100.

const robot = {
    model: '1E78V2',
    energyLevel: 100
};

//2.Inside the robot object, add a method named provideInfo. Inside the body of provideInfo(), return the following string by using interpolation:

//I am MODEL and my current energy level is ENERGYLEVEL.  
//Replace ‘MODEL’ and ‘ENERGYLEVEL’ with the calling object’s model and energyLevel property. Remember, to get the access to the calling object’s properties inside a method, you have to use the this keyword!

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
};

//3.Now to check .provideInfo() has access to the internal properties of robot. Log the result of calling .provideInfo() method on robot to the console.

console.log(robot.provideInfo())


//Arrow Functions and this

const robot = {
    energyLevel: 100,
    checkEnergy: () => {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
}
  
robot.checkEnergy();

//1.Currently the .checkEnergy() method is not producing the correct output because it is using arrow function syntax.

//Refactor, or change, the method to use a function expression. You can write the function using either longhand or shorthand format.

//After refactoring the method, notice that .checkEnergy() has access to the other internal properties of the robot object.

const robot = {
    energyLevel: 100,
    checkEnergy() {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
}
  
console.log(robot.checkEnergy())


//Privacy

const robot = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
};

//1.Below the robot object, reassign the _energyLevel property to 'high'.

const robot = {
    _energyLevel: 'high',
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
};

//2.Now take a look at the new recharge method in robot. .recharge() will add 30 to _energyLevel.

//What will happen now that _energyLevel isn’t a number?

//Call .recharge() on robot to find out.

//Notice that a funky string is printed to the console! This is known as a side-effect of type-coercion. No need to worry about what this means for now, but it’s important to understand that you can cause unwanted side-effects when mutating objects and their properties.

const robot = {
    _energyLevel: 'high',
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
};
  
robot.recharge()


//Getters

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    
};


//1.In robot, create a getter method named energyLevel using the get keyword. Leave function body blank for now.

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
      
    }
};
  

//2.Inside the getter method, add an if statement to check if this._energyLevel is a number using the typeof operator. If that condition is truthy, return 'My current energy level is ENERGYLEVEL'. Replace ENERGYLEVEL with the value of this._energyLevel.

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
      if(typeof this._energyLevel === 'number') {
        return 'My current energy level is ' + this._energyLevel
      } 
    }
}
  

//3.If this._energyLevel isn’t a number it could be that the _energyLevel property was altered. Let’s add a default return statement for when such a scenario arises.

//Add an else statement that returns 'System malfunction: cannot retrieve energy level'.


const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
      if(typeof this._energyLevel === 'number') {
        return 'My current energy level is ' + this._energyLevel
      } else {
        return 'System malfunction: cannot retrieve energy level'
      }
    }
}
  
//4.Log the result of calling the getter method energyLevel on robot to the console.

//Notice that the method will return a formatted response rather than just accessing a property!

console.log(robot.energyLevel)


//Setters

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    
};

//1.Currently, in robot there is a getter method for numOfSensors but no setter method! What if we need to add or remove some sensors? Let’s fix that problem.

//Add a setter method named numOfSensors using the set keyword. Provide a parameter of num. Leave the function body empty for now.

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    
  }
};


//2.There are a couple of things we should do in the setter method:

//Add a check to see if num is a number using the typeof operator.
//num should also be greater than or equal to 0.
//If both conditions are met, reassign this._numOfSensors to num.

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0 ){
      return this._numOfSensors = num
    }
  }
};


//3.Now add an else that logs 'Pass in a number that is greater than or equal to 0' to the console.

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0 ){
      return this._numOfSensors = num
    } else {
      console.log('Pass in a number that is greater than or equal to 0')
    }
  }
};



//4.Use the numOfSensors setter method on robot to assign _numOfSensors to 100.

robot.numOfSensors = 100

//5.To check that the setter method worked, console.log() robot.numOfSensors.

console.log(robot.numOfSensors)


//Factory Functions

//1.Instead of making individual robots like we’ve been doing, let’s make a factory function to make robots as we please!

//Create a factory function named robotFactory that has two parameters model and mobile. Make the function return an object. In the object, add a key of model with the value of the model parameter. Add another property that has a key of mobile with a value of the mobile parameter.

//Then add a method named beep without a parameter that will log 'Beep Boop' to the console.

const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop')
    }
  }
}


//2.Use your factory function by declaring a const variable named tinCan. Assign to tinCan the value of calling robotFactory with the first argument of 'P-500' and the second argument of true.

const tinCan = robotFactory('P-500', true)

//3.Let’s now check what tinCan can do! Call .beep() on tinCan.

//You should see 'Beep Boop' printed to the console which means the factory function produced a robot object! Play around with tinCan to check the other properties!

tinCan.beep()
console.log(tinCan.model)
console.log(tinCan.mobile)




//Property Value Shorthand

function robotFactory(model, mobile){
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

//1.Use the property value shorthand and refactor the factory function in main.js

function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}


//Destructured Assignment

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};


//1.Use destructured assignment to create a const variable named functionality that extracts the functionality property of robot.

//If you need a reminder on how to use destructured assignment, review the example in the narrative or check the hint.

const { functionality } = robot

//2.Since functionality is referencing robot.functionality we can call the methods available to robot.functionality simply through functionality.

//Take advantage of this shortcut and call the .beep() method on functionality.

functionality.beep()



//Built-in Object Methods

const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys();

console.log(robotKeys);

// Declare robotEntries below this line:


console.log(robotEntries);

// Declare newRobot below this line:


console.log(newRobot);


//1.In main.js there is an object, robot. We’d like to grab the property names, otherwise known as keys, and save the keys in an array which is assigned to robotKeys. However, there’s something missing in the method call.

const robotKeys = Object.keys(robot)

console.log(robotKeys)

//2.Object.entries() will also return an array, but the array will contain more arrays that have both the key and value of the properties in an object.

//Declare a const variable named robotEntries and assign to it the entries of robot by calling Object.entries().

const robotEntries = Object.entries(robot)

console.log(robotEntries)

//3.Declare a const variable named newRobot. newRobot will be a new object that has all the properties of robot and the properties in the following object: {laserBlaster: true, voiceRecognition: true}. Make sure that you are not changing the robot object!

const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot)

console.log(newRobot);

