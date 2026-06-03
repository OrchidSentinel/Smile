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

let cameraStage = 0;

function adjustCamera(step) {
const text = document.getElementById("cameraText");
const result = document.getElementById("cameraResult");

if (step === 1 && cameraStage === 0) {
cameraStage = 1;
text.innerHTML = "█ █ █ 7 1 8 █ // VENTURA █ █";
result.innerHTML = "HELLIGKEIT KORRIGIERT // EIN TEIL DER PLZ WURDE SICHTBAR";
} else if (step === 2 && cameraStage === 1) {
cameraStage = 2;
text.innerHTML = "█ █ █ 7 1 8 0 // VENTURA █ █";
result.innerHTML = "KONTRAST KORRIGIERT // PLZ WIEDERHERGESTELLT";
} else if (step === 3 && cameraStage === 2) {
cameraStage = 3;
text.innerHTML = "PLZ 7180 // VENTURA PLACE // ZIMMER 204";
result.innerHTML = "BILD STABILISIERT // ORTUNG ABGESCHLOSSEN";
} else {
result.innerHTML = "FEHLER // FALSCHE REIHENFOLGE // FEED ZERFÄLLT";
}

result.style.color = "#ff2a2a";
}

function checkArchive2Password() {
const pass = document.getElementById("password").value.trim().toUpperCase();
const result = document.getElementById("result");

if (pass === "ZIMMER204") {
window.location.href = "archive3.html";
} else {
result.innerHTML = "FALSCH // DIE TÜR BLEIBT ZU";
result.style.color = "#ff0000";
}
}
