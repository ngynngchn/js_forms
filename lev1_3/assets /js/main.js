const firstAge = document.getElementById("firstAge");
const secondAge = document.getElementById("secondAge");

let ageDifference = document.querySelector("span");
let button = document.querySelector("button");

function calcAge() {
  let result = firstAge.value - secondAge.value;
  console.log(result);
  ageDifference.innerHTML = result;
}

button.addEventListener("click", calcAge);
