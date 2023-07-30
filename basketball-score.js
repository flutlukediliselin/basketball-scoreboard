let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScoreAddOne = document.getElementById("home-add1");
let homeScoreAddTwo = document.getElementById("home-add2");
let homeScoreAddThree = document.getElementById("home-add3");

let guestScoreAddOne = document.getElementById("guest-add1");
let guestScoreAddTwo = document.getElementById("guest-add2");
let guestScoreAddThree = document.getElementById("guest-add3");


homeScoreAddOne.addEventListener("click", function () {
  homeScoreEl.textContent++;
});

homeScoreAddTwo.addEventListener("click", function () {
  homeScoreEl.textContent = Number (homeScoreEl.textContent) + 2;
});

homeScoreAddThree.addEventListener("click", function () {
  homeScoreEl.textContent = Number (homeScoreEl.textContent) + 3;
});


guestScoreAddOne.addEventListener("click", function () {
  guestScoreEl.textContent++;
});

guestScoreAddTwo.addEventListener("click", function () {
  guestScoreEl.textContent = Number(guestScoreEl.textContent) + 2;
});

guestScoreAddThree.addEventListener("click", function () {
  guestScoreEl.textContent = Number(guestScoreEl.textContent) + 3;
});

