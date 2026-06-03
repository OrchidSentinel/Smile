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
