const sndIcon = document.querySelector("#sound");
const music = document.querySelector("audio");

let isPlaying = false;

sndIcon.onclick = function() {
    if (isPlaying) {
        music.pause();
    } else {
        music.play();
    }
    
    isPlaying = !isPlaying;
};
