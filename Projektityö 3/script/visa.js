// Toni Puirava, Ryhmä 15
//Lähde https://www.codeexplained.dev/2018/10/create-multiple-choice-quiz-using-javascript.html


// Määritykset
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

const Tehtävä1 = "Tehtävä 1. <br> 4x7=28";
const Tehtävä2 = "Tehtävä 2. <br> Tunnissa on 3600 sekunttia koska yhdessä minuutissa on 60 sekunttia ja yhdessä tunnissa on 60 minuuttia joten 60s x 60 = 3600 sekunttia.";
const Tehtävä3 = "Tehtävä 3. <br> 99/3=33"
const Tehtävä4 = "Tehtävä 4. <br> 10 000/100=100"
const Tehtävä5 = "Tehtävä 5. <br> Desimaaliluku muutetaan prosentiksi kertomalla se sadalla joten 0.7x100=70%"
// Määritetään kysymykset ja vastaus vaihtoehdot
let questions = [
    {
        question : "Tehtävä 1. <br> 4x7=?",
        
        choiceA : "28",
        choiceB : "21",
        choiceC : "35",
        correct : "A"
    },{
        question : "Tehtävä 2. <br> Montako sekunttia on tunnissa?",
       
        choiceA : "300 sekunttia",
        choiceB : "3600 sekunttia",
        choiceC : "600 sekunttia",
        correct : "B"
    },{
        question : "Tehtävä 3. <br> 99/3=?",
      
        choiceA : "15",
        choiceB : "30",
        choiceC : "33",
        correct : "C"
    },{
        question : "Tehtävä 4. <br> 10 000/100=?",
       
        choiceA : "10",
        choiceB : "1000",
        choiceC : "100",
        correct : "C"
    },{
        question : "Tehtävä 5. <br> Paljonko  0.7 on prosenteina?",
        
        choiceA : "7%",
        choiceB : "70%",
        choiceC : "700%",
        correct : "B"
    }

];

// Määritetään muuttujat 

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let score = 0;

// Esitetään kysymykset 
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// Aloitetaan visa 
function startQuiz(){
    document.getElementsByTagName("h1")[0].style.display = "none";
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    
    
}

// Esitetään hetkittäinen tulos 
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}





// Tarkistetaan vastaukset

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // vastaus on oikein
        score++;
        // Vaihdetaan tulos tauluun vihreä pallo 
        answerIsCorrect();
    }else{
        // vastaus on väärin 
        // Vaihdetaan tulos tauluun puinainen pallo 
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // Lopetetaan visa ja esitetään tulos 
        scoreRender();
    }
}

// Vastaus on oikein
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// Vastaus on väärin
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// Esitetään tulos 
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // lasketaan oikeat vastaukset 
    const scorePerCent = Math.round(5 * score/questions.length);
    
    // Valitaan kuva pisteiden mukaan 
    let img = (scorePerCent >= 5) ? "../img/5.5.png" :
              (scorePerCent >= 4) ? "../img/4.5.png" :
              (scorePerCent >= 3) ? "../img/3.5.png" :
              (scorePerCent >= 2) ? "../img/2.5.png" :
              (scorePerCent >= 1) ? "../img/1.5.png" :
              "0.5.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "Vastasit oikein "+ scorePerCent + " kysymykseen." + "<br>" + "Oikeat ratkaisut;"+ "<br>" + "<br>" + Tehtävä1 + "<br>" + "<br>" + Tehtävä2+ "<br>"+ "<br>" + Tehtävä3+ "<br>"+ "<br>" + Tehtävä4+ "<br>"+ "<br>" + Tehtävä5;
}