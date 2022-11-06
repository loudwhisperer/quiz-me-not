// Start Object of questions to be asked 
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
//start variables calling various elements in the HTML, score: setting the score the player has, currentInteger: the question they are on and timeLeft: the amount of time on the timer  
let score = 1;
let currentInteger = 0;
let timeLeft = 10;
const nextBtn = document.getElementById("next");
const startBtn = document.getElementById("start");
const saveBtn = document.getElementById("save");
const timerEl = document.querySelector(".time");
const qcontainer = document.getElementById("quest-container");
const scoreB = document.getElementById("scoreboard");
const scoreEl = document.getElementById("score");
const finalSc = document.getElementById("final");
//hides the qcontainer
function hideqcontainer(){
  qcontainer.setAttribute("style", "display:none;");
}
//shows the qcontainer
function showqcontainer() {
  qcontainer.setAttribute("style", "display:inline;");
}
//shows the scoreB
function showScoreboard(){
  scoreB.setAttribute("style", "display:block;");
}
// hides the timer
function hideTimer(){
  timerEl.setAttribute("style", "display:none;");
}
//hides the start button
function hideStart(){
  startBtn.setAttribute("style", "display:none;");
}
//saves the final score and intials of the user to the scoreboard
function scoreKeeper(){
  let finalScore = localStorage.getItem("finalScore");
   if (!finalScore) {
     return;
   }
   const newScore = document.createElement("p");
   const newScoreCont = document.createTextNode(`${finalScore}`);
   finalSc.appendChild(newScore);
   newScore.appendChild(newScoreCont);
}
//starts and sets the timer 
function setTimer(){
  let timerInterval = setInterval(function(){
    timerEl.textContent = `Time Left for this Quiz: ${timeLeft}`;
    timeLeft--;
    if (timeLeft < 0){
      clearInterval(timerInterval);
      timerEl.textContent = "";
      hideqcontainer();
      showScoreboard();
      finalSc.textContent = `your final ${scoreEl.textContent}`;
      hideTimer()
      scoreKeeper();
    }
  }, 1000)
}
//Begin question adn option creation dynamically from the object above
function createQuestion(){
    for (let i=0; i < questions[currentInteger].options.length;i++){
        document.forms.radios.elements.option[i].checked=false;
        createOptions(i);
    }
    let quest=document.getElementById("quest");
    quest.textContent=questions[currentInteger].question;
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
//begin start button functionality
function startHandler(event){
  event.preventDefault();
  showqcontainer();
  createQuestion();
  setTimer();
  hideStart();
}
startBtn.addEventListener("click", startHandler);
//begin next button functionality
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
}
if (currentInteger === 3){
  hideqcontainer();
  showScoreboard();
  hideTimer();
  finalSc.textContent = `your final ${scoreEl.textContent}`
  scoreKeeper();
}
  currentInteger++;
  createQuestion();
}
nextBtn.addEventListener("click", clickHandler)
//begin save button functionality
function saveHandler(event){
event.preventDefault();
const newScore = document.createElement("p");
const newScoreCont = document.createTextNode(`${document.getElementById("saveCont").value} ${scoreEl.textContent}`);
finalSc.appendChild(newScore);
newScore.appendChild(newScoreCont)
let finalScore = newScore.textContent;
localStorage.setItem("finalScore", finalScore);
}

saveBtn.addEventListener("click", saveHandler);