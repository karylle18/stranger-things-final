var pageBody = document.body;
var toggleButton = document.getElementById("upsideToggle");
var wall = document.getElementById("bulbs");
var lights = [];
var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var searchBox = document.getElementById("search");
var cards = document.querySelectorAll("[data-name]");
var countText = document.getElementById("count");

function setUpside(isOn) {
  if (isOn) {
    pageBody.classList.add("upside");
    toggleButton.textContent = "Back to Hawkins";
    toggleButton.setAttribute("aria-pressed", "true");
    localStorage.setItem("upside", "yes");
  } else {
    pageBody.classList.remove("upside");
    toggleButton.textContent = "Enter the Upside Down";
    toggleButton.setAttribute("aria-pressed", "false");
    localStorage.setItem("upside", "no");
  }
}

function switchTheme() {
  if (pageBody.classList.contains("upside")) {
    setUpside(false);
  } else {
    setUpside(true);
  }
}

function lightUp(index) {
  if (index >= lights.length) {
    return;
  }
  lights[index].classList.add("on");
  setTimeout(function () {
    lights[index].classList.remove("on");
    lightUp(index + 1);
  }, 420);
}

function buildLights() {
  var colors = ["#ff4d4d", "#ffd23f", "#4da3ff", "#8bd450", "#ff7a2f", "#b68cff"];
  var message = "RIGHT HERE";
  for (var i = 0; i < message.length; i++) {
    var letter = message.charAt(i);
    var bulb = document.createElement("span");
    if (letter === " ") {
      bulb.className = "bulb gap";
    } else {
      bulb.className = "bulb";
      bulb.textContent = letter;
      bulb.style.setProperty("--c", colors[i % colors.length]);
    }
    wall.appendChild(bulb);
  }
  lights = wall.querySelectorAll(".bulb:not(.gap)");
}

function filterCards() {
  var text = searchBox.value.trim().toLowerCase();
  var shown = 0;
  for (var i = 0; i < cards.length; i++) {
    var name = cards[i].getAttribute("data-name").toLowerCase();
    if (name.indexOf(text) !== -1) {
      cards[i].classList.remove("hidden");
      shown = shown + 1;
    } else {
      cards[i].classList.add("hidden");
    }
  }
  if (shown > 0) {
    countText.textContent = shown + " of " + cards.length + " characters";
  } else {
    countText.textContent = 'No character matches "' + searchBox.value + '". Try a first name.';
  }
}

if (localStorage.getItem("upside") === "yes") {
  setUpside(true);
} else {
  setUpside(false);
}
toggleButton.addEventListener("click", switchTheme);

if (wall) {
  buildLights();
  if (reduceMotion) {
    for (var n = 0; n < lights.length; n++) {
      lights[n].classList.add("on");
    }
  } else {
    lightUp(0);
    wall.addEventListener("click", function () {
      lightUp(0);
    });
  }
}

if (searchBox) {
  searchBox.addEventListener("input", filterCards);
}
