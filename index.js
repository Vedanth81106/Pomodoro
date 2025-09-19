const clock = document.getElementById("clock");
const optionsContainer = document.getElementById("options-container");

let selectedOption = document.getElementById("selected-option");

let timer = null;
let isRunning = false;
let currentMode = 'pomo';
let timeLeft = 25*60;

function openContainer(){
    optionsContainer.classList.toggle("show");
}

function selectOption(value, text){
    selectedOption.textContent = text;

    changeTimer(value);

    optionsContainer.classList.remove("show");
}

function changeTimer(currentMode){

    isRunning = false;
    clearInterval(timer);

    switch(currentMode){

        case "pomo":
            clearInterval(timer);
            timeLeft = 25*60;
            clock.textContent = `25:00`; 
            break;
        
        case "short":
            clearInterval(timer);
            timeLeft = 5*60;
            clock.textContent = `5:00`;
            break;
        
        case "long":
            clearInterval(timer);
            timeLeft = 15*60;
            clock.textContent = `15:00`;
            break;
        }
}

function timerReset(){

    changeTimer(currentMode);
}

function timerStart(){

    if(!isRunning){
        isRunning = true;
        timer = setInterval(updateTime,1000);
    }
}

function timerPause(){

    isRunning = false;
    clearInterval(timer);
}

function resetTimer(){

    
}

function updateTime(){
    timeLeft--;

    let minutes = Math.floor(timeLeft/60);
    let seconds = Math.floor(timeLeft%60);

    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");

    let timeString = `${minutes}:${seconds}`;

    clock.textContent = timeString;

    if(isRunning){
        if(timeLeft === 0){
            clearInterval(timer);
            isRunning = false;
        }

    }
}

window.addEventListener('keydown',(event) => {

    if(event.code === 'Space'){
        event.preventDefault();

        if(isRunning){
            timerPause();
        }else{
            timerStart();
        }
    }
});