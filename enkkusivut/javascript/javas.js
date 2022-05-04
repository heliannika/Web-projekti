// Muuttujat jokaiselle kysymysosiolle, joita pystyy hyödyntämään sivuston skrollaustoiminnossa.

let firstsec = document.getElementById("question_Section1");
let secondsec = document.getElementById("question_Section2");
let thirdsec = document.getElementById("question_Section3");
let fourthsec = document.getElementById("question_Section4");
let fifthsec = document.getElementById("question_Section5");

// Ensimmäisen osion pisteiden muuttujan ja arvon määrittely nollaksi.

let quiz_Score = 0;

// Palautteet, jotka näytetään heti jokaisen osion kuhunkin kysymykseen vastattua.

const correctA = "Oikein!";
const incorrectA = "Väärin! Oikea vastaus olisi ollut ";

/* Jokaisen tehtävän funktiot toimivat samalla tavalla joka osiossa. Oikeiden vastausten funktiot toimivat siten,
että jokaisesta saa pisteen. Tein jokaisesta vastauksesta erikseen funktiot juurikin tämän toiminnallisuuden takia
sekä myös sen takia, jotta saan lukittua vaihtoehdot oppilaan vastattua. */

document.getElementById("forkCorrect").addEventListener("click", correct1);

function correct1() {

    /* Kun vastaus on oikein, tulostetaan sille tarkoitettu palaute vakiosta correctA. */

    document.getElementById("result1.first").innerHTML = correctA;

    /* Tyhjennetään väärän vastauksen kenttä. */

    document.getElementById("error1.1").innerHTML = "";

    /* Lisätään ensimmäisen osion pistelaskentaan quiz_Score muuttujan avulla yksi piste. */

    document.getElementById("quiz_Score").innerHTML = quiz_Score++;

    /* Lukitaan vastausvaihtoehdot. */

    document.getElementById("forkCorrect").disabled=true;
    document.getElementById("forkinCorrect").disabled=true;
    document.getElementById("forkinCorrect2").disabled=true;
}

/* Väärille vastauksille on myös omat funktionsa, jotta pisteiden lasku onnistuu oikein ja jotta silloinkin
vastausvaihtoehdot saadaan lukittua. */

document.getElementById("forkinCorrect").addEventListener("click", incorrect1);
document.getElementById("forkinCorrect2").addEventListener("click", incorrect1);

function incorrect1() {

    /* Tulostetaan väärän vastauksen elementtiin väärille vastauksille tarkoitettu viesti vakiosta incorrectA. */

    document.getElementById("error1.1").innerHTML = incorrectA + "<i>fork.</i>";

    /* Tyhjennetään oikean vastauksen palautekenttä. */

    document.getElementById("result1.first").innerHTML = "";

    /* Lukitaan vastausvalikko. */

    document.getElementById("forkCorrect").disabled=true;
    document.getElementById("forkinCorrect").disabled=true;
    document.getElementById("forkinCorrect2").disabled=true;
}

document.getElementById("plateCorrect").addEventListener("click", correctA2);

function correctA2() {
    document.getElementById("result1.2").innerHTML = correctA;
    document.getElementById("error1.2").innerHTML = "";
    document.getElementById("quiz_Score").innerHTML = quiz_Score;

    document.getElementById("plateCorrect").disabled=true;
    document.getElementById("plateinCorrect").disabled=true;
    document.getElementById("plateinCorrect2").disabled=true;
}

document.getElementById("plateinCorrect").addEventListener("click", incorrect2);
document.getElementById("plateinCorrect2").addEventListener("click", incorrect2);

function incorrect2() {
    document.getElementById("result1.2").innerHTML = "";
    document.getElementById("error1.2").innerHTML = incorrectA + "<i>plate.</i>";

    document.getElementById("plateCorrect").disabled=true;
    document.getElementById("plateinCorrect").disabled=true;
    document.getElementById("plateinCorrect2").disabled=true;
}

document.getElementById("kitchenCorrect").addEventListener("click", correctA3);

function correctA3() {
    document.getElementById("result1.3").innerHTML = correctA;
    document.getElementById("error1.3").innerHTML = "";
    document.getElementById("quiz_Score").innerHTML = quiz_Score++;

    document.getElementById("kitchenCorrect").disabled=true;
    document.getElementById("kitcheninCorrect").disabled=true;
    document.getElementById("kitcheninCorrect2").disabled=true;
}

document.getElementById("kitcheninCorrect").addEventListener("click", incorrect3);
document.getElementById("kitcheninCorrect2").addEventListener("click", incorrect3);

function incorrect3() {
    document.getElementById("result1.3").innerHTML = "";
    document.getElementById("error1.3").innerHTML = incorrectA + "<i>kitchen.</i>";

    document.getElementById("kitchenCorrect").disabled=true;
    document.getElementById("kitcheninCorrect").disabled=true;
    document.getElementById("kitcheninCorrect2").disabled=true;
}

document.getElementById("bowlCorrect").addEventListener("click", correctA4);

function correctA4() {
    document.getElementById("result1.4").innerHTML = correctA;
    document.getElementById("error1.4").innerHTML = "";
    document.getElementById("quiz_Score").innerHTML = quiz_Score;

    document.getElementById("bowlCorrect").disabled=true;
    document.getElementById("bowlinCorrect").disabled=true;
    document.getElementById("bowlinCorrect2").disabled=true;
}

document.getElementById("bowlinCorrect").addEventListener("click", incorrect4);
document.getElementById("bowlinCorrect2").addEventListener("click", incorrect4);

function incorrect4() {
    document.getElementById("result1.4").innerHTML = "";
    document.getElementById("error1.4").innerHTML = incorrectA + "<i>bowl.</i>";

    document.getElementById("bowlCorrect").disabled=true;
    document.getElementById("bowlinCorrect").disabled=true;
    document.getElementById("bowlinCorrect2").disabled=true;
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

// Seuraavan osion pisteiden määrittelyä nollaksi.

let quiz_ScoreB = 0;

// Toisen osion koodit meni aivan samalla tavalla kuin ensimmäisenkin osion.

document.getElementById("monCorrect").addEventListener("click", correctB1);

function correctB1() {
    document.getElementById("result2.1").innerHTML = correctA;
    document.getElementById("error2.1").innerHTML = "";
    document.getElementById("quiz_ScoreB").innerHTML = quiz_ScoreB++;

    document.getElementById("monCorrect").disabled=true;
    document.getElementById("moninCorrect1").disabled=true;
    document.getElementById("moninCorrect2").disabled=true;
    document.getElementById("moninCorrect3").disabled=true;
    document.getElementById("moninCorrect4").disabled=true;
}

document.getElementById("moninCorrect1").addEventListener("click", incorrectB1);
document.getElementById("moninCorrect2").addEventListener("click", incorrectB1);
document.getElementById("moninCorrect3").addEventListener("click", incorrectB1);
document.getElementById("moninCorrect4").addEventListener("click", incorrectB1);

function incorrectB1() {
    document.getElementById("result2.1").innerHTML = "";
    document.getElementById("error2.1").innerHTML = incorrectA + "<i>monday.</i>";

    document.getElementById("monCorrect").disabled=true;
    document.getElementById("moninCorrect1").disabled=true;
    document.getElementById("moninCorrect2").disabled=true;
    document.getElementById("moninCorrect3").disabled=true;
    document.getElementById("moninCorrect4").disabled=true;
}

document.getElementById("tueCorrect").addEventListener("click", correctB2);

function correctB2() {
    document.getElementById("result2.2").innerHTML = correctA;
    document.getElementById("error2.2").innerHTML = "";
    document.getElementById("quiz_ScoreB").innerHTML = quiz_ScoreB;

    document.getElementById("tueCorrect").disabled=true;
    document.getElementById("tueinCorrect1").disabled=true;
    document.getElementById("tueinCorrect2").disabled=true;
    document.getElementById("tueinCorrect3").disabled=true;
    document.getElementById("tueinCorrect4").disabled=true;
}

document.getElementById("tueinCorrect1").addEventListener("click", incorrectB2);
document.getElementById("tueinCorrect2").addEventListener("click", incorrectB2);
document.getElementById("tueinCorrect3").addEventListener("click", incorrectB2);
document.getElementById("tueinCorrect4").addEventListener("click", incorrectB2);

function incorrectB2() {
    document.getElementById("result2.2").innerHTML = "";
    document.getElementById("error2.2").innerHTML = incorrectA + "<i>tuesday.</i>";

    document.getElementById("tueCorrect").disabled=true;
    document.getElementById("tueinCorrect1").disabled=true;
    document.getElementById("tueinCorrect2").disabled=true;
    document.getElementById("tueinCorrect3").disabled=true;
    document.getElementById("tueinCorrect4").disabled=true;
}

document.getElementById("wedCorrect").addEventListener("click", correctB3);

function correctB3() {
    document.getElementById("result2.3").innerHTML = correctA;
    document.getElementById("error2.3").innerHTML = "";
    document.getElementById("quiz_ScoreB").innerHTML = quiz_ScoreB++;

    document.getElementById("wedCorrect").disabled=true;
    document.getElementById("wedinCorrect1").disabled=true;
    document.getElementById("wedinCorrect2").disabled=true;
    document.getElementById("wedinCorrect3").disabled=true;
    document.getElementById("wedinCorrect4").disabled=true;
}

document.getElementById("wedinCorrect1").addEventListener("click", incorrectB3);
document.getElementById("wedinCorrect2").addEventListener("click", incorrectB3);
document.getElementById("wedinCorrect3").addEventListener("click", incorrectB3);
document.getElementById("wedinCorrect4").addEventListener("click", incorrectB3);

function incorrectB3() {
    document.getElementById("result2.3").innerHTML = "";
    document.getElementById("error2.3").innerHTML = incorrectA + "<i>wednesday.</i>";

    document.getElementById("wedCorrect").disabled=true;
    document.getElementById("wedinCorrect1").disabled=true;
    document.getElementById("wedinCorrect2").disabled=true;
    document.getElementById("wedinCorrect3").disabled=true;
    document.getElementById("wedinCorrect4").disabled=true;
}

document.getElementById("thurCorrect").addEventListener("click", correctB4);

function correctB4() {
    document.getElementById("result2.4").innerHTML = correctA;
    document.getElementById("error2.4").innerHTML = "";
    document.getElementById("quiz_ScoreB").innerHTML = quiz_ScoreB;

    document.getElementById("thurCorrect").disabled=true;
    document.getElementById("thurinCorrect1").disabled=true;
    document.getElementById("thurinCorrect2").disabled=true;
    document.getElementById("thurinCorrect3").disabled=true;
    document.getElementById("thurinCorrect4").disabled=true;
}

document.getElementById("thurinCorrect1").addEventListener("click", incorrectB4);
document.getElementById("thurinCorrect2").addEventListener("click", incorrectB4);
document.getElementById("thurinCorrect3").addEventListener("click", incorrectB4);
document.getElementById("thurinCorrect4").addEventListener("click", incorrectB4);

function incorrectB4() {
    document.getElementById("result2.4").innerHTML = "";
    document.getElementById("error2.4").innerHTML = incorrectA + "<i>thursday.</i>";

    document.getElementById("thurCorrect").disabled=true;
    document.getElementById("thurinCorrect1").disabled=true;
    document.getElementById("thurinCorrect2").disabled=true;
    document.getElementById("thurinCorrect3").disabled=true;
    document.getElementById("thurinCorrect4").disabled=true;
}

document.getElementById("friCorrect").addEventListener("click", correctB5);


function correctB5() {
    document.getElementById("result2.5").innerHTML = correctA;
    document.getElementById("error2.5").innerHTML = "";
    document.getElementById("quiz_ScoreB").innerHTML = quiz_ScoreB++;

    document.getElementById("friCorrect").disabled=true;
    document.getElementById("friinCorrect1").disabled=true;
    document.getElementById("friinCorrect2").disabled=true;
    document.getElementById("friinCorrect3").disabled=true;
    document.getElementById("friinCorrect4").disabled=true;
}

document.getElementById("friinCorrect1").addEventListener("click", incorrectB5);
document.getElementById("friinCorrect2").addEventListener("click", incorrectB5);
document.getElementById("friinCorrect3").addEventListener("click", incorrectB5);
document.getElementById("friinCorrect4").addEventListener("click", incorrectB5);

function incorrectB5() {
    document.getElementById("result2.5").innerHTML = "";
    document.getElementById("error2.5").innerHTML = incorrectA + "<i>friday.</i>";

    document.getElementById("friCorrect").disabled=true;
    document.getElementById("friinCorrect1").disabled=true;
    document.getElementById("friinCorrect2").disabled=true;
    document.getElementById("friinCorrect3").disabled=true;
    document.getElementById("friinCorrect4").disabled=true;
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

document.getElementById("janCorrect").addEventListener("click", correctC1);

function correctC1() {
    document.getElementById("result3.1").innerHTML = correctA;
    document.getElementById("error3.1").innerHTML = "";
    document.getElementById("quiz_ScoreC").innerHTML = quiz_ScoreC++;

    document.getElementById("janCorrect").disabled=true;
    document.getElementById("janinCorrect1").disabled=true;
    document.getElementById("janinCorrect2").disabled=true;
    document.getElementById("janinCorrect3").disabled=true;
    document.getElementById("janinCorrect4").disabled=true;
}

document.getElementById("janinCorrect1").addEventListener("click", incorrectC1);
document.getElementById("janinCorrect2").addEventListener("click", incorrectC1);
document.getElementById("janinCorrect3").addEventListener("click", incorrectC1);
document.getElementById("janinCorrect4").addEventListener("click", incorrectC1);

function incorrectC1() {
    document.getElementById("result3.1").innerHTML = "";
    document.getElementById("error3.1").innerHTML = incorrectA + "<i>january.</i>";

    document.getElementById("janCorrect").disabled=true;
    document.getElementById("janinCorrect1").disabled=true;
    document.getElementById("janinCorrect2").disabled=true;
    document.getElementById("janinCorrect3").disabled=true;
    document.getElementById("janinCorrect4").disabled=true;
}

document.getElementById("decCorrect").addEventListener("click", correctC2);

function correctC2() {
    document.getElementById("result3.2").innerHTML = correctA;
    document.getElementById("error3.2").innerHTML = "";
    document.getElementById("quiz_ScoreC").innerHTML = quiz_ScoreC;

    document.getElementById("decCorrect").disabled=true;
    document.getElementById("decinCorrect1").disabled=true;
    document.getElementById("decinCorrect2").disabled=true;
    document.getElementById("decinCorrect3").disabled=true;
    document.getElementById("decinCorrect4").disabled=true;
}

document.getElementById("decinCorrect1").addEventListener("click", incorrectC2);
document.getElementById("decinCorrect2").addEventListener("click", incorrectC2);
document.getElementById("decinCorrect3").addEventListener("click", incorrectC2);
document.getElementById("decinCorrect4").addEventListener("click", incorrectC2);

function incorrectC2() {
    document.getElementById("result3.2").innerHTML = "";
    document.getElementById("error3.2").innerHTML = incorrectA + "<i>december.</i>";

    document.getElementById("decCorrect").disabled=true;
    document.getElementById("decinCorrect1").disabled=true;
    document.getElementById("decinCorrect2").disabled=true;
    document.getElementById("decinCorrect3").disabled=true;
    document.getElementById("decinCorrect4").disabled=true;
}

document.getElementById("juneCorrect").addEventListener("click", correctC3);

function correctC3() {
    document.getElementById("result3.3").innerHTML = correctA;
    document.getElementById("error3.3").innerHTML = "";
    document.getElementById("quiz_ScoreC").innerHTML = quiz_ScoreC++;

    document.getElementById("juneCorrect").disabled=true;
    document.getElementById("juneinCorrect1").disabled=true;
    document.getElementById("juneinCorrect2").disabled=true;
    document.getElementById("juneinCorrect3").disabled=true;
    document.getElementById("juneinCorrect4").disabled=true;
}

document.getElementById("juneinCorrect1").addEventListener("click", incorrectC3);
document.getElementById("juneinCorrect2").addEventListener("click", incorrectC3);
document.getElementById("juneinCorrect3").addEventListener("click", incorrectC3);
document.getElementById("juneinCorrect4").addEventListener("click", incorrectC3);

function incorrectC3() {
    document.getElementById("result3.3").innerHTML = "";
    document.getElementById("error3.3").innerHTML = incorrectA + "<i>june.</i>";

    
    document.getElementById("juneCorrect").disabled=true;
    document.getElementById("juneinCorrect1").disabled=true;
    document.getElementById("juneinCorrect2").disabled=true;
    document.getElementById("juneinCorrect3").disabled=true;
    document.getElementById("juneinCorrect4").disabled=true;
}

document.getElementById("sepCorrect").addEventListener("click", correctC4);

function correctC4() {
    document.getElementById("result3.4").innerHTML = correctA;
    document.getElementById("error3.4").innerHTML = "";
    document.getElementById("quiz_ScoreC").innerHTML = quiz_ScoreC;

    document.getElementById("sepCorrect").disabled=true;
    document.getElementById("sepinCorrect1").disabled=true;
    document.getElementById("sepinCorrect2").disabled=true;
    document.getElementById("sepinCorrect3").disabled=true;
    document.getElementById("sepinCorrect4").disabled=true;
}

document.getElementById("sepinCorrect1").addEventListener("click", incorrectC4);
document.getElementById("sepinCorrect2").addEventListener("click", incorrectC4);
document.getElementById("sepinCorrect3").addEventListener("click", incorrectC4);
document.getElementById("sepinCorrect4").addEventListener("click", incorrectC4);

function incorrectC4() {
    document.getElementById("result3.4").innerHTML = "";
    document.getElementById("error3.4").innerHTML = incorrectA + "<i>september.</i>";

    document.getElementById("sepCorrect").disabled=true;
    document.getElementById("sepinCorrect1").disabled=true;
    document.getElementById("sepinCorrect2").disabled=true;
    document.getElementById("sepinCorrect3").disabled=true;
    document.getElementById("sepinCorrect4").disabled=true;
}

document.getElementById("mayCorrect").addEventListener("click", correctC5);

function correctC5() {
    document.getElementById("result3.5").innerHTML = correctA;
    document.getElementById("error3.5").innerHTML = "";
    document.getElementById("quiz_ScoreC").innerHTML = quiz_ScoreC++;

    document.getElementById("mayCorrect").disabled=true;
    document.getElementById("mayinCorrect1").disabled=true;
    document.getElementById("mayinCorrect2").disabled=true;
    document.getElementById("mayinCorrect3").disabled=true;
    document.getElementById("mayinCorrect4").disabled=true;
}

document.getElementById("mayinCorrect1").addEventListener("click", incorrectC5);
document.getElementById("mayinCorrect2").addEventListener("click", incorrectC5);
document.getElementById("mayinCorrect3").addEventListener("click", incorrectC5);
document.getElementById("mayinCorrect4").addEventListener("click", incorrectC5);

function incorrectC5() {
    document.getElementById("result3.5").innerHTML = "";
    document.getElementById("error3.5").innerHTML = incorrectA + "<i>may.</i>";

    document.getElementById("mayCorrect").disabled=true;
    document.getElementById("mayinCorrect1").disabled=true;
    document.getElementById("mayinCorrect2").disabled=true;
    document.getElementById("mayinCorrect3").disabled=true;
    document.getElementById("mayinCorrect4").disabled=true;
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

document.getElementById("flowerCorrect").addEventListener("click", correctD1);

function correctD1() {
    document.getElementById("result4.1").innerHTML = correctA;
    document.getElementById("error4.1").innerHTML = "";
    document.getElementById("quiz_ScoreD").innerHTML = quiz_ScoreD++;

    document.getElementById("flowerCorrect").disabled=true;
    document.getElementById("flowerinCorrect1").disabled=true;
    document.getElementById("flowerinCorrect2").disabled=true;
}

document.getElementById("flowerinCorrect1").addEventListener("click", incorrectD1);
document.getElementById("flowerinCorrect2").addEventListener("click", incorrectD1);

function incorrectD1() {
    document.getElementById("result4.1").innerHTML = "";
    document.getElementById("error4.1").innerHTML = incorrectA + "<i>flower.</i>";

    document.getElementById("flowerCorrect").disabled=true;
    document.getElementById("flowerinCorrect1").disabled=true;
    document.getElementById("flowerinCorrect2").disabled=true;
}

document.getElementById("yarnCorrect").addEventListener("click", correctD2);

function correctD2() {
    document.getElementById("result4.2").innerHTML = correctA;
    document.getElementById("error4.2").innerHTML = "";
    document.getElementById("quiz_ScoreD").innerHTML = quiz_ScoreD;

    document.getElementById("yarnCorrect").disabled=true;
    document.getElementById("yarninCorrect1").disabled=true;
    document.getElementById("yarninCorrect2").disabled=true;
}

document.getElementById("yarninCorrect1").addEventListener("click", incorrectD2);
document.getElementById("yarninCorrect2").addEventListener("click", incorrectD2);

function incorrectD2() {
    document.getElementById("result4.2").innerHTML = "";
    document.getElementById("error4.2").innerHTML = incorrectA + "<i>yarn.</i>";

    document.getElementById("yarnCorrect").disabled=true;
    document.getElementById("yarninCorrect1").disabled=true;
    document.getElementById("yarninCorrect2").disabled=true;
}

document.getElementById("plateCorrectSec").addEventListener("click", correctD3);

function correctD3() {
    document.getElementById("result4.3").innerHTML = correctA;
    document.getElementById("error4.3").innerHTML = "";
    document.getElementById("quiz_ScoreD").innerHTML = quiz_ScoreD++;

    document.getElementById("plateCorrectSec").disabled=true;
    document.getElementById("plateinCorrectFirst").disabled=true;
    document.getElementById("plateinCorrectSec").disabled=true;
}

document.getElementById("plateinCorrectSec").addEventListener("click", incorrectD3);
document.getElementById("plateinCorrectFirst").addEventListener("click", incorrectD3);

function incorrectD3() {
    document.getElementById("result4.3").innerHTML = "";
    document.getElementById("error4.3").innerHTML = incorrectA + "<i>plate.</i>";

    document.getElementById("plateCorrectSec").disabled=true;
    document.getElementById("plateinCorrectFirst").disabled=true;
    document.getElementById("plateinCorrectSec").disabled=true;
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

document.getElementById("paintCorrect").addEventListener("click", correctE1);

function correctE1() {
    document.getElementById("result5.1").innerHTML = correctA;
    document.getElementById("error5.1").innerHTML = "";
    document.getElementById("quiz_ScoreE").innerHTML = quiz_ScoreE++;

    document.getElementById("paintCorrect").disabled=true;
    document.getElementById("paintinCorrect1").disabled=true;
    document.getElementById("paintinCorrect2").disabled=true;
}

document.getElementById("paintinCorrect1").addEventListener("click", incorrectE1);
document.getElementById("paintinCorrect2").addEventListener("click", incorrectE1);

function incorrectE1() {
    document.getElementById("result5.1").innerHTML = "";
    document.getElementById("error5.1").innerHTML = incorrectA + "<i>paint.</i>";

    document.getElementById("paintCorrect").disabled=true;
    document.getElementById("paintinCorrect1").disabled=true;
    document.getElementById("paintinCorrect2").disabled=true;
}

document.getElementById("waveCorrect").addEventListener("click", correctE2);

function correctE2() {
    document.getElementById("result5.2").innerHTML = correctA;
    document.getElementById("error5.2").innerHTML = "";
    document.getElementById("quiz_ScoreE").innerHTML = quiz_ScoreE;

    document.getElementById("waveCorrect").disabled=true;
    document.getElementById("waveinCorrect1").disabled=true;
    document.getElementById("waveinCorrect2").disabled=true;
}

document.getElementById("waveinCorrect1").addEventListener("click", incorrectE2);
document.getElementById("waveinCorrect2").addEventListener("click", incorrectE2);

function incorrectE2() {
    document.getElementById("result5.2").innerHTML = "";
    document.getElementById("error5.2").innerHTML = incorrectA + "<i>wave.</i>";

    document.getElementById("waveCorrect").disabled=true;
    document.getElementById("waveinCorrect1").disabled=true;
    document.getElementById("waveinCorrect2").disabled=true;
}

document.getElementById("eatCorrect").addEventListener("click", correctE3);

function correctE3() {
    document.getElementById("result5.3").innerHTML = correctA;
    document.getElementById("error5.3").innerHTML = "";
    document.getElementById("quiz_ScoreE").innerHTML = quiz_ScoreE++;

    document.getElementById("eatCorrect").disabled=true;
    document.getElementById("eatinCorrect1").disabled=true;
    document.getElementById("eatinCorrect2").disabled=true;
}


document.getElementById("eatinCorrect1").addEventListener("click", incorrectE3);
document.getElementById("eatinCorrect2").addEventListener("click", incorrectE3);

function incorrectE3() {
    document.getElementById("result5.3").innerHTML = "";
    document.getElementById("error5.3").innerHTML = incorrectA + "<i>eat.</i>";

    document.getElementById("eatCorrect").disabled=true;
    document.getElementById("eatinCorrect1").disabled=true;
    document.getElementById("eatinCorrect2").disabled=true;
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

// Lopullisten pisteiden lasku. Jokaisen osion pistemäärät lasketaan yhteen ja tulostuu sille pistemäärälle kuuluva kommentti.

function SubmitTheQuiz() {

    let quiz_ScoreFinal = Number(document.getElementById("quiz_Score").innerHTML);
    let quiz_ScoreFinalB = Number(document.getElementById("quiz_ScoreB").innerHTML);
    let quiz_ScoreFinalC = Number(document.getElementById("quiz_ScoreC").innerHTML);
    let quiz_ScoreFinalD = Number(document.getElementById("quiz_ScoreD").innerHTML);
    let quiz_ScoreFinalE = Number(document.getElementById("quiz_ScoreE").innerHTML);

    let Final_Score = Number(quiz_ScoreFinal + quiz_ScoreFinalB + quiz_ScoreFinalC + quiz_ScoreFinalD + quiz_ScoreFinalE);

   if (Final_Score == 20) {
       document.getElementById("resultsfortheQuiz1").innerHTML = "</br><i> Mahtavaa, vastasit kaikkiin kysymyksiin oikein!</i> 20/20";
   } else if (Final_Score <= 19 && Final_Score >= 14) {
       document.getElementById("resultsfortheQuiz2").innerHTML = "</br><i> Hienoa työtä, kysymyksistä oikein oli </i>" + Final_Score + "/20.";
   } else if (Final_Score <= 13 && Final_Score >= 7) {
       document.getElementById("resultsfortheQuiz3").innerHTML = "</br>" + Final_Score + "/20 <i> vastauksista oli oikein. Harjoittelemalla sinäkin opit englannin kielen sanaston!</i>";
   } else {
       document.getElementById("resultsfortheQuiz4").innerHTML = "</br>" + Final_Score + "/20 <i> vastauksista oli oikein. Harjoittelemalla voit oppia mitä vain! </i>";
   }
}