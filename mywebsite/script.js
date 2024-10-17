const music = document.getElementById('background-music');
const toggleButton = document.getElementById('toggle-music');
let isMusicPlaying = false;

toggleButton.addEventListener('click', () => {
    if (isMusicPlaying) {
        music.pause();
        toggleButton.textContent = '🔇';
    } else {
        music.play();
        toggleButton.textContent = '🔊';
    }
    isMusicPlaying = !isMusicPlaying;
});

// Optional: Start playing music when the page loads
// Uncomment the next line if you want the music to start automatically
// music.play();