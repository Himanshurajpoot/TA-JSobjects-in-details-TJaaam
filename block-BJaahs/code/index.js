
// question -1

// Create a function name createUser that accepts name and age and returns an object with multiple properties and methods. You can find the list below.

// name (it will contain the value coming from argument)
// age
// updateName - this function will accept a new name and update the name property of the obj
// updateAge - this function will accept a new age and update the name property of the obj


// ans-1
function createUser(name, age) {
    const obj = {
        name: name,
        age: age,
        updateName(newName) {
            obj.name = newName
        },

        updateAge(newnAge) {
            obj.name = newnAge
        },
    }
    return obj
}
let createInfo = createUser("himanshu", 20)
console.group('createUser');
console.log(createInfo.name);
console.log(createInfo.age);
createInfo.updateName("love")
createInfo.updateAge(33)
console.log(createInfo.name)
console.log(createInfo.age);
console.groupEnd()


// Question -2

// Create a getBook function that accepts the title and author of the book and returns an object.

// title from parameter
// author from parameter
// getSummary function will return the message ${title} is written by ${author}

// ans-2

function getBook (title, author){
    const obj = {
        title:title,
        author:author,
      getSummary(){
       return `${obj.title} is written by ${obj.author}`
      }
    }
   return obj
}

let bookInfo = getBook("rajpoot" ,"english")
console.log(bookInfo.getSummary())


// question-3

// If we want to build any app the two most important thing to think about is Data and Behavior. So for our quiz app let's break it down. To make a quiz app we need to create Single Question object.

// ### For single question we need the following data and methods:

// - Data:
//   - `title` (title of the question)
//   - `options` (array of options)
//   - `correctAnswerIndex` (index of the correct option)
// - Methods:
//   - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
//   - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

// ### Create the object using the following ways

// For each different ways of creating object write different solutions.

// - Without Object
// - Organize using object
// - Use a function to create object
// - Convert the function to use `this` keyword
// - Write test by creating two objects also test both methods.

// ### To test use the following data

// ```js
// const testData = {
//   title: 'Where is the capital of Jordan',
//   options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//   correctAnswerIndex: 1,
// };


// - Without Object
let title = 'Where is the capital of Jordan';
let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAnswerIndex = 1;

function isAnswerCorrect(index){
   return index === correctAnswerIndex;
}
function getCorrectAnswer (){
    return options[correctAnswerIndex];
}

// - Organize using object

let obj ={
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
     isAnswerCorrect(index){
        return index === obj.correctAnswerIndex;
     },
      getCorrectAnswer (){
         return obj.options[obj.correctAnswerIndex];
     }
}

// - Use a function to create object

function createQuestion(title,options,correctAnswerIndex){
    let obj ={
        title: title,
        options: options,
        correctAnswerIndex: correctAnswerIndex,
         isAnswerCorrect(index){
            return index === this.correctAnswerIndex;
         },
          getCorrectAnswer (){
             return this.options[this.correctAnswerIndex];
         }
    }
    return obj
}


let finalInfo = createQuestion('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1)
