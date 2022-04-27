// Tuomas Polvinen

// Kuvat palautteeksi oikeasta vastauksesta. Ruusut Pixabaysta.
const ruusu_yksi = '<img alt="ruusu1" src="img/ruusu1.png">';
const ruusu_kaksi = '<img alt="ruusu2" src="img/ruusu2.png">';
const ruusu_kolme = '<img alt="ruusu3" src="img/ruusu3.png">';
const ruusu_neljä = '<img alt="ruusu4" src="img/ruusu4.png">';
const ruusu_viisi = '<img alt="ruusu5" src="img/ruusu5.png">';


function kys1() {
    
    if (document.getElementById("suppa").checked==true) {
        document.getElementById("yksi").innerHTML="";
        document.getElementById("palaute_yksi").innerHTML="Hienoa, vastasit oikein!" + "<br/>" + "Suppa on jääkauden jälkeen jään sulamisen seurauksena syntynyt kuoppa." + "<br/>";
        document.getElementById("oikein").innerHTML=ruusu_yksi;
    }else {
        document.getElementById("yksi").innerHTML=""; 
        document.getElementById("palaute_yksi").innerHTML="Vastasit väärin." + "<br/>" + "Oikea vastaus on suppa." + "<br/>" + "Muut vaihtoehdot ovat mäkimäisiä muodostumia eli kohoumia."
    }
    
} 

function kys2() {
    
    if (document.getElementById("sambia").checked==true) {
        document.getElementById("kaksi").innerHTML="Hienoa, vastasit oikein! Sambia on pieni valtio Afrikan itäosassa.";  
        document.getElementById("oikein").innerHTML+=ruusu_kaksi;
    }else {
        document.getElementById("kaksi").innerHTML="Vastasit väärin. Oikea vastaus on Sambia. Malta on saarivaltio Euroopassa Välimerellä, Saudi-Arabia on valtio Lähi-idässä ja Tasmania on Australialle kuuluva saari."; 
    }
    
} 

function kys3() {
    
    if (document.getElementById("mänty").checked==true) {
        document.getElementById("kolme").innerHTML="Hienoa, vastasit oikein! Havupuu mänty on Suomen yleisin puulaji";   
        document.getElementById("oikein").innerHTML+=ruusu_kolme;
    }
    else {
        document.getElementById("kolme").innerHTML="Vastasit väärin"; 
    }
    
} 

function kys4() {
    
    if (document.getElementById("latvia").checked==true) {
        document.getElementById("neljä").innerHTML="Hienoa, vastasit oikein! Latvia on Baltian maa Viron eteläpuolella. Suomen kanssa sillä ei ole yhteistä rajaa.";   
        document.getElementById("oikein").innerHTML+=ruusu_neljä;
    }else {
        document.getElementById("neljä").innerHTML="Vastasit väärin. Oikea vastaus on Latvia. Muista maista Venäjä on Suomen itänaapuri, Ruotsi länsinaapuri ja Norjan kanssa Suomella on yhteistä rajaa pohjoisessa."; 
    }
    
} 

function kys5() {
    
    if (document.getElementById("hiisi").checked==true) {
        document.getElementById("viisi").innerHTML="Hienoa, vastasit oikein!";  
        document.getElementById("oikein").innerHTML+=ruusu_viisi;
    }else {
        document.getElementById("viisi").innerHTML="Vastasit väärin. Oikea vastaus on hiidenkirnu. Muut vaihtoehdot ovat visan tekijän mielikuvituksen tuotteita." + "<br>"; 
    }
    
} 
/*
function bra() {
    document.getElementById("kuusi").innerHTML="Hienoa, vastasit täysin oikein!";
    
}

function dålig() {
    document.getElementById("kuusi").innerHTML="Koetapa uudestaan."
}

function surkea() {
    document.getElementById("kuusi").innerHTML="Tämän enempää et voi olla väärässä!"
}
*/

function palaute() {
    
}