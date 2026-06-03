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

```
text.innerHTML =
  "█ █ █ █ █ █<br>7 0 7 3<br>ECL █ █ █ █ █<br>LEVEL █<br>█ █ █ █ █ █";

result.innerHTML = "FEED RESET // ERINNERUNG GELÖSCHT";
result.style.color = "#ff2a2a";
return;
```

}

cameraSequence.push(action);

const sequence = cameraSequence.join("-");

if (sequence === "zoom") {
text.innerHTML =
"█ █ █ ECL █ █<br>7 0 7 3<br>ECLIP █ █ █<br>LEVEL 7<br>SMILE IS THE WAY";

```
result.innerHTML =
  "ZOOM AKTIV // DIE STRASSE BEGINNT SICH ZU ERINNERN";
```

}

else if (sequence === "zoom-focus") {
text.innerHTML =
"PLZ // 7073<br>ECLIPSE ███████<br>LEVEL // 7<br>████HOUSE<br>THE BLOOD OPENS";

```
result.innerHTML =
  "BILD GESCHÄRFT // DER KÖDER WIRD SICHTBAR";
```

}

else if (sequence === "zoom-focus-light") {
text.innerHTML =
"PLZ // 7073<br>ECLIPSE BOULEVARD<br>LEVEL // 7<br>PENTHOUSE";

```
result.innerHTML =
  "AUFNAHME WIEDERHERGESTELLT // DAS LÄCHELN WARTETE OBEN";
```

}

else {
cameraSequence = [];

```
text.innerHTML =
  "FEED CORRUPTED<br>FALSCHE REIHENFOLGE<br>█ █ █ █ █ █<br>RESET REQUIRED";

result.innerHTML =
  "FEHLER // DIE AUFNAHME HAT ZURÜCKGELÄCHELT";
```

}

result.style.color = "#ff2a2a";
}

function checkArchive2Password() {
  const pass = document.getElementById("password").value.trim().toUpperCase();
  const result = document.getElementById("result");

  if (pass === "PENTHOUSE") {
    window.location.href = "archive3.html";
  } else {
    result.innerHTML = "FALSCH // DIE HÖHE ANTWORTET NICHT";
    result.style.color = "#ff0000";
  }
}

function glassChoice(id) {
const result = document.getElementById("glassResult");

if (id === "A") {
result.innerHTML = "GLAS I // leer // Blutgruppe unbekannt // Durstreaktion normal";
}

if (id === "B") {
result.innerHTML = "GLAS II // leer // Spuren von Adrenalin // Panik vor Einnahme";
}

if (id === "C") {
result.innerHTML = "GLAS III // leer // vampirische Enzyme erkannt";
}

if (id === "D") {
result.innerHTML = "GLAS IV // leer // Fremdblut // keine Besonderheiten";
}

if (id === "E") {
result.innerHTML = "GLAS V // leer // Pilzprotein instabil // Probe zerfallen";
}

if (id === "F") {
result.innerHTML = "GLAS VI // leer // Lächelreaktion nachweisbar";
}

if (id === "G") {
result.innerHTML = "GLAS VII // unberührt // keine Blutreste // nur Essenz";
}

result.style.color = "#ff2a2a";
}

function checkArchive3Password() {
const pass = document.getElementById("password").value.trim().toUpperCase();
const result = document.getElementById("result");

if (pass === "ESSENZ") {
window.location.href = "archive4.html";
} else {
result.innerHTML = "FALSCH // DAS SIEBTE GLAS BLEIBT VERSCHLOSSEN";
result.style.color = "#ff0000";
}
}
