let headline = document.querySelector("h1");
let styleBtn = document.querySelector("button");
let resetBtn = document.querySelector("button:nth-of-type(2)");
let beautyBtn = document.querySelector("button:nth-of-type(3)");

// add style class to headline
styleBtn.addEventListener("click", function changeHeadline() {
  headline.classList.add("beautifyMe");
});
// remove style class to headline
resetBtn.addEventListener("click", function resetHeadline() {
  headline.classList.remove("beautifyMe");
});

// toggle between class and no class to headline
beautyBtn.addEventListener("click", function toggleMe() {
  headline.classList.toggle("beautifyMe");
});
