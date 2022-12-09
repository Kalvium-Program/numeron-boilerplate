// Iteration 2: Generate 2 random number and display it on the screen
let number1=document.getElementById('number1')
let number2=document.getElementById('number2')
let greaterThan=document.getElementById('greater-than')
let equalTo=document.getElementById('equal-to')
let lesserThan=document.getElementById('lesser-than')

function randomGenerator(){
number1.innerHTML=Math.floor(Math.random() * 100) + 1;
number2.innerHTML=Math.floor(Math.random() * 100) + 1;
}
// Iteration 3: Make the options button functional
var score=0
greaterThan.onclick=()=>{
    if (Number(number1.innerHTML)>Number(number2.innerHTML)){
        score+=1
        randomGenerator()
        resetTime(timerId)
    }else{
        window.location='gameover.html'
    }
}
equalTo.onclick=()=>{
    if (Number(number1.innerHTML)==Number(number2.innerHTML)){
        score+=1
        randomGenerator()
        resetTime(timerId)
    }else{
        window.location='gameover.html'
    }
}
lesserThan.onclick=()=>{
    if (Number(number1.innerHTML)<Number(number2.innerHTML)){
        score+=1
        randomGenerator()
        resetTime(timerId)
    }else{
        window.location='gameover.html'
    }
}

var time = 5;
var timer = document.getElementById("timer");
var timerId;

function startTimer() {
  timer.innerHTML = time;
  timerId = setInterval(() => {
    time--;
    if (time == 0) {
        window.location='gameover.html'
    }
    timer.innerHTML = time;
  }, 1000);
  sessionStorage.setItem("score", score);
}

function resetTime() {
    time = 5;
  clearInterval(timerId);
  startTimer(timerId);
}

startTimer();