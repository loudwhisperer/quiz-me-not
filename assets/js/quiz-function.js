// TODO: add function to create pages dynamically
const questions = [
  {
    question: "Q1: Do we have a leadership?",
    options: ["yes", "no"],
    corectAnswer: 0,
  },
  {
    question: "Q2: What designation does a field agent have?",
    options: ["seeker", "informant", "networker"],
    correctAnswer: 0,
  },
  {
    question: "Q3: What designation does a information gatherer have?",
    options: ["seeker", "informant", "networker"],
    correctAnswer: 1,
  },
  {
    question: "Q4: What designation does someone who forms connections for the project have?",
    options: ["seeker", "informant", "networker"],
    correctAnswer: 2,
  },
];
let score = 0;
let currentInteger = 0;
let chosenOptions= [];

const createQuestion = () =>{
    for (let i=0; i<questions[this.currentNumber].options.length;i++){
        document.forms.radios.elements.option[i].checked=false;
    }
    let question=document.getElementById("question");
    question.innerHTML
}


