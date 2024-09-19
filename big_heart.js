document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('fireworks').style.display = 'block';
        createFireworks();
        setTimeout(() => {
            document.getElementById('message').style.display = 'block';
        }, 3000); // Show the message 3 seconds after fireworks start
    }, 2000); // 2 seconds delay before fireworks start
});

function createFireworks() {
    const fireworksContainer = document.getElementById('fireworks');
    const numExplosions = 30;

    for (let i = 0; i < numExplosions; i++) {
        const explosion = document.createElement('div');
        explosion.classList.add('explosion');
        explosion.style.top = `${Math.random() * 100}vh`;
        explosion.style.left = `${Math.random() * 100}vw`;
        explosion.style.animationDelay = `${Math.random() * 1.5}s`;
        fireworksContainer.appendChild(explosion);
    }
}