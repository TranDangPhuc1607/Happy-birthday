document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('fireworks').style.display = 'block';
        createFireworks();
        document.getElementById('sparkles').style.display = 'block';
        createSparkles();
        document.getElementById('ripples').style.display = 'block';
        createRipples();

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

function createSparkles() {
    const sparklesContainer = document.getElementById('sparkles');
    const numSparkles = 50;

    for (let i = 0; i < numSparkles; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.top = `${Math.random() * 100}vh`;
        sparkle.style.left = `${Math.random() * 100}vw`;
        sparkle.style.animationDelay = `${Math.random() * 2}s`;
        sparklesContainer.appendChild(sparkle);
    }
}

function createRipples() {
    const ripplesContainer = document.getElementById('ripples');
    const numRipples = 20;

    for (let i = 0; i < numRipples; i++) {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        ripple.style.top = `${Math.random() * 100}vh`;
        ripple.style.left = `${Math.random() * 100}vw`;
        ripple.style.animationDelay = `${Math.random() * 2.5}s`;
        ripplesContainer.appendChild(ripple);
    }
}
