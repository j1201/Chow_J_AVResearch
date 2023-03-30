// dark theme
const darkModeButton = document.getElementById("dark-mode-btn");

darkModeButton.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// importing hyperaudio 
let minimizedMode = false;
let autoScroll = true;
let doubleClick = false;
let webMonetization = true;
let playOnClick = true;

if (HyperaudioLite) {
  new HyperaudioLite("hypertranscript", "hyperplayer", minimizedMode, autoScroll, doubleClick, webMonetization, playOnClick);
}

// Importing plyr player 
const players = Array.from(document.querySelectorAll('.plyr-player')).map((p) => new Plyr('p', 
{ focused: false, global: true }
));

window.player = players;

