// TODO: add function to create pages dynamically
const questions = [
  {
    question: "Q1: Do we have a leadership?",
    options: ["yes", "no"],
    correctAnswer: 1,
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
let nextBtn = document.getElementById("next")
//let qcont = getElementsByClassName("quest-container");

function createQuestion(){
    for (let i=0; i<questions[currentInteger].options.length;i++){
        document.forms.radios.elements.option[i].checked=false;
        createOptions(i);
    }
    let quest=document.getElementById("quest");
    quest.textContent=questions[currentInteger].question;
    let scoreEl = document.getElementById("score");
    scoreEl.textContent="score: "+score
}
function createOptions(i){
  const option = questions[currentInteger].options[i];
  const input = document.querySelector(`[value = "${i}"]`);
  input.dataset.status= "visible";
  
if (input.dataset.status = "visible") {
  input.setAttribute("style", "display: inline");
} 
  input.nextSibling.textContent = option
}
createQuestion()
function clickHandler(event){
  event.preventDefault()
  const correctAns = questions[currentInteger].correctAnswer;
  const inputEl = document.getElementsByTagName("input");
  for (let i=0; i<inputEl.length;i++){
    console.log(correctAns)
    if (inputEl[i].checked){
      if (inputEl[i].value == correctAns){
        score++
      } else{
        score--
      }
     }// else {
    //   qcont.dataset.status = "hidden"
    //   if (qcont.dataset.status == "hidden"){}
    //     qcont.setAttribute("style", "display: hidden");
    // }
  }
  currentInteger++
  createQuestion()
}
nextBtn.addEventListener("click", clickHandler)

