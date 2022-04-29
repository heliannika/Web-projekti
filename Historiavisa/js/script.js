/* Elina Rantaniemi
Lähteenä käytetty coding with nick:
https://codingwithnick.in/
*/

// Adding questions and response options

const quizData = [
    {
        question: "1 / 5 Kuka alla olevista EI toiminut Rooman keisarina?",
        a: "a. Nero",
        b: "b. Augustus",
        c: "c. Titus",
        d: "d. Nergal",
        correct: "d",
    },
    {
        question: "2 / 5 Kuka seuraavista oli tunnettu renessanssiajan henkilö ja suomen kirjakielen luoja?",
        a: "a. Mikael Agrikola",
        b: "b. Tarja Halonen",
        c: "c. Kristoffer Columbus",
        d: "d. Martin Luther",
        correct: "a",
    },
    {
        question: "3 / 5 Suomen esihistoriaan katsotaan kuuluvan kolme eri aikakautta. Mikä seuraavista ei kuulu tähän joukkoon?",
        a: "a. Pronssikausi",
        b: "b. Kivikausi",
        c: "c. Hopeakausi",
        d: "d. Rautakausi",
        correct: "c",
    },
    {
        question: "4 / 5 Kuka avasi eräällä löytöretkellään pysyvän yhteyden Amerikan ja muun maailman välille?",
        a: "a. Robinson Crusoe",
        b: "b. Leif Erikinpoika",
        c: "c. Marco Polo",
        d: "d. Kristoffer Columbus",
        correct: "d",
    },
    {
        question: "5 / 5 Minä vuonna Suomi itsenäistyi?",
        a: "a. 1817",
        b: "b. 1917",
        c: "c. 1947",
        d: "d. 1977",
        correct: "b",
    },


];

// Creating const variables

const quiz= document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('checkanswer');

let currentQuiz = 0;
let score = 0;

// Creating function for quiz

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

// Adding what happens after clicking answer -button

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
           document.getElementById("quiz-right").innerHTML = "Vastauksesi on oikein. Hyvä!";
           document.getElementById("quiz-wrong").innerHTML = "";
       } else {
           document.getElementById("quiz-wrong").innerHTML = "Vastauksesi on väärin.";
           document.getElementById("quiz-right").innerHTML = "";
           
       }
    
       currentQuiz++ 

// Printing out the results

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Vastasit oikein ${score}/${quizData.length} kysymyksistä</h2>

           <p><b>Oikeat vastausvaihtoehdot</b>:</p>

           <p><b>1. d: Nergal</b> <br>
           Sekä Nero, Augustus että Titus ovat kaikki toimineet Rooman keisareina.</p>

           <p><b>2. a: Mikael Agrikola</b><br>
           Mikael Agrikola (1510-1557) oli suomalainen uskonpuhdistaja. Hän loi suomen kirjakielen perusteet suomentamalla raamatun sekä teki ensimmäisiä suomenkielisiä kirjakäännöksiä ja omia kirjoja. Agrikola toimi myös Turun piispana. </p>

           <p><b>3. c: Hopeakausi</b> <br>
           Kivikausi (8850–1900/1700 eaa.), Pronssikausi (1700–500 eaa.) ja Rautakausi (500 eaa. – 1200/1300 jaa.) jaksottavat Suomen esihistorian. Hopeakautta ei ole ollut olemassa.</p>

           <p><b>4. d: Kristoffer Columbus</b> <br>
           Columbus oli tutkimusmatkailija Genovasta. Hän ylitti Atlantin vuonna 1492 ja saapui Amerikan itäisille saarille tiettävästi ensimmäisenä eurooppalaisena. Kaiken kaikkiaan hän matkusti Amerikkaan neljä kertaa.</p>

           <p><b>5. b: 1917</b> <br>
           Suomen itsenäisyyden mahdollisuutta alettiin käsittelemään vuoden 1917 keväällä. Viimein, 6. joulukuuta 1917, käsittely hyväksyttiin ja Suomesta tuli itsenäinen valtio. </p>

           <button onclick="location.reload()">Tee uudelleen</button>
           `
       }
    }
})