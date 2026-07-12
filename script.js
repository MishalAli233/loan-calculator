function calculateLoan(){

let amount = Number(document.getElementById("amount").value);
let rate = Number(document.getElementById("rate").value);
let years = Number(document.getElementById("years").value);

let monthlyRate = rate / 100 / 12;
let months = years * 12;

let payment = amount * monthlyRate * Math.pow(1 + monthlyRate, months) /
(Math.pow(1 + monthlyRate, months) - 1);

document.getElementById("result").innerHTML =
"Monthly Payment: " + payment.toFixed(2);

}
