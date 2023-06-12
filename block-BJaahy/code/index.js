// # More about class

// - Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.

class Square  {
   constructor(side){
    this.width=side
    this.height =side
   }
}

// - Add a method name `description` that will alert a message saying `The square is ${width} x ${height}`

class Square  {
    constructor(side){
     this.width=side
     this.height =side
    }

    description(){
        alert `The square is ${this.width} x ${this.height}`
    }
 }

// - Create a method inside the class named `calcArea` that will return the area of the square.

class Square  {
    constructor(side){
     this.width=side
     this.height =side
    }

    description(){
        alert `The square is ${this.width} x ${this.height}`
    }
     
    calcArea(){
        return this.width*this.height
    }

 }


// - Create a `area` getter method using which we can get the area of the square.

class Square  {
    constructor(side){
     this.width=side
     this.height =side
    }

    description(){
        alert `The square is ${this.width} x ${this.height}`
    }
     
    calcArea(){
        return this.width*this.height
    }

    get area(){
       return  this.width*this.height
    }

 }


// - Create a `area` setter method that will accept the area of the square. Based on the value of area it will set the value of `width` and `height`. If the passed value is not the area of the square alert say `Not a valid input`

class Square  {
    constructor(side){
     this.width=side
     this.height =side
    }
                                                                                
    description(){
        alert `The square is ${this.width} x ${this.height}`
    }
                                                                                       
    calcArea(){
        return this.width*this.height
    }

    set area(value){
        let side = Math.sqrt(value)
        if(String(side).includes(".")) {
           return "Not a valid input"
         }else{
            this.width=side
            this.height=side
         }
    }
                                                                                              
    get area(){
       return  this.width*this.height
    }
                                                                                                         
 }


// - Create a static method named `isEqual` which accepts two `square` object with `width` and `height` property. If the area of both square is same it will return `true` or `false`.

class Square  {
    constructor(side){
     this.width=side
     this.height =side
    }
                                                                                
    description(){
        alert `The square is ${this.width} x ${this.height}`
    }
                                                                                       
    calcArea(){
        return this.width*this.height
    }

    static isEqual (a ,b){
       return (a.width*a.height)===(b.width*b.height)
    }

    set area(value){
        let side = Math.sqrt(value)
        if(String(side).includes(".")) {
           return "Not a valid input"
         }else{
            this.width=side
            this.height=side
         }
    }
                                                                                              
    get area(){
       return  this.width*this.height
    }
                                                                                                         
 }


// - Create another property named `numberOfTimes` that will hold the value of number of times the area property is accessed from the object. The values will initialize to `0`. The area property can't be accessed more than 4 times. If it crosses 4 times alert message `Upper Limit Reached`


class Square  {
    constructor(side){
     this.width=side
     this.height =side
     this.numberOfTimes=0
    }
                                                                                
    description(){
        alert `The square is ${this.width} x ${this.height}`
    }
                                                                                       
    calcArea(){
        return this.width*this.height
    }

    static isEqual (a ,b){
       return a.area===b.area
    }

    set area(value){
        let side = Math.sqrt(value)
        if(String(side).includes(".")) {
           return "Not a valid input"
         }else{
            this.width=side
            this.height=side
         }
    }
                                                                                              
    get area(){
        this.numberOfTimes++
        if(this.numberOfTimes<=4){
            return  this.width*this.height
        }else{
          alert `Upper Limit Reached`  
        }
      
    }
                                                                                                         
 }

// - Create two instance of the `Square` class

// let square1 = new Square(200)
// let square2 = new Square(400)



// - Check the `area` getter method on both square. Check the `area` property on one square more than 4 times.
square1.area // 40000
square1.area // 40000
square1.area // 40000
square1.area // 40000
square1.area // undefined

square2.area // 160000
square2.area // 160000
square2.area // 160000
square2.area // 160000
square2.area // undefined

// - Check the `isEqual` method and pass the two instance you created above.

// let square1 = new Square(200)
// let square2 = new Square(400)

Square.isEqual(square1,square2)//false

// let square1 = new Square(200)
// let square2 = new Square(200)
Square.isEqual(square1,square2)//true


// ## User Class

// - Create a `User` class that accepts `firstName` and `lastName` property

class User {
    constructor(firstName,lastName){
        this.firstName=firstName
        this.lastName=lastName
    }


}

// - Create a getter method named `fullName` that will return the full name of the person.

class User {

    constructor(firstName,lastName){
        this.firstName=firstName
        this.lastName=lastName
    }
    
    get fullName(){
       return `${this.firstName} ${this.lastName}`
    }

}


// - Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`

class User {

    constructor(firstName,lastName){
        this.firstName=firstName
        this.lastName=lastName
    }
    
    get fullName(){
       return `${this.firstName} ${this.lastName}`
    }

    set fullName(personName){

        if(personName.length<5){
            alert `Full name should be more than 5 characters`
        }else{
            let firstName = personName.split(' ')[0];
            let lastName = personName.split(' ')[1];
            this.firstName=firstName
            this.lastName=lastName
        }
      
    }

}

// - Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.

class User {

    constructor(firstName,lastName){
        this.firstName=firstName
        this.lastName=lastName
    }

    nameContains(str){
       return `${this.firstName} ${this.lastName}`.includes(str)
    }
    
    get fullName(){
       return `${this.firstName} ${this.lastName}`
    }

    set fullName(personName){

        if(personName.length<5){
            alert `Full name should be more than 5 characters`
        }else{
            let firstName = personName.split(' ')[0];
            let lastName = personName.split(' ')[1];
            this.firstName=firstName
            this.lastName=lastName
        }
      
    }

}

// - Create two instance of the `User` class

let person1= new User("Himanshu" , "Rajpoot")
let person2= new User("Rahul" , "Sharma")

// - Check by using the `fullName` setter method with name bigger than 5 characters.

person1.fullName="Arya Stark" // 'Arya Stark'

// - Check by using the `fullName` setter method with name less than 5 characters.

person1.fullName="Arya" // `Full name should be more than 5 characters`

// - Check the `fullName` using getter

person1.fullName//'Arya Stark'

// - Check the `nameContains` method

person1.nameContains("Ar")//true
person1.nameContains("Ar00999")//false
