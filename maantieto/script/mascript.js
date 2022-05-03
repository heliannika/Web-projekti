// Tuomas Polvinen

// Kuvat palautteeksi oikeasta tai väärästä vastauksesta. Naamat Pixabaysta.
// https://pixabay.com/fi/illustrations/tunteita-emoji-hymi%c3%b6it%c3%a4-kuvakkeet-5153993/

const smile = '<img alt="smile" src="img/smile.png">';
const sad = '<img alt="sad" src="img/sad.png">';

// Ensimmäisen kysymyksen painikkeet

function suppa() {
    document.getElementById("yksi").innerHTML="";
    document.getElementById("palaute_yksi").innerHTML=
    "Vastasit oikein." + "<br/>" + "Supat ovat syntynyt jääkauden jälkeen jäämöykkyjen painaessa maahan kuopan.";
    document.getElementById("oikein1").innerHTML+=smile;
}

function harju() {
    document.getElementById("yksi").innerHTML="";
    document.getElementById("palaute_yksi").innerHTML=
    "Vastasit väärin." + "<br/>" + "Harju on pitkä ja usein mutkitteleva kohoumamuodostuma."
    + "<br/" + "Oikea vastaus on suppa.";
    document.getElementById("oikein1").innerHTML+=sad;
}

function vaara() {
    document.getElementById("yksi").innerHTML="";
    document.getElementById("palaute_yksi").innerHTML=
    "Vastasit väärin." + "<br/>" + "Vaara Itä-Suomessa käytetty nimitys kivisille mäille."
    + "<br/" + "Oikea vastaus on suppa.";
    document.getElementById("oikein1").innerHTML+=sad;
}

function tunturi() {
    document.getElementById("yksi").innerHTML="";
    document.getElementById("palaute_yksi").innerHTML=
    "Vastasit väärin." + "<br/>" + "Tunturiksi kutsutaan Lapissa kohoavia vuoria."
    + "<br/" + "Oikea vastaus on suppa.";
    document.getElementById("oikein1").innerHTML+=sad;
}


// Kysymyksen kaksi painikkeet.

function malta() {
    document.getElementById("kaksi").innerHTML=
    "Vastasit väärin." + "<br/>" + "Malta on eurooppalainen saarivaltio Välimerellä."
    + "<br/" + "Oikea vastaus on Sambia.";
    document.getElementById("oikein2").innerHTML+=sad;
}

function saudi() {
    document.getElementById("kaksi").innerHTML=
    "Vastasit väärin." + "<br/>" + "Saudi-Arabia on valtio Lähi-idässä."
    + "<br/" + "Oikea vastaus on Sambia.";
    document.getElementById("oikein2").innerHTML+=sad;
}

function tasmania() {
    document.getElementById("kaksi").innerHTML=
    "Vastasit väärin." + "<br/>" + "Tasmania on Australiaan kuuluva saari."
    + "<br/" + "Oikea vastaus on Sambia.";
    document.getElementById("oikein2").innerHTML+=sad;
}

function sambia() {
    document.getElementById("kaksi").innerHTML=
    "Vastasit väärin." + "<br/>" + "Sambia on sisämaavaltio eteläisessä Afrikassa. Väkiluku on n. 11,8 miljoonaa.";
    document.getElementById("oikein2").innerHTML+=smile;
}


//Kysymyksen kolme painikkeet.

function koivu() {
    document.getElementById("kolme").innerHTML=
    "Vastasit väärin." + "<br/>" + "Koivu on Suomen yleisin lehtipuu, mutta vasta kolmenneksi yleisin puulaji."
    + "<br/" + "Oikea vastaus on mänty.";
    document.getElementById("oikein3").innerHTML+=sad;
}

function mänty() {
    document.getElementById("kolme").innerHTML=
    "Vastasit oikein." + "<br/>" + "Mänty on Suomen yleisin puulaji, toiseksi yleisin on kuusi.";
    document.getElementById("oikein3").innerHTML+=smile;
}

function kataja() {
    document.getElementById("kolme").innerHTML=
    "Vastasit väärin." + "<br/>" + "Kataja on puu, vaikka moni mieltää sen pensaaksi."
    + "<br/" + "Oikea vastaus on mänty.";
    document.getElementById("oikein3").innerHTML+=sad;
}

function vaahtera() {
    document.getElementById("kolme").innerHTML=
    "Vastasit väärin." + "<br/>" + "Vaahteroita kasvaa lähinnä eteläisessä osassa maata."
    + "<br/" + "Oikea vastaus on mänty.";
    document.getElementById("oikein3").innerHTML+=sad;
}


// Kysymys neljän painikkeet. 

function norja() {
    document.getElementById("neljä").innerHTML=
        "Vastasit väärin." + "<br/>" + 
        "Norja on Suomen pohjoinen rajanaapuri." + "<br/>" + 
        "Oikea vastaus on Latvia.";
        document.getElementById("oikein4").innerHTML+=sad;
}

function ruotsi() {
    document.getElementById("neljä").innerHTML=
    "Vastasit väärin." + "<br/>" + 
    "Ruotsi on Suomen läntinen rajanaapuri." + "<br/>" + 
    "Oikea vastaus on Latvia.";
    document.getElementById("oikein4").innerHTML+=sad;
}

function venäjä() {
    document.getElementById("neljä").innerHTML=
    "Vastasit väärin." + "<br/>" + 
    "Venäjä on Suomen itäinen rajanaapuri." + "<br/>" + 
    "Oikea vastaus on Latvia.";
    document.getElementById("oikein4").innerHTML+=sad;
}

function latvia() {
    document.getElementById("neljä").innerHTML=
    "Vastasit oikein." + "<br/>" + 
    "Latvia on Baltian maa Viron eteläpuolella. Suomen kanssa sillä ei ole yhteistä rajaa" + "<br/>";
    document.getElementById("oikein4").innerHTML+=smile;
}

// Kysymyksen viisi painikkeet. 

function mörkö() {
    document.getElementById("viisi").innerHTML=
    "Vastasit väärin." + "<br/>" + 
    "Mörönmonttu on visan tekijän keksintöä." + "<br/>" + 
    "Oikea vastaus on hiidenkirnu."
    document.getElementById("oikein5").innerHTML+=sad;
}

function noita() {
    document.getElementById("viisi").innerHTML=
    "Vastasit väärin." + "<br/>" + 
    "Noidanpata on visan tekijän keksintöä." + "<br/>" + 
    "Oikea vastaus on hiidenkirnu."
    document.getElementById("oikein5").innerHTML+=sad;
}

function peikko() {
    document.getElementById("viisi").innerHTML=
    "Vastasit väärin." + "<br/>" + 
    "Peikonreikä on visan tekijän keksintöä." + "<br/>" + 
    "Oikea vastaus on hiidenkirnu."
    document.getElementById("oikein5").innerHTML+=sad;
}

function hiisi() {
    document.getElementById("viisi").innerHTML=
    "Vastasit oikein!" + "<br/>" + 
    "Hiidenkirnu syntyi jääkauden aikana kysymyksessä kuvatulla tavalla." + "<br/>" + 
    "Muut vastausvaihtoehdot ovat visan tekijän mielikuvituksen tuotetta."
    document.getElementById("oikein5").innerHTML+=smile;
}