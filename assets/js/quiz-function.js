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
let timeLeft = 15;
let nextBtn = document.getElementById("next");
let startBtn = document.getElementById("start");
let timerEl = document.querySelector(".time");
let qcontainer = document.getElementById("quest-container");
let scoreB = document.getElementById("scoreboard");


function hideqcontainer(){
  qcontainer.setAttribute("style", "display:none;");
}


function showqcontainer() {
  qcontainer.setAttribute("style", "display:block;");
}

function showScoreboard(){
  scoreB.setAttribute("style", "display:block;");
}

function hideTimer(){
  timerEl.setAttribute("style", "display:none;");
}

function hideStart(){
  startBtn.setAttribute("style", "display:none;");
}



function setTimer(){
  let timerInterval = setInterval(function(){
    timerEl.textContent = `Time Left for this Question: ${timeLeft}`;
    timeLeft--;
    if (timeLeft < 0){
      clearInterval(timerInterval);
      timerEl.textContent = "";
      hideqcontainer();
      showScoreboard();
      hideTimer()
    }
  }, 1000)
}

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
  input.nextSibling.textContent = option;
}

hideqcontainer();

function startHandler(event){
  event.preventDefault();
  showqcontainer();
  createQuestion();
  setTimer();
  hideStart();
}
startBtn.addEventListener("click", startHandler);

function clickHandler(event){
  event.preventDefault()
  const correctAns = questions[currentInteger].correctAnswer;
  const inputEl = document.getElementsByTagName("input");
  for (let i=0; i<inputEl.length;i++){
    if (inputEl[i].checked){
      if (inputEl[i].value == correctAns){
        score++
      } else{
        score--
        timeLeft--
      }
      }
  currentInteger++
  createQuestion()
}
}
nextBtn.addEventListener("click", clickHandler)

