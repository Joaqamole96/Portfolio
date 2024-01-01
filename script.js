const playlist = document.getElementsByClassName('playlist');
const button = document.getElementsByClassName('btn_music')

button.addEventListener('click', toggleMusic);

function toggleMusic() {
    if (playlist.paused) {
        playlist.play();
        button.textContent = '⏸ Pause';
    } else {
        play.pause();
        button.textContent = '▶️ Play';
    }
}