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
  "█ █ █ █ █ █<br>PLZ // 7 █ 7 █<br>STREET // E C L █ █ █ █<br>FLOOR // █<br>DESTINATION // █ █ █ █ █ █ █ █ █<br>█ █ █ █ █ █";

result.innerHTML = "FEED RESET // DIE FAHRT BEGINNT VON VORN";
result.style.color = "#ff2a2a";
return;
```

}

cameraSequence.push(action);

const sequence = cameraSequence.join("-");

if (sequence === "blood") {
text.innerHTML =
"BLUTSPUR ERKANNT<br>PLZ // 7 █ 7 3<br>STREET // E C L █ █ █ █<br>FLOOR // █<br>DESTINATION // █ █ █ █ █ █ █ █ █";

```
result.innerHTML =
  "BLUTSPUR AKTIV // DIE LETZTE ZAHL WURDE SICHTBAR";
```

}

else if (sequence === "blood-elevator") {
text.innerHTML =
"AUFZUGLOG WIEDERHERGESTELLT<br>PLZ // 7073<br>STREET // ECLIPSE █████████<br>FLOOR // 7<br>DESTINATION // █ █ █ █ █ █ █ █ █";

```
result.innerHTML =
  "AUFZUGLOG AKTIV // ETAGE 7 WURDE NIE GEDRÜCKT";
```

}

else if (sequence === "blood-elevator-shadow") {
text.innerHTML =
"SCHATTEN ISOLIERT<br>PLZ // 7073<br>STREET // ECLIPSE BOULEVARD<br>FLOOR // 7<br>DESTINATION // P E █ █ █ █ █ █ █";

```
result.innerHTML =
  "ZWEITER SCHATTEN ERKANNT // ER STAND SCHON OBEN";
```

}

else if (sequence === "blood-elevator-shadow-audio") {
text.innerHTML =
"FEED WIEDERHERGESTELLT<br>PLZ // 7073<br>ECLIPSE BOULEVARD<br>FLOOR // 7<br>DESTINATION // PENTHOUSE";

```
result.innerHTML =
  "AUDIO REKONSTRUIERT // LETZTES WORT: PENTHOUSE";
```

}

else {
cameraSequence = [];

```
text.innerHTML =
  "FEED CORRUPTED<br>FALSCHE REIHENFOLGE<br>DER AUFZUG HÄLT NICHT MEHR<br>RESET REQUIRED";

result.innerHTML =
  "FEHLER // ETWAS HAT DIE REKONSTRUKTION BEMERKT";
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
result.innerHTML = "FALSCH // DIE SIEBTE ETAGE ANTWORTET NICHT";
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

function checkArchive4Password() {
const pass = document.getElementById("password").value.trim().toUpperCase();
const result = document.getElementById("result");

if (
pass === "TOTERREFLEX" ||
pass === "TOTER REFLEX" ||
pass === "DEADREFLEX" ||
pass === "DEAD REFLEX"
) {
window.location.href = "archive5.html";
} else {
result.innerHTML = "FALSCH // DER BEFUND IST UNVOLLSTÄNDIG";
result.style.color = "#ff0000";
}
}

let mindSequence = [];
let testOnePassed = false;
let testTwoPassed = false;
let testThreePassed = false;

function mindStep(word) {
const display = document.getElementById("mindDisplay");
const result = document.getElementById("mindResult");

mindSequence.push(word);
display.innerHTML = "SEQUENZ // " + mindSequence.join(" → ");

const seq = mindSequence.join("-");

if (seq === "PULS") {
result.innerHTML = "PULS // FEHLT, ABER SUBJEKT REAGIERT";
}

else if (seq === "PULS-LICHT") {
result.innerHTML = "LICHT // KEINE SCHUTZREAKTION";
}

else if (seq === "PULS-LICHT-BLUT") {
result.innerHTML = "BLUT // ZIEHT SICH ZUSAMMEN";
}

else if (seq === "PULS-LICHT-BLUT-LACHEN") {
result.innerHTML = "TEST 01 BESTANDEN // DER KÖRPER LÜGT NICHT";
testOnePassed = true;
}

else {
mindSequence = [];
testOnePassed = false;
display.innerHTML = "SEQUENZ // leer";
result.innerHTML = "FALSCHE REIHENFOLGE // DER REFLEX STIRBT";
}

result.style.color = "#ff2a2a";
}

function mindReset() {
mindSequence = [];
testOnePassed = false;
document.getElementById("mindDisplay").innerHTML = "SEQUENZ // leer";
document.getElementById("mindResult").innerHTML = "RESET // DAS MUSTER WURDE GELÖSCHT";
}

function truthTest(choice) {
const result = document.getElementById("truthResult");

if (choice === "B") {
result.innerHTML = "TEST 02 BESTANDEN // SMILE SUCHT NUR EINEN TRÄGER";
testTwoPassed = true;
} else {
result.innerHTML = "FALSCH // DAS KLINGT ZU MENSCHLICH";
testTwoPassed = false;
}

result.style.color = "#ff2a2a";
}

function echoTest() {
const input = document.getElementById("echoInput").value.trim().toUpperCase();
const result = document.getElementById("echoResult");

if (input === "ESSENZ") {
result.innerHTML = "TEST 03 BESTANDEN // ESSENZ BLEIBT";
testThreePassed = true;
} else {
result.innerHTML = "FALSCH // DAS ECHO ANTWORTET NICHT";
testThreePassed = false;
}

result.style.color = "#ff2a2a";
}

function checkArchive5Password() {
const pass = document.getElementById("password").value.trim().toUpperCase();
const result = document.getElementById("result");

if (!testOnePassed || !testTwoPassed || !testThreePassed) {
result.innerHTML = "ZUGRIFF VERWEIGERT // TESTS UNVOLLSTÄNDIG";
result.style.color = "#ff0000";
return;
}

if (
pass === "NERVENREST" ||
pass === "NERVEN REST" ||
pass === "RESTNERV" ||
pass === "REST NERV"
) {
window.location.href = "archive6.html";
} else {
result.innerHTML = "FALSCH // DAS MD HAT DEN LETZTEN BEGRIFF NOCH NICHT BESTÄTIGT";
result.style.color = "#ff0000";
}
}
