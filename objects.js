//Objects


//Creating Object Literals

//1.The spaceship we have so far looks good but, unfortunately, is not very fast at hyperspace travel due to having an inferior fuel source. Make a new spaceship object named fasterShip with the same color as spaceship but with a Fuel Type equal to 'Turbo Fuel'.

let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
}


//Accessing Properties

let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};

//1.Let’s use the dot operator to access the value of numCrew from the spaceship object in the code editor. Create a variable crewCount and assign the spaceship‘s numCrew property to it.

let crewCount = spaceship.numCrew


//2.Again using the dot operator, create a variable planetArray and assign the spaceship‘s flightPath property to it.

let planetArray = spaceship.flightPath



//Bracket Notation

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
};
  
let propName =  'Active Mission';

//1.Let’s use bracket notation to access the value of 'Active Mission' from the spaceship object in the code editor. Create a variable isActive and assign the spaceship‘s 'Active Mission' property to it.


let isActive = spaceship['Active Mission']

//2.Using bracket notation and the propName variable provided, console.log() the value of the 'Active Mission' property.

console.log(spaceship[propName])


//Property Assignment

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
};
  

//1.Reassign the color property of the spaceship object to have a value of 'glorious gold'

spaceship.color = 'glorious gold'

//2.Without changing lines 1 - 6, add a numEngines property with a numeric value between 1 and 10 to the spaceship object.

spaceship.numEngines = 6

//3.Use the delete operator to remove the 'Secret Mission' property from the spaceship object.

delete spaceship['Secret Mission']


//Methods

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';


//1.Below the retreatMessage variable in the code editor, create an alienShip object. It should contain a method .retreat() which will console.log() the retreatMessage.

let alienShip = {
    retreat () {
      console.log(retreatMessage)
    }
}

//2.Add another method to your object literal. This method, .takeOff(), should console.log() the string 'Spim... Borp... Glix... Blastoff!'.

let alienShip = {
    retreat () {
      console.log(retreatMessage)
    },   //Notice the comma
    takeOff () {
      console.log('Spim... Borp... Glix... Blastoff!')
    }
}
  

//3.Invoke your two methods: first .retreat() then .takeOff().

alienShip.retreat()
alienShip.takeOff()


//Nested Objects

let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
}; 
  

//1.Create a variable capFave and assign the captain‘s favorite food (the element in the 0th index of her 'favorite foods' array) to it. Make sure to use bracket and dot notation to get the value of the food through nested access (don’t just copy the value into the variable!)

let capFave = spaceship.crew.captain['favorite foods'][0]

//2.Right now the passengers property has a value of null. Instead, assign as its value an array of objects. These objects should represent the spaceship‘s passengers as individual objects. Make at least one passenger object in the array that has at least one key-value pair on it.

let spaceship = {
    passengers: [{name: 'Space Dog'}], 
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    }.....
}

//3.Create a variable firstPassenger and assign the first passenger as its value (the element in the 0th index of the spaceship.passengers array you just made). Make sure to use bracket and dot notation to get the passenger object through nested access (don’t just copy the object into the variable!)

let firstPassenger = spaceship.passengers[0]


//Pass By Reference

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
};

//1.Write a function greenEnergy() that has an object as a parameter and sets that object’s 'Fuel Type' property to 'avocado oil'.

let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil'
}

//2.Write a function remotelyDisable() that has an object as a parameter and sets (or reassigns) that object’s disabled property to true.

let remotelyDisable = obj => {
    obj.disabled = true
}
  
//3.Call your two functions with the spaceship object in the code editor, then console.log() the spaceship object to confirm those properties were changed/added.

greenEnergy(spaceship);

remotelyDisable(spaceship);

console.log(spaceship)


//Looping Through Objects

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

//1.Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew roles and names in the following format: '[crew member's role]: [crew member's name]', e.g.,'chief officer: Dan'.

for (let crewMember in spaceship.crew) {
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
}

//2.Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew names and degrees in the following format: '[crew member's name]: [crew member's degree]', i.e.,'Lily: Computer Engineering'.

for (let crewMember in spaceship.crew) {
    console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
}
