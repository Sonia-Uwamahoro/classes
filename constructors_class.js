
// Question 1

// 1) Create a Car class or function constructor that has the following properties:
// a. make (string): The make of the car, e.g., "Toyota".
// b. model (string): The model of the car, e.g., "Camry".
// c. year (number): The year the car was manufactured, e.g., 2020.
// d. isAvailable (boolean): Indicates if the car is currently available for rent.
// The Car class or function constructor should also have a method called
// toggleAvailability that changes the isAvailable property to its opposite value (true to
// false, false to true)


class Car{
    constructor(make, model, year, isAvailable){
       this.make = make;
       this.model = model;
       this.year = year;
       this.isAvailable = isAvailable
    }

    toggleAvailability(){
        let changes = this.isAvailable=!this.isAvailable
        console.log(changes)
    }
}
let car = new Car('Toyota', 'Camry', 2020, true)
console.log({car});
car.toggleAvailability();



// Create a Rental class or function constructor that has the following properties:
// ● car (Car object): The car that has been rented.
// ● renterName (string): The name of the person who rented the car.
// ● rentalStartDate (Date object): The start date of the rental period.
// ● rentalEndDate (Date object): The end date of the rental period.
// The Rental class or function constructor should also have a method called
// calculateRentalDuration that returns the rental duration in days.


class Rental extends Car{
    constructor(make, model, year, isAvailable, renterName, rentalStartDate, rentalEndDate){
        super(make, model, year, isAvailable);
        this.renterName = renterName
        this.rentalStartDate = rentalStartDate
        this.rentalEndDate = rentalEndDate
    }
        calculateRentalDuration(){
        const duration = 86400000;
        const rentalDuration = this.rentalEndDate - this.rentalStartDate;
        return Math.round(rentalDuration / duration);

    }
}

let rental = new Rental(car,'James', new Date('2024-01-02'), new Date('2029-09-09'))
const rentalDurationInDays = rental.calculateRentalDuration();
console.log(rentalDurationInDays);



// Question 2

// Create a Question class with the following properties:
// ● text(string): The text of the question.
// ● options(array): An array containing the multiple-choice options.
// ● correctAnswer(string): The correct answer to the question.
// The Question class should also have a method called checkAnswer that takes a
// user's answer as a parameter and returns true if the answer is correct and false
// otherwise.


class Question{
    constructor(text,option,correctAnswer){
        this.text = text;
        this.option = option;
        this.correctAnswer = correctAnswer;
    }
    checkAnswer(TrueAnswer){
        TrueAnswer = 15;
        return TrueAnswer === this.correctAnswer;
    }
}
let question = new Question("How many day in a week",[1,2,3,4,5,6,7],7)
console.log({question})
question.checkAnswer()


// Create a Quiz class with the following properties:
// ● questions(array):An array of Question objects.
// ● currentQuestionIndex(number): The index of the current question in the
// questions array.
// ● score(number): The user’s current score.
// The Quiz class should have the following methods:



class Quiz{
  constructor(questions, currentQuestionIndex, score){
    this.questions = questions;
    this.currentQuestionIndex = currentQuestionIndex;
    this.score = score
  }

    addQuestion(question) {
      this.questions.push(question);
      console.log(question);
    }

    nextQuestion() {
      this.currentQuestionIndex ++;
    }
      
    submitAnswer(userAnswer) {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      if (currentQuestion.checkAnswer(userAnswer)) {
        this.score++;
      }
    }
}
let quiz = new Quiz([11,22,33,44,55], 1, 100);
quiz.addQuestion(90)
quiz.nextQuestion();
// quiz.submitAnswer();
console.log({quiz});
