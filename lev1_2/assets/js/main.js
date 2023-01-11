const age = document.getElementById("age");
let ageToday = document.querySelector("span");

function calcAge() {
  let input = age.value;
  let currentYear = 2023;
  ageToday.innerHTML = currentYear - age.value;
}
