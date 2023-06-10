
// this is a question-----------------

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

// - Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)
// - Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)
// - Create using class
// - Write test by creating two objects also test both methods.

// ### To test use the following data

// You can use the data given below. You will also have to change the name of the function while calling them.

// ```js
// let firstQuestion = new Question(
//   'Where is the capital of Jordan',
//   ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//   1
// );
// let secondQuestion = new Question(
//   'Where is the capital of Jamaica',
//   ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//   2
// // );




// this is a answer-----------


/*/ this is  Prototypal pattern /*/


// let questionMethods = {
//     isAnswerCorrect(index){
//         return index === this.correctAnswerIndex
//     },

//     getCorrectAnswer(){
//         return  this.option[this.correctAnswerIndex]
//     },


// } 


// function createQuestion(title , option ,correctAnswerIndex){
//     let question = Object.create(questionMethods)
//     question.title = title;
//     question.option = option;
//     question.correctAnswerIndex = correctAnswerIndex;
//     return question;
// }

// const questionFirst = createQuestion('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1)
// const questionSecond = createQuestion('Where is the capital of Jamaica',['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],2)
// console.log(questionFirst.getCorrectAnswer())
// console.log(questionSecond.getCorrectAnswer())
// console.log(questionSecond.isAnswerCorrect(2))


/*/ this is  Pseudoclassical Pattern /*/


// function CreateQuestion(title , option ,correctAnswerIndex){
//     this.title = title;
//     this.option = option;
//     this.correctAnswerIndex = correctAnswerIndex
// }


// CreateQuestion.prototype= {
//     isAnswerCorrect(index){
//         return index === this.correctAnswerIndex
//     },

//     getCorrectAnswer(){
//         return  this.option[this.correctAnswerIndex]
//     },


// } 


// const questionFirst = new CreateQuestion('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1)
// const questionSecond = new CreateQuestion('Where is the capital of Jamaica',['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],2)
// console.log(questionFirst.getCorrectAnswer())
// console.log(questionSecond.getCorrectAnswer())
// console.log(questionSecond.isAnswerCorrect(2))


/*/ this is  Create using class /*/

 class CreateQuestion {

    constructor(title , option ,correctAnswerIndex){
        this.title = title;
        this.option = option;
        this.correctAnswerIndex = correctAnswerIndex 

        
    }

    isAnswerCorrect (index){
        return index === this.correctAnswerIndex
    }

    getCorrectAnswer(){
        return  this.option[this.correctAnswerIndex]
    } 

}


const questionFirst = new CreateQuestion('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1)
const questionSecond = new CreateQuestion('Where is the capital of Jamaica',['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],2)
console.log(questionFirst.getCorrectAnswer())
console.log(questionSecond.getCorrectAnswer())
console.log(questionSecond.isAnswerCorrect(2))
