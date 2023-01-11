let num = document.getElementById("num");
let result = document.getElementById("output");

function doubleMe() {
  let input = num.value;
  result.innerHTML = num.value + " verdoppelt ergeben " + num.value * 2;
}
