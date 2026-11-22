document.addEventListener("DOMContentLoaded", () => {
  let player = document.getElementById("player");
  let container = document.getElementById("main-container");
  let startBtn = document.getElementById("start-btn");
  let startBox = document.getElementById("start-box");
  let revealBox = document.getElementById("reveal-box");
  let eerieSfx = document.getElementById("eerie-sfx");

  if (startBtn) {
    startBtn.addEventListener("click", (e) => {
      if (player && typeof player.play === "function") {
        player.play().catch(() => {});
      }

      if (startBox) {
        startBox.style.display = "none";
      }

      if (revealBox) {
        revealBox.classList.add("visible");
      }

      if (eerieSfx && typeof eerieSfx.play === "function") {
        eerieSfx.playbackRate = 1.5;
        eerieSfx.currentTime = 0;
        eerieSfx.play().catch(() => {});
      }

      if (container) {
        container.classList.add("playing");
      }
    });
  }
});

let statue = document.getElementById("statue");
let statueReveal = document.getElementById("statue-reveal");
let statueSound = document.getElementById("statue-sound");

if (statue) {
    statue.addEventListener("click", () => {

        statueReveal.classList.add("visible");
        statueSound.play();

    });
}

let mirror = document.getElementById("mirror");
let mirrorReveal = document.getElementById("mirror-reveal");
let mirrorMessage = document.getElementById("mirror-message");
let mirrorSound = document.getElementById("mirror-sound");

let messages = [
    "You are not defined by your past, but by the choices you make moving forward.",

    "Sometimes finding yourself means taking a path you never expected.",

    "The answers you seek may already be within you.",

    "Your destiny is not something you find. It is something you create.",

    "Trust yourself, even when the path ahead is unclear."
];

if (mirror) {
    mirror.addEventListener("click", () => {

        let random = Math.floor(Math.random() * messages.length);

        mirrorMessage.innerHTML = messages[random];

        mirrorReveal.classList.add("visible");

        mirrorSound.play();

    });
}