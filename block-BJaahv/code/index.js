
// this is a question

// # 🎖 Object Creation Patterns

// Create a object using the following patterns given below.

// ## Create in all 4 formats

// - [ ] Using function to create object
// - [ ] Using Object.create (prototypal pattern)
// - [ ] Using Pseudoclassical Way
// - [ ] Using Class

// ## Requirements

// Create User (class/function) with the following properties.

// - [ ] properties (data):
//   - [ ] name
//   - [ ] id
//   - [ ] noOfProjects
// - [ ] methods:
//   - [ ] getProjects -> return number of project
//   - [ ] changeName -> accepts one parameter (newName)returns old user name
//   - [ ] incrementProject -> returns updated number of projects
//   - [ ] decrementProject -> returns updated number of projects

// Write 2 tests for all the different ways of creating object. Test all the methods on these objects.



// this is Answer of the queston


// - [ ] Using function to create object


// function createUser (name,id,noOfProjects){
//       let user ={}
//       user.name=name
//       user.id = id
//       user.noOfProjects=noOfProjects
//       user.getProjects = function(){
//         return user.noOfProjects
//       }
//       user.changeName = function(newName){
//         let prevName = user.name
//         user.name=newName
//         return prevName
//       }
//       user.incrementProject = function(){
//         return ++user.noOfProjects
//       }

//       user.decrementProject = function(){
//         return --user.noOfProjects
//       }

//       return user
// }


// let aman = createUser("Aman","Aman123",22)
// let john = createUser("John","john34",52)

// console.group("Aman")
// console.log(aman.name)
// console.log(aman.id)
// console.log(aman.incrementProject())
// console.log(aman.decrementProject())
// console.log(aman.changeName("Sunny"))
// console.log(aman.name)
// console.groupEnd()

// console.group("John")
// console.log(john.name)
// console.log(john.id)
// console.log(john.incrementProject())
// console.log(john.decrementProject())
// console.log(john.changeName("Sunny"))
// console.log(john.name)
// console.groupEnd()


// - [ ] Using Object.create (prototypal pattern)


// let userMethods = {
//      getProjects(){
//         return this.noOfProjects
//       },
//      changeName(newName){
//         let prevName = this.name
//         this.name=newName
//         return prevName
//       },
//      incrementProject(){
//         return ++this.noOfProjects
//       },
  
//       decrementProject(){
//         return --this.noOfProjects
//       }
// }

// function createUser (name,id,noOfProjects){
//     let user =Object.create(userMethods)
//     user.name=name
//     user.id = id
//     user.noOfProjects=noOfProjects
//     return user
// }


// let aman = createUser("Aman","Aman123",22)
// let john = createUser("John","john34",52)
// console.group("Aman")

// console.log(aman.name)
// console.log(aman.id)
// console.log(aman.incrementProject())
// console.log(aman.decrementProject())
// console.log(aman.changeName("Sunny"))
// console.log(aman.name)
// console.groupEnd()

// console.group("John")
// console.log(john.name)
// console.log(john.id)
// console.log(john.incrementProject())
// console.log(john.decrementProject())
// console.log(john.changeName("Sunny"))
// console.log(john.name)
// console.groupEnd()




// - [ ] Using Pseudoclassical Way

// function CreateUser (name,id,noOfProjects){
  
//     this.name=name
//     this.id = id
//     this.noOfProjects=noOfProjects
   
//  }


//  CreateUser.prototype = {
//     getProjects(){
//        return this.noOfProjects
//      },
//     changeName(newName){
//        let prevName = this.name
//        this.name=newName
//        return prevName
//      },
//     incrementProject(){
//        return ++this.noOfProjects
//      },
 
//      decrementProject(){
//        return --this.noOfProjects
//      }
// }




// let aman = new CreateUser("Aman","Aman123",22)
// let john = new CreateUser("John","john34",52)
// console.group("Aman")

// console.log(aman.name)
// console.log(aman.id)
// console.log(aman.incrementProject())
// console.log(aman.decrementProject())
// console.log(aman.changeName("Sunny"))
// console.log(aman.name)
// console.groupEnd()

// console.group("John")
// console.log(john.name)
// console.log(john.id)
// console.log(john.incrementProject())
// console.log(john.decrementProject())
// console.log(john.changeName("Sunny"))
// console.log(john.name)
// console.groupEnd()


// - [ ] Using Class


class CreateUser{
 constructor (name,id,noOfProjects){
    this.name=name
    this.id = id
    this.noOfProjects=noOfProjects
   
 }

 getProjects(){
    return this.noOfProjects
  }
 changeName(newName){
    let prevName = this.name
    this.name=newName
    return prevName
  }
 incrementProject(){
    return ++this.noOfProjects
  }

  decrementProject(){
    return --this.noOfProjects
  }

}





let aman = new CreateUser("Aman","Aman123",22)
let john = new CreateUser("John","john34",52)
console.group("Aman")

console.log(aman.name)
console.log(aman.id)
console.log(aman.incrementProject())
console.log(aman.decrementProject())
console.log(aman.changeName("Sunny"))
console.log(aman.name)
console.groupEnd()

console.group("John")
console.log(john.name)
console.log(john.id)
console.log(john.incrementProject())
console.log(john.decrementProject())
console.log(john.changeName("Sunny"))
console.log(john.name)
console.groupEnd()