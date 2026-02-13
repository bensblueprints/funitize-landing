// Canvas Animation System
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Animation themes with 18 different options (including cannabis themes)
const animationThemes = {
    confetti: {
        name: 'Confetti',
        emoji: '🎉',
        colors: ['#FFF500', '#FFD700', '#FFC107', '#00D9FF', '#A855F7'],
        type: 'shapes',
        count: 50
    },
    snow: {
        name: 'Snow',
        emoji: '❄️',
        colors: ['#ffffff', '#e3f2fd', '#bbdefb'],
        type: 'emoji',
        count: 80
    },
    hearts: {
        name: 'Hearts',
        emoji: '💖',
        colors: ['#FF6B9D', '#ff1744', '#f50057'],
        type: 'emoji',
        count: 40
    },
    roses: {
        name: 'Roses',
        emoji: '🌹',
        colors: ['#C44569', '#d32f2f', '#f44336'],
        type: 'emoji',
        count: 35
    },
    rain: {
        name: 'Rain',
        emoji: '💧',
        colors: ['#2196F3', '#00D9FF', '#42a5f5'],
        type: 'lines',
        count: 100
    },
    stars: {
        name: 'Stars',
        emoji: '⭐',
        colors: ['#FFC107', '#ffeb3b', '#fdd835'],
        type: 'emoji',
        count: 60
    },
    leaves: {
        name: 'Autumn Leaves',
        emoji: '🍂',
        colors: ['#ff6f00', '#f57c00', '#ef6c00'],
        type: 'emoji',
        count: 45
    },
    fireworks: {
        name: 'Fireworks',
        emoji: '🎆',
        colors: ['#FFF500', '#FFC107', '#00D9FF', '#A855F7', '#4caf50'],
        type: 'burst',
        count: 30
    },
    coins: {
        name: 'Money Coins',
        emoji: '💰',
        colors: ['#FFC107', '#ffd54f', '#ffecb3'],
        type: 'emoji',
        count: 50
    },
    butterflies: {
        name: 'Butterflies',
        emoji: '🦋',
        colors: ['#A855F7', '#e1bee7', '#ce93d8'],
        type: 'emoji',
        count: 30
    },
    flowers: {
        name: 'Cherry Blossoms',
        emoji: '🌸',
        colors: ['#FFF500', '#FFD700', '#FFC107'],
        type: 'emoji',
        count: 40
    },
    candies: {
        name: 'Candies',
        emoji: '🍬',
        colors: ['#FFF500', '#FFC107', '#00D9FF', '#A855F7'],
        type: 'emoji',
        count: 45
    },
    bubbles: {
        name: 'Bubbles',
        emoji: '🫧',
        colors: ['#e3f2fd', '#bbdefb', '#90caf9'],
        type: 'circles',
        count: 60
    },
    sparkles: {
        name: 'Sparkles',
        emoji: '✨',
        colors: ['#FFC107', '#ffeb3b', '#fff9c4'],
        type: 'emoji',
        count: 70
    },
    money: {
        name: 'Money Bills',
        emoji: '💵',
        colors: ['#4caf50', '#66bb6a', '#81c784'],
        type: 'emoji',
        count: 40
    },
    cannabisbuds: {
        name: 'Cannabis Buds',
        emoji: '🌿',
        colors: ['#4caf50', '#66bb6a', '#2e7d32'],
        type: 'emoji',
        count: 45
    },
    cannabisleaves: {
        name: 'Cannabis Leaves',
        emoji: '🍃',
        colors: ['#689F38', '#8BC34A', '#558B2F'],
        type: 'emoji',
        count: 50
    },
    waterbong: {
        name: 'Waterbongs',
        emoji: '🔬',
        colors: ['#42a5f5', '#1976d2', '#0d47a1'],
        type: 'emoji',
        count: 35
    }
};

let currentTheme = 'confetti';

// Particle class
class Particle {
    constructor(theme) {
        this.theme = animationThemes[theme];
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.size = Math.random() * 10 + 8;
        this.speedY = Math.random() * 2 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.color = this.theme.colors[Math.floor(Math.random() * this.theme.colors.length)];
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 4 - 2;
        this.opacity = Math.random() * 0.5 + 0.5;
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;

        // Reset position when particle goes off screen
        if (this.y > canvas.height) {
            this.y = -10;
            this.x = Math.random() * canvas.width;
        }
        if (this.x > canvas.width) {
            this.x = 0;
        }
        if (this.x < 0) {
            this.x = canvas.width;
        }
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.globalAlpha = this.opacity;

        if (this.theme.type === 'emoji') {
            // Draw emoji
            ctx.font = `${this.size * 2}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(this.theme.emoji, 0, 0);
        } else if (this.theme.type === 'shapes') {
            // Draw confetti shapes
            ctx.fillStyle = this.color;
            const shape = Math.floor(Math.random() * 3);
            if (shape === 0) {
                ctx.beginPath();
                ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
                ctx.fill();
            } else if (shape === 1) {
                ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            } else {
                ctx.beginPath();
                ctx.moveTo(0, -this.size / 2);
                ctx.lineTo(-this.size / 2, this.size / 2);
                ctx.lineTo(this.size / 2, this.size / 2);
                ctx.closePath();
                ctx.fill();
            }
        } else if (this.theme.type === 'lines') {
            // Draw rain lines
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, this.size * 2);
            ctx.stroke();
        } else if (this.theme.type === 'circles') {
            // Draw bubbles
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
            ctx.stroke();
        } else if (this.theme.type === 'burst') {
            // Draw firework bursts
            ctx.fillStyle = this.color;
            for (let i = 0; i < 5; i++) {
                const angle = (i * Math.PI * 2) / 5;
                const x = Math.cos(angle) * this.size;
                const y = Math.sin(angle) * this.size;
                ctx.beginPath();
                ctx.arc(x, y, 2, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        ctx.restore();
    }
}

// Particle array
let particlesArray = [];

function initParticles(theme) {
    particlesArray = [];
    const themeData = animationThemes[theme];
    for (let i = 0; i < themeData.count; i++) {
        particlesArray.push(new Particle(theme));
    }
}

// Initialize with confetti
initParticles(currentTheme);

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animate);
}

animate();

// Change theme function
function changeTheme(theme) {
    currentTheme = theme;
    initParticles(theme);

    // Update active button state
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-theme="${theme}"]`).classList.add('active');

    // Show notification
    showNotification(`${animationThemes[theme].name} activated!`);
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'theme-notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Create widget button HTML
const widgetHTML = `
    <div class="animation-widget">
        <button class="widget-toggle" id="widget-toggle">
            <span class="widget-icon">🎨</span>
            <span class="widget-text">Change Animation</span>
        </button>
        <div class="widget-panel" id="widget-panel">
            <div class="widget-header">
                <h3>Choose Your Animation</h3>
                <button class="widget-close" id="widget-close">✕</button>
            </div>
            <div class="widget-grid">
                ${Object.keys(animationThemes).map(key => `
                    <button class="theme-option ${key === 'confetti' ? 'active' : ''}" data-theme="${key}">
                        <span class="theme-emoji">${animationThemes[key].emoji}</span>
                        <span class="theme-name">${animationThemes[key].name}</span>
                    </button>
                `).join('')}
            </div>
        </div>
    </div>
`;

// Insert widget into page
document.body.insertAdjacentHTML('beforeend', widgetHTML);

// Widget functionality
const widgetToggle = document.getElementById('widget-toggle');
const widgetPanel = document.getElementById('widget-panel');
const widgetClose = document.getElementById('widget-close');

widgetToggle.addEventListener('click', () => {
    widgetPanel.classList.toggle('open');
});

widgetClose.addEventListener('click', () => {
    widgetPanel.classList.remove('open');
});

// Theme option clicks
document.querySelectorAll('.theme-option').forEach(btn => {
    btn.addEventListener('click', () => {
        const theme = btn.dataset.theme;
        changeTheme(theme);
        widgetPanel.classList.remove('open');
    });
});

// Close widget when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.animation-widget')) {
        widgetPanel.classList.remove('open');
    }
});

// Populate animations grid with video previews
const animationsGrid = document.getElementById('animations-grid');
const animationCount = 64;
const displayCount = 12;

const selectedAnimations = [];
while (selectedAnimations.length < displayCount) {
    const randomNum = Math.floor(Math.random() * animationCount) + 1;
    if (!selectedAnimations.includes(randomNum)) {
        selectedAnimations.push(randomNum);
    }
}

selectedAnimations.forEach((num, index) => {
    const card = document.createElement('div');
    card.className = 'animation-card';
    card.style.animationDelay = `${index * 0.1}s`;

    const video = document.createElement('video');
    video.className = 'animation-video';
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;

    const source = document.createElement('source');
    source.src = `assets/animations/${num}.mp4`;
    source.type = 'video/mp4';

    video.appendChild(source);

    const label = document.createElement('div');
    label.className = 'animation-label';
    label.textContent = `Animation ${num}`;

    card.appendChild(video);
    card.appendChild(label);
    animationsGrid.appendChild(card);

    card.addEventListener('mouseenter', () => {
        video.pause();
    });

    card.addEventListener('mouseleave', () => {
        video.play();
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .benefit-card, .step, .seasonal-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

document.querySelectorAll('.features-grid .feature-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.benefits-grid .benefit-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Easter egg: Click logo 5 times for fireworks
let logoClickCount = 0;
document.querySelector('.logo').addEventListener('click', (e) => {
    logoClickCount++;
    if (logoClickCount === 5) {
        e.preventDefault();
        changeTheme('fireworks');
        logoClickCount = 0;

        const message = document.createElement('div');
        message.textContent = '🎆 FIREWORKS ACTIVATED! 🎆';
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #FFF500, #FFD700);
            color: #1a1a2e;
            padding: 24px 48px;
            border-radius: 16px;
            font-size: 24px;
            font-weight: 700;
            font-family: 'Righteous', sans-serif;
            z-index: 9999;
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        `;
        document.body.appendChild(message);

        setTimeout(() => {
            message.style.opacity = '0';
            message.style.transition = 'opacity 0.5s';
            setTimeout(() => message.remove(), 500);
        }, 2000);
    }
});
