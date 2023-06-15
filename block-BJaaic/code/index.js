// # Inheritance

// Convert the below requirements into inheritance using prototypal patters.

// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`


const animalMethods ={
    eat(){
          console.log(`I live in ${this.location} and I can eat`) 
    },

    changeLocation(newLocation){
        this.location=newLocation
        return this.location
    },

    summary(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`
    }


}


function createAnimal(location,numberOfLegs){
    const animal = Object.create(animalMethods)
    animal.location = location
    animal.numberOfLegs =numberOfLegs
    return animal
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

const dogMethods={
    bark(){
        alert (`I am ${this.name} and I can bark 🐶`)
    },

    changeName(newName){
         this.name = newName;
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


function createDog( location,numberOfLegs,name,color){
    const  animal = createAnimal(location,numberOfLegs)
    Object.setPrototypeOf(animal, dogMethods)
    animal.name=name
    animal.color=color
    return animal
}

Object.setPrototypeOf(dogMethods,animalMethods)

// #### Cat

// It will have all the properties and methods of the Animal. These are the extra properties and methods these cats will have.

// Properties:

// - `name`
// - `colorOfEyes`

// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the dog

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`

const catMethods={
    meow(){
        alert (`I am ${this.name} and I can do mewo meow 😹`)
    },

    changeName(newName){
        this.name= newName
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


function createCat(location,numberOfLegs,name,colorOfEyes){
    const aniaml = createAnimal(location,numberOfLegs)
  Object.setPrototypeOf(aniaml,catMethods)
    aniaml.name=name
    aniaml.colorOfEyes=colorOfEyes
    return aniaml
}

Object.setPrototypeOf(catMethods,animalMethods)