var startBtn = document.getElementById('startBtn');
var stopBtn = document.getElementById('stopBtn');
var numStop = 0;
var score = 0;
var highscore = 0;
var numStart, numCurrent, miliInterval, precision;

function startNum() {
    numStart = document.getElementById('startValue').value * 10;
    numCurrent = numStart;
    hideTimeValue = Math.random() * numStart * 100;
    console.log(hideTimeValue);
    setTimeout(hideTime, hideTimeValue);
    miliInterval = setInterval(decremNum, 100);
}

function stopNum() {
    clearInterval(miliInterval);
    showTime();
    if (numCurrent <= numStop){
        displayResultat("Perdu");
        precision = 0;
        displayPrecision();
        score = 0;
        displayScore();
        setTimeout(switchBtn, 1000);
    } else {
        displayResultat("Gagné");
        precision = Math.round(100 - (numCurrent / numStart * 100));
        displayPrecision();
        score = score + precision;
        displayScore();
        displayHighscore();
    }
}

function decremNum() {
    numCurrent--;
    displayNum();
    if (numCurrent <= numStop){
        stopNum();
    }
}

function displayNum(){
    var actual = Math.round(numCurrent) / 10;
    document.getElementById('actualValue').textContent = actual.toFixed(1);
}

function switchBtn(){
    startBtn.classList.toggle('hide');
    stopBtn.classList.toggle('hide');
}

function displayResultat(message){
    document.getElementById('resultat').textContent = message;
    if(message == "Perdu"){
        document.getElementById('resultat').classList.add("bold");
    } else {
        document.getElementById('resultat').classList.remove("bold");
    }
}

function displayPrecision(){
    document.getElementById('precision').textContent = precision + "%";
}

function displayScore(){
    document.getElementById('score').textContent = score;
}

function displayHighscore(){
    if(score > highscore){
        highscore = score;
        document.getElementById('highscore').textContent = highscore;
    }
}

function hideTime(){
    document.getElementById('actualValue').classList.add('hide');
}

function showTime(){
    document.getElementById('actualValue').classList.remove('hide');
}

startBtn.addEventListener('click', function(){
    startNum();
    switchBtn();
});

stopBtn.addEventListener('click', function(){
    stopNum();
    switchBtn();
});
