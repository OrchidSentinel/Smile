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
