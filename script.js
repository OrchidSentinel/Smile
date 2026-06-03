function checkPassword() {
const pass = document.getElementById("password").value.trim().toUpperCase();
const result = document.getElementById("result");

if (pass === "HALLE53") {
window.location.href = "archive1.html";
} else {
result.innerHTML = "ACCESS DENIED // DAS LÄCHELN HAT DICH GESEHEN";
result.style.color = "#ff0000";
}
}

function sample(id) {
const result = document.getElementById("sampleResult");

if (id === "A") {
result.innerHTML = "PROBE A // Menschlich // Angst hoch // Adrenalin instabil";
}

if (id === "B") {
result.innerHTML = "PROBE B // Vampirisch // Blutaktivität normal // Durstreaktion vorhanden";
}

if (id === "C") {
result.innerHTML = "PROBE C // Unbekannt // Kein Durst // Kein Schmerz // Kein Puls // Lächeln aktiv";
}

if (id === "D") {
result.innerHTML = "PROBE D // Kontaminiert // Spuren von Pilzprotein // nicht stabil";
}

result.style.color = "#ff2a2a";
}

function checkArchivePassword() {
const pass = document.getElementById("password").value.trim().toUpperCase();
const result = document.getElementById("result");

if (pass === "DURST") {
window.location.href = "archive2.html";
} else {
result.innerHTML = "FALSCH // DIE PROBE REAGIERT NICHT";
result.style.color = "#ff0000";
}
}

let cameraSequence = [];

function cameraAction(action) {
const text = document.getElementById("cameraText");
const result = document.getElementById("cameraResult");

if (action === "reset") {
cameraSequence = [];
text.innerHTML =
"█ █ █ █ █ █<br>7 1 8 0<br>2 0 4<br>5 3<br>█ █ █ █ █ █";
result.innerHTML = "FEED RESET // ERINNERUNG GELÖSCHT";
return;
}

cameraSequence.push(action);

const sequence = cameraSequence.join("-");

if (sequence === "zoom") {
text.innerHTML =
"█ █ █ MOT █ █<br>7 1 8 0<br>2 0 4<br>5 3<br>SMILE IS THE WAY";
result.innerHTML = "ZOOM AKTIV // ZU VIELE DETAILS // NICHT ALLES IST WAHR";
}

else if (sequence === "zoom-focus") {
text.innerHTML =
"MOTEL █ █ █<br>VENTURA █ █<br>ROOM █ █ █<br>SMILE IS THE WAY<br>THE BLOOD OPENS";
result.innerHTML = "BILD GESCHÄRFT // DER KÖDER WIRD SICHTBAR";
}

else if (sequence === "zoom-focus-light") {
text.innerHTML =
"MOTEL // VENTURA PLACE<br>ROOM // 204<br>FRAME // 241<br>SUBJECT // STILL SMILING";
result.innerHTML = "BELICHTUNG STABIL // DER RAUM WURDE GEFUNDEN";
}

else {
cameraSequence = [];
text.innerHTML =
"FEED CORRUPTED<br>FALSCHE REIHENFOLGE<br>█ █ █ █ █ █<br>RESET REQUIRED";
result.innerHTML = "FEHLER // DIE AUFNAHME HAT ZURÜCKGELÄCHELT";
}

result.style.color = "#ff2a2a";
}

function checkArchive2Password() {
const pass = document.getElementById("password").value.trim().toUpperCase();
const result = document.getElementById("result");

if (pass === "ROOM204" || pass === "ZIMMER204") {
window.location.href = "archive3.html";
} else {
result.innerHTML = "FALSCH // DIE TÜR BLEIBT ZU";
result.style.color = "#ff0000";
}
}
