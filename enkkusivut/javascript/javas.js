// Muuttujat jokaiselle kysymysosiolle, joita pystyy hyödyntämään sivuston skrollaustoiminnossa.

let firstsec = document.getElementById("question_Section1");
let secondsec = document.getElementById("question_Section2");
let thirdsec = document.getElementById("question_Section3");
let fourthsec = document.getElementById("question_Section4");
let fifthsec = document.getElementById("question_Section5");

let blockResult1 = document.getElementById("2020");
let blockResult2 = document.getElementById("resultsfortheQuiz2").style.display = "none";
let blockResult3 = document.getElementById("resultsfortheQuiz3").style.display = "none";
let blockResult4 = document.getElementById("resultsfortheQuiz4").style.display = "none";

blockResult1.style.visibility = "hidden";

// Ensimmäisen osion pisteiden muuttujan ja arvon määrittely nollaksi.

let quiz_Score = 0;

// Palautteet, jotka näytetään heti jokaisen osion kuhunkin kysymykseen vastattua.

const correctA = "Oikein!";
const incorrectA = "Väärin! Oikea vastaus olisi ollut ";

/* Jokaisen tehtävän funktiot toimivat samalla tavalla joka osiossa. Oikeiden vastausten funktiot toimivat siten,
että jokaisesta saa pisteen. Tein jokaisesta vastauksesta erikseen funktiot juurikin tämän toiminnallisuuden takia
sekä myös sen takia, jotta saan lukittua valikot. */

function correctA1() {

    // Kun vastaus on oikein, tulostetaan sille tarkoitettu palaute vakiosta correctA.

    document.getElementById("result1.1").innerHTML = correctA;

    // Tyhjennetään väärän vastauksen kenttä.

    document.getElementById("error1.1").innerHTML = "";

    // Lisätään ensimmäisen osion pistelaskentaan quiz_Score muuttujan avulla yksi piste.

    quiz_Score++;
    document.getElementById("quiz_Score").innerHTML = quiz_Score;

    // Lukitaan vastausvalikko.

    document.getElementById("forkQ").disabled=true;
}

/* Väärille vastauksille on myös omat funktionsa, jotta pisteiden lasku onnistuu oikein ja jotta silloinkin
vastausvalikko saadaan lukittua. */

function incorrect() {

    // Tulostetaan väärän vastauksen elementtiin väärille vastauksille tarkoitettu viesti vakiosta incorrectA.

    document.getElementById("error1.1").innerHTML = incorrectA + "<i>fork.</i>";

    // Tyhjennetään oikean vastauksen palautekenttä.

    document.getElementById("result1.1").innerHTML = "";

    // Lukitaan vastausvalikko.

    document.getElementById("forkQ").disabled=true;
}

function correctA2() {
    document.getElementById("result1.2").innerHTML = correctA;
    document.getElementById("error1.2").innerHTML = "";
    quiz_Score++;
    document.getElementById("quiz_Score").innerHTML = quiz_Score;

    document.getElementById("plateQ").disabled=true;
}

function incorrect2() {
    document.getElementById("result1.2").innerHTML = "";
    document.getElementById("error1.2").innerHTML = incorrectA + "<i>plate.</i>";

    document.getElementById("plateQ").disabled=true;
}

function correctA3() {
    document.getElementById("result1.3").innerHTML = correctA;
    document.getElementById("error1.3").innerHTML = "";
    quiz_Score++;
    document.getElementById("quiz_Score").innerHTML = quiz_Score;

    document.getElementById("kitchenQ").disabled=true;
}

function incorrect3() {
    document.getElementById("result1.3").innerHTML = "";
    document.getElementById("error1.3").innerHTML = incorrectA + "<i>kitchen.</i>";

    document.getElementById("kitchenQ").disabled=true;
}

function correctA4() {
    document.getElementById("result1.4").innerHTML = correctA;
    document.getElementById("error1.4").innerHTML = "";
    quiz_Score++;
    document.getElementById("quiz_Score").innerHTML = quiz_Score;

    document.getElementById("bowlQ").disabled=true;
}

function incorrect4() {
    document.getElementById("result1.4").innerHTML = "";
    document.getElementById("error1.4").innerHTML = incorrectA + "<i>bowl.</i>";

    document.getElementById("bowlQ").disabled=true;
}

// Tehtäväosioiden palautteille omat vakiot tulostusviesteille.

const excellent = "Täydet pisteet, huippusuoritus!";
const good = "Hienosti meni!";
const fair = "Harjoittelemalla opit varmasti!";

function visa01() {

    // Haetaan muuttujaan osion pistemäärä.

    let countScore = document.getElementById("quiz_Score").innerHTML;

    // Pisteiden määrittelyt if & else if ehtojen avulla.

    if (countScore == 4) {
        document.getElementById("final_Score").innerHTML = excellent;
    } else if (countScore == 3) {
        document.getElementById("final_Score").innerHTML = good;
    } else if (countScore <= 2) {
        document.getElementById("final_Score").innerHTML = fair;
    }

}

// Tämän funktion avulla siirrytään seuraavaan osioon.

function NextQuestion() {
    secondsec.scrollIntoView({behavior: "smooth"});
   }

let quiz_ScoreB = 0;

function correctB1() {
    document.getElementById("result2.1").innerHTML = correctA;
    document.getElementById("error2.1").innerHTML = "";
    quiz_ScoreB++;
    document.getElementById("quiz_ScoreB").innerHTML = quiz_ScoreB;

    document.getElementById("mondayQ").disabled=true;
}

function incorrectB1() {
    document.getElementById("result2.1").innerHTML = "";
    document.getElementById("error2.1").innerHTML = incorrectA + "<i>monday.</i>";

    document.getElementById("mondayQ").disabled=true;
}

function correctB2() {
    document.getElementById("result2.2").innerHTML = correctA;
    document.getElementById("error2.2").innerHTML = "";
    quiz_ScoreB++;
    document.getElementById("quiz_ScoreB").innerHTML = quiz_ScoreB;

    document.getElementById("tuesdayQ").disabled=true;
}

function incorrectB2() {
    document.getElementById("result2.2").innerHTML = "";
    document.getElementById("error2.2").innerHTML = incorrectA + "<i>tuesday.</i>";

    document.getElementById("tuesdayQ").disabled=true;
}

function correctB3() {
    document.getElementById("result2.3").innerHTML = correctA;
    document.getElementById("error2.3").innerHTML = "";
    quiz_ScoreB++;
    document.getElementById("quiz_ScoreB").innerHTML = quiz_ScoreB;

    document.getElementById("wednesdayQ").disabled=true;
}

function incorrectB3() {
    document.getElementById("result2.3").innerHTML = "";
    document.getElementById("error2.3").innerHTML = incorrectA + "<i>wednesday.</i>";

    document.getElementById("wednesdayQ").disabled=true;
}

function correctB4() {
    document.getElementById("result2.4").innerHTML = correctA;
    document.getElementById("error2.4").innerHTML = "";
    quiz_ScoreB++;
    document.getElementById("quiz_ScoreB").innerHTML = quiz_ScoreB;

    document.getElementById("thursdayQ").disabled=true;
}

function incorrectB4() {
    document.getElementById("result2.4").innerHTML = "";
    document.getElementById("error2.4").innerHTML = incorrectA + "<i>thursday.</i>";

    document.getElementById("thursdayQ").disabled=true;
}

function correctB5() {
    document.getElementById("result2.5").innerHTML = correctA;
    document.getElementById("error2.5").innerHTML = "";
    quiz_ScoreB++;
    document.getElementById("quiz_ScoreB").innerHTML = quiz_ScoreB;

    document.getElementById("fridayQ").disabled=true;
}

function incorrectB5() {
    document.getElementById("result2.5").innerHTML = "";
    document.getElementById("error2.5").innerHTML = incorrectA + "<i>friday.</i>";

    document.getElementById("fridayQ").disabled=true;
}

function visa02() {

    let countScoreB = document.getElementById("quiz_ScoreB").innerHTML;

    if (countScoreB >= 4) {
        document.getElementById("result2").innerHTML = excellent;
    } else if (countScoreB == 3) {
        document.getElementById("result2").innerHTML = good;
    } else if (countScoreB <= 2) {
        document.getElementById("result2").innerHTML = fair;
    }
}

function NextQuestion2() {
    thirdsec.scrollIntoView({behavior: "smooth"});
   }

let quiz_ScoreC = 0;

function correctC1() {
    document.getElementById("result3.1").innerHTML = correctA;
    document.getElementById("error3.1").innerHTML = "";
    quiz_ScoreC++;
    document.getElementById("quiz_ScoreC").innerHTML = quiz_ScoreC;

    document.getElementById("januaryQ").disabled=true;
}

function incorrectC1() {
    document.getElementById("result3.1").innerHTML = "";
    document.getElementById("error3.1").innerHTML = incorrectA + "<i>january.</i>";

    document.getElementById("januaryQ").disabled=true;
}

function correctC2() {
    document.getElementById("result3.2").innerHTML = correctA;
    document.getElementById("error3.2").innerHTML = "";
    quiz_ScoreC++;
    document.getElementById("quiz_ScoreC").innerHTML = quiz_ScoreC;

    document.getElementById("decemberQ").disabled=true;
}

function incorrectC2() {
    document.getElementById("result3.2").innerHTML = "";
    document.getElementById("error3.2").innerHTML = incorrectA + "<i>december.</i>";

    document.getElementById("decemberQ").disabled=true;
}

function correctC3() {
    document.getElementById("result3.3").innerHTML = correctA;
    document.getElementById("error3.3").innerHTML = "";
    quiz_ScoreC++;
    document.getElementById("quiz_ScoreC").innerHTML = quiz_ScoreC;

    document.getElementById("juneQ").disabled=true;
}

function incorrectC3() {
    document.getElementById("result3.3").innerHTML = "";
    document.getElementById("error3.3").innerHTML = incorrectA + "<i>june.</i>";

    document.getElementById("juneQ").disabled=true;
}

function correctC4() {
    document.getElementById("result3.4").innerHTML = correctA;
    document.getElementById("error3.4").innerHTML = "";
    quiz_ScoreC++;
    document.getElementById("quiz_ScoreC").innerHTML = quiz_ScoreC;

    document.getElementById("septemberQ").disabled=true;
}

function incorrectC4() {
    document.getElementById("result3.4").innerHTML = "";
    document.getElementById("error3.4").innerHTML = incorrectA + "<i>september.</i>";

    document.getElementById("septemberQ").disabled=true;
}

function correctC5() {
    document.getElementById("result3.5").innerHTML = correctA;
    document.getElementById("error3.5").innerHTML = "";
    quiz_ScoreC++;
    document.getElementById("quiz_ScoreC").innerHTML = quiz_ScoreC;

    document.getElementById("mayQ").disabled=true;
}

function incorrectC5() {
    document.getElementById("result3.5").innerHTML = "";
    document.getElementById("error3.5").innerHTML = incorrectA + "<i>may.</i>";

    document.getElementById("mayQ").disabled=true;
}

function visa03() {

    let countScoreC = document.getElementById("quiz_ScoreC").innerHTML;

    if (countScoreC >= 4) {
        document.getElementById("result3").innerHTML = excellent;
    } else if (countScoreC == 3) {
        document.getElementById("result3").innerHTML = good;
    } else if (countScoreC <= 2) {
        document.getElementById("result3").innerHTML = fair;
    }

}

function NextQuestion3() {
    fourthsec.scrollIntoView({behavior: "smooth"});
   }

let quiz_ScoreD = 0;

function correctD1() {
    document.getElementById("result4.1").innerHTML = correctA;
    document.getElementById("error4.1").innerHTML = "";
    quiz_ScoreD++;
    document.getElementById("quiz_ScoreD").innerHTML = quiz_ScoreD;

    document.getElementById("flowerQ").disabled=true;
}

function incorrectD1() {
    document.getElementById("result4.1").innerHTML = "";
    document.getElementById("error4.1").innerHTML = incorrectA + "<i>flower.</i>";

    document.getElementById("flowerQ").disabled=true;
}

function correctD2() {
    document.getElementById("result4.2").innerHTML = correctA;
    document.getElementById("error4.2").innerHTML = "";
    quiz_ScoreD++;
    document.getElementById("quiz_ScoreD").innerHTML = quiz_ScoreD;

    document.getElementById("yarnQ").disabled=true;
}

function incorrectD2() {
    document.getElementById("result4.2").innerHTML = "";
    document.getElementById("error4.2").innerHTML = incorrectA + "<i>yarn.</i>";

    document.getElementById("yarnQ").disabled=true;
}

function correctD3() {
    document.getElementById("result4.3").innerHTML = correctA;
    document.getElementById("error4.3").innerHTML = "";
    quiz_ScoreD++;
    document.getElementById("quiz_ScoreD").innerHTML = quiz_ScoreD;

    document.getElementById("plateQ1").disabled=true;
}

function incorrectD3() {
    document.getElementById("result4.3").innerHTML = "";
    document.getElementById("error4.3").innerHTML = incorrectA + "<i>plate.</i>";

    document.getElementById("plateQ1").disabled=true;
}

function visa04() {

    let countScoreD = document.getElementById("quiz_ScoreD").innerHTML;

    if (countScoreD == 3) {
        document.getElementById("result4").innerHTML = excellent;
    } else if (countScoreD == 2) {
        document.getElementById("result4").innerHTML = good;
    } else if (countScoreD <= 1) {
        document.getElementById("result4").innerHTML = fair;
    }

}

function NextQuestion4() {
    fifthsec.scrollIntoView({behavior: "smooth"});
   }

let quiz_ScoreE = 0;

function correctE1() {
    document.getElementById("result5.1").innerHTML = correctA;
    document.getElementById("error5.1").innerHTML = "";
    quiz_ScoreE++;
    document.getElementById("quiz_ScoreE").innerHTML = quiz_ScoreE;

    document.getElementById("paintQ").disabled=true;
}

function incorrectE1() {
    document.getElementById("result5.1").innerHTML = "";
    document.getElementById("error5.1").innerHTML = incorrectA + "<i>paint.</i>";

    document.getElementById("paintQ").disabled=true;
}

function correctE2() {
    document.getElementById("result5.2").innerHTML = correctA;
    document.getElementById("error5.2").innerHTML = "";
    quiz_ScoreE++;
    document.getElementById("quiz_ScoreE").innerHTML = quiz_ScoreE;

    document.getElementById("waveQ").disabled=true;
}

function incorrectE2() {
    document.getElementById("result5.2").innerHTML = "";
    document.getElementById("error5.2").innerHTML = incorrectA + "<i>wave.</i>";

    document.getElementById("waveQ").disabled=true;
}

function correctE3() {
    document.getElementById("result5.3").innerHTML = correctA;
    document.getElementById("error5.3").innerHTML = "";
    quiz_ScoreE++;
    document.getElementById("quiz_ScoreE").innerHTML = quiz_ScoreE;

    document.getElementById("eatQ").disabled=true;
}

function incorrectE3() {
    document.getElementById("result5.3").innerHTML = "";
    document.getElementById("error5.3").innerHTML = incorrectA + "<i>eat.</i>";

    document.getElementById("eatQ").disabled=true;
}

function visa05() {

    let countScoreE = document.getElementById("quiz_ScoreE").innerHTML;

    if (countScoreE == 3) {
        document.getElementById("result5").innerHTML = excellent;
    } else if (countScoreE == 2) {
        document.getElementById("result5").innerHTML = good;
    } else if (countScoreE <= 1) {
        document.getElementById("result5").innerHTML = fair;
    }

}


function SubmitTheQuiz() {

    let quiz_ScoreFinal = Number(document.getElementById("quiz_Score").innerHTML);
    let quiz_ScoreFinalB = Number(document.getElementById("quiz_ScoreB").innerHTML);
    let quiz_ScoreFinalC = Number(document.getElementById("quiz_ScoreC").innerHTML);
    let quiz_ScoreFinalD = Number(document.getElementById("quiz_ScoreD").innerHTML);
    let quiz_ScoreFinalE = Number(document.getElementById("quiz_ScoreE").innerHTML);

    let Final_Score = Number(quiz_ScoreFinal + quiz_ScoreFinalB + quiz_ScoreFinalC + quiz_ScoreFinalD + quiz_ScoreFinalE);

   if (Final_Score == 20) {
       document.getElementById("resultsfortheQuiz1").innerHTML = "</br><i> Mahtavaa, vastasit kaikkiin kysymyksiin oikein!</i> 20/20";
       blockResult1.style.visibility = "visible";
   } else if (Final_Score <= 19 && Final_Score >= 14) {
       document.getElementById("resultsfortheQuiz2").innerHTML = "</br><i> Hienoa työtä, kysymyksistä oikein oli </i>" + Final_Score + "/20.";
   } else if (Final_Score <= 13 && Final_Score >= 7) {
       document.getElementById("resultsfortheQuiz3").innerHTML = "</br>" + Final_Score + "/20 <i> vastauksista oli oikein. Harjoittelemalla sinäkin opit englannin kielen sanaston!</i>";
   } else {
       document.getElementById("resultsfortheQuiz4").innerHTML = "</br>" + Final_Score + "/20 <i> vastauksista oli oikein. Harjoittelemalla voit oppia mitä vain! </i>";
   }
}