function val(){return document.getElementById("password").value.trim().toUpperCase().replace(/\s+/g,"")}
function out(id,msg){const e=document.getElementById(id);e.innerHTML=msg;e.style.color="#ff2a8a"}

function checkPassword(){
if(val()==="HALLE53"){location.href="archive1.html"}else{out("result","ACCESS DENIED // SMILE IST NICHT DER SCHLÜSSEL :)")}
}

function sample(id){
const r={
A:"PROBE A // Menschlich // Panik hoch // Lächeln künstlich",
B:"PROBE B // Vampirisch // Durst stabil // Blut reagiert normal",
C:"PROBE C // Unbekannt // Kein Durst // Kein Schmerz // Kein Puls // Lächeln aktiv",
D:"PROBE D // Pilzprotein // instabil // Köder",
E:"PROBE E // Regenbogenfilm im Blut // keine DNA // Essenzspur"
};
out("sampleResult",r[id]);
}

function checkArchivePassword(){
if(val()==="KEINDURST"||val()==="DURST"){location.href="archive2.html"}else{out("result","FALSCH // DIE PROBE LÄCHELT WEITER")}
}

let route=[];
function routePick(x){
route.push(x);
document.getElementById("routeDisplay").innerHTML="ROUTE // "+route.join(" → ");
const s=route.join("-");
if(s==="STRAND")out("routeResult","STRAND // NUR WASSER // KEIN LACHEN // FALSCHER ANFANG");
else if(s==="STRAND-KIRCHE")out("routeResult","KIRCHE // BEICHTE OHNE STIMME // EINE ZAHL: 7");
else if(s==="STRAND-KIRCHE-CONTINENTAL")out("routeResult","CONTINENTAL // AUFZUGLOG BESCHÄDIGT // 7073");
else if(s==="STRAND-KIRCHE-CONTINENTAL-PENTHOUSE"){out("routeResult","RICHTIG // 7073 // ECLIPSE BOULEVARD // EBENE 7 // PENTHOUSE");}
else{route=[];document.getElementById("routeDisplay").innerHTML="ROUTE // gelöscht";out("routeResult","FALSCHE SPUR // DIE KARTE HAT ZURÜCKGELÄCHELT")}
}
function routeReset(){route=[];document.getElementById("routeDisplay").innerHTML="ROUTE // leer";out("routeResult","RESET // DIE STADT VERGISST")}

function checkArchive2Password(){
if(val()==="PENTHOUSE"){location.href="archive3.html"}else{out("result","FALSCH // DIE SIEBTE ETAGE ANTWORTET NICHT")}
}

function glassChoice(id){
const r={
A:"GLAS I // leer // Durst",
B:"GLAS II // leer // Angst",
C:"GLAS III // leer // Schuld",
D:"GLAS IV // leer // Schmerz",
E:"GLAS V // leer // Blut",
F:"GLAS VI // leer // Lachen",
G:"GLAS VII // unberührt // keine Blutreste // ESSENZ"
};
out("glassResult",r[id]);
}
function checkArchive3Password(){
if(val()==="ESSENZ"){location.href="archive4.html"}else{out("result","FALSCH // DAS SIEBTE GLAS BLEIBT VERSCHLOSSEN")}
}

let med=[];
function medPick(x){
med.push(x);
document.getElementById("medDisplay").innerHTML="TESTS // "+med.join(" → ");
const s=med.join("-");
if(s==="PULS")out("medResult","PULS // fällt aus // Subjekt bleibt wach");
else if(s==="PULS-LICHT")out("medResult","LICHT // Pupillen schützen nicht");
else if(s==="PULS-LICHT-BLUT")out("medResult","BLUT // gerinnt nicht // zieht sich zusammen");
else if(s==="PULS-LICHT-BLUT-WORT"){out("medResult","BEGRIFF SMILE // Reflex startet // Diagnose: TOTER REFLEX");}
else{med=[];document.getElementById("medDisplay").innerHTML="TESTS // gelöscht";out("medResult","FALSCHE TESTREIHE // BEFUND UNBRAUCHBAR")}
}
function checkArchive4Password(){
if(val()==="TOTERREFLEX"){location.href="archive5.html"}else{out("result","FALSCH // DER BEFUND IST UNVOLLSTÄNDIG")}
}

let hard=[];let h1=false,h2=false,h3=false;
function hardPick(x){
hard.push(x);
document.getElementById("hardDisplay").innerHTML="MUSTER // "+hard.join(" → ");
const s=hard.join("-");
if(s==="PD")out("hardResult","PD // Akte erwähnt keine Tat // nur Zeugen");
else if(s==="PD-FIB")out("hardResult","FIB // Projektname gelöscht // Smile bleibt");
else if(s==="PD-FIB-DOJ")out("hardResult","DOJ // keine Anklage möglich // kein Täter");
else if(s==="PD-FIB-DOJ-MD"){h1=true;out("hardResult","MUSTER BESTANDEN // WENN NIEMAND TÄTER IST, IST ES EIN TRÄGER");}
else{hard=[];h1=false;document.getElementById("hardDisplay").innerHTML="MUSTER // gelöscht";out("hardResult","FALSCH // DIE BEHÖRDEN SPRECHEN NICHT IN DIESER REIHENFOLGE")}
}
function liePick(x){if(x==="B"){h2=true;out("lieResult","WAHR // SMILE BRAUCHT KEINEN KÖRPER, NUR EINEN TRÄGER")}else{h2=false;out("lieResult","LÜGE // ZU EINFACH")}}
function echoCheck(){const e=document.getElementById("echo").value.trim().toUpperCase().replace(/\s+/g,"");if(e==="NICHTS"){h3=true;out("echoResult","ECHO AKZEPTIERT // NERVENREST BLEIBT")}else{h3=false;out("echoResult","FALSCH // DAS ECHO LACHT")}}
function checkArchive5Password(){
if(!h1||!h2||!h3){out("result","ZUGRIFF VERWEIGERT // TESTS UNVOLLSTÄNDIG");return}
if(val()==="HUMANLABS"){location.href="archive6.html"}else{out("result","FALSCH // DER LETZTE ORT IST KEIN MENSCHLICHER ORT")}
}
