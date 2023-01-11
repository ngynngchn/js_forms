let plusOne = document.getElementById("plusOne");
let minusOne = document.getElementById("minusOne");
let plusTen = document.getElementById("plusTen");
let minusTen = document.getElementById("minusTen");
let plus100 = document.getElementById("plus100");
let minus100 = document.getElementById("minus100");
let double = document.getElementById("double");
let reset = document.getElementById("reset");

let currentString = document.querySelector("p");

plusOne.addEventListener("click", function increment() {
  currentString.innerHTML++;
});
minusOne.addEventListener("click", function decrement() {
  currentString.innerHTML--;
});

// needs to be turned into a number
plusTen.addEventListener("click", function addTen() {
  currentString.innerHTML = parseFloat(currentString.innerHTML) + 10;
});
minusTen.addEventListener("click", function subTen() {
  currentString.innerHTML = parseFloat(currentString.innerHTML) - 10;
});
plus100.addEventListener("click", function add100() {
  currentString.innerHTML = parseFloat(currentString.innerHTML) + 100;
});
minus100.addEventListener("click", function sub100() {
  currentString.innerHTML = parseFloat(currentString.innerHTML) - 100;
});
double.addEventListener("click", function multiplyByTwo() {
  currentString.innerHTML *= 2;
});
reset.addEventListener("click", function reset() {
  currentString.innerHTML = 0;
});
