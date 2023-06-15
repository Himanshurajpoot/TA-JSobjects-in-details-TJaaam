// # Inheritance

// Convert the below requirements into inheritance using:

// - Pseudoclassical Pattern
// - Class Pattern

// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`





// - Pseudoclassical Pattern

function CreateAnimal(location,numberOfLegs){
    this.location=location
    this.numberOfLegs=numberOfLegs
}

CreateAnimal.prototype={
    eat(){
      console.log(`I live in ${this.location} and I can eat`)  
    },

    changeLocation(newLocation){
      this.location=newLocation
      return this.location
    },

    summmary(){
     return  `I live in ${this.location} and I have ${this.numberOfLegs}`
    }
}



// - Class Pattern

class Animal{
    constructor(location,numberOfLegs){
        this.location=location
        this.numberOfLegs=numberOfLegs
    }

    eat(){
        console.log(`I live in ${this.location} and I can eat`)  
      }
  
    changeLocation(newLocation){
        this.location=newLocation
        return this.location
      }
  
    summmary(){
       return  `I live in ${this.location} and I have ${this.numberOfLegs}`
      }
}

// #### Dog

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `color`

// Methods:

// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`



// - Pseudoclassical Pattern
function CreateDog(location,numberOfLegs,name,color){
 CreateAnimal.apply(this,[location,numberOfLegs])
 this.name=name
 this.color=color

}

CreateDog.prototype={
    bark(){
        alert (`I am ${this.name} and I can bark 🐶`)
    },

    changeName(newName){
        this.name=newName
        return this.name
    },

    changeColor(newColor){
        this.color=newColor
        return this.color
    },
    
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}

Object.setPrototypeOf(CreateDog.prototype,CreateAnimal.prototype)


// - Class Pattern

class Dog extends Animal{
    constructor(location,numberOfLegs,name,color){
       super(location,numberOfLegs)
       this.name=name
       this.color=color
    }

    bark(){
        alert (`I am ${this.name} and I can bark 🐶`)
    }

    changeName(newName){
        this.name=newName
        return this.name
    }

    changeColor(newColor){
        this.color=newColor
        return this.color
    }

    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}

// #### Cat

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `colorOfEyes`

// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the dog

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`



// - Pseudoclassical Pattern
function CreateCat(location,numberOfLegs,name,colorOfEyes){
    CreateAnimal.apply(this,[location,numberOfLegs])
    this.name=name
    this.colorOfEyes=colorOfEyes
   
   }
   
   CreateCat.prototype={
    meow(){
        alert (`I am ${this.name} and I can do mewo meow 😹`)
    },

    changeName(newName){
        this.name=newName
        return this.name
    },

    changeColorOfEyes(newColor){
        this.colorOfEyes=newColor
        return this.colorOfEyes
    },

    summary(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }
   }
   
   Object.setPrototypeOf(CreateCat.prototype,CreateAnimal.prototype)


// - Class Pattern

class Cat extends Animal{
    constructor(location,numberOfLegs,name,colorOfEyes){
       super(location,numberOfLegs)
       this.name=name
       this.colorOfEyes=colorOfEyes
    }

    meow(){
        alert (`I am ${this.name} and I can do mewo meow 😹`)
    }

    changeName(newName){
        this.name=newName
        return this.name
    }

    changeColorOfEyes(newColor){
        this.colorOfEyes=newColor
        return this.colorOfEyes
    }

    summary(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }
}

console.log("hello console")