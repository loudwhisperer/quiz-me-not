# quiz-me-not

## Description
The Quiz Me Not application was motivated into existence by The Night Light Project, a fictional organization I created that accepts volunteers to help in the investigation and rescue of the paranormal and those effected by the paranormal. This Quiz tests the basic knowledge of a new recruit to see if they even paid attention during the initial brief they were given.

It solves the need to make sure new volunteers to The Night Light Project paid attention during the initial brief they were given before moving on to basic training.

Really my takeaway from this project was setting local storage isn't hard it just has to be in the right place and called at the proper time, you cannot create everything in JavaScript some things should just be put into index.html and in the style.css file, and most importantly make basic functions to add styling or other small things to elements intead of trying to get fancy with data-status un;less your using J Query and even then it would be less of a pain to just make basic functions.

The live link is as follows if you would like to give it a look : https://loudwhisperer.github.io/quiz-me-not/

## Installation
- To install Quiz Me Not simply pull the SSH Link from the bright green code button in GitHub.
- Open up your terminal on your local machine and naviage to a directory you would like to store the code for this in type git clone then paste the SSH Link and hit enter
- Once done you will have the full repo then it just a matter of changing directories to Quiz Me Not and using your preffered method for opening it in a code editor

## Usage
When a user opens the page they will be greeted with a start button which if pressed shows the first question, starts the timer and sets the score to 1. If the user lets the timer run out because they cannot answer the question provided they are taken straight to the scoreboard where it will show a score of 1 and their previous scores if they exist as pictured below:

![screenshot](/assets/images/timerout.png)

Start Button:

![screenshot](/assets/images/startbtn.png)

First Question and Score and Timer Set Up

![screenshot](/assets/images/quiz-starts.png)

When answered correctly the score goes up as pictured below:

![screenshot](/assets/images/scoreup.png)

When answered incorrectly the score goes down and so does the timer as pictured below:

![screenshot](/assets/images/scoredown.png)

If the quiz is finished before the timer runs out the user will be taken to a scoreboard that looks like the below:

![screenshot](/assets/images/scoreboard.png)


## License
MIT License

## Features
- Starts only after the start button has been pressed
- Runs a timer for the duration of the quiz that takes you to the scoreboard if it runs out and deducts one second from the timer if you get an answer wrong
- Keeps score of how many questions user has answered right and deducts a point for each wrong answer
- Dynamically generates questions within the same element in the html showing and hiding the radio buttons based on how many options there are in the question
- Allows user to save their score with their initials then view their most recent score from the last quiz and compare the two