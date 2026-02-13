# Funitize Landing Page - Complete Documentation

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Features & Functionality](#features--functionality)
3. [File Structure](#file-structure)
4. [Deployment Guide](#deployment-guide)
5. [Holiday Detection System](#holiday-detection-system)
6. [Animation System](#animation-system)
7. [Configuration](#configuration)
8. [Troubleshooting](#troubleshooting)
9. [Maintenance](#maintenance)

---

## 📖 Project Overview

**Project Name:** Funitize Landing Page
**Purpose:** Marketing landing page for Funitize Shopify app
**Tech Stack:** HTML, CSS, JavaScript, Nginx, Docker
**Deployment:** Hetzner VPS with Docker
**Domain:** funitize.com
**Pricing:** $11.95/year (first 1000 sign-ups)

### Key Features
- ✅ 48-item media showcase (images + videos)
- ✅ Dynamic holiday animation suggestions
- ✅ Email signup with Happy mascot
- ✅ 11 blog posts (SEO optimized)
- ✅ Interactive animation demos
- ✅ Seasonal animation cards
- ✅ Mobile-first responsive design
- ✅ All fonts: Outfit

### Brand Colors
- **Primary Blue:** #5170FF
- **Secondary Pink:** #FF66C4
- **Dark:** #1a1a2e
- **Gray:** #6b7280

---

## 🎯 Features & Functionality

### 1. Media Showcase Grid
**Location:** Homepage, after hero section
**Items:** 48 media items (29 images + 19 videos)
**Layout:** 4 columns on desktop, 1 column on mobile
**Pattern:** Alternating blue/pink backgrounds (no same colors touching)

**Desktop:**
- No gaps, seamless grid
- object-fit: cover for full coverage

**Mobile:**
- 16px gaps and padding
- 16:9 aspect ratio
- object-fit: contain (shows full images)
- 16px border radius

### 2. Dynamic Holiday Suggestion Button
**Location:** Between seasonal animations and final CTA
**Functionality:**
- Auto-detects current/upcoming holidays
- Cycles through 3 suggestions every 4 seconds
- Smooth fade transitions
- Holiday-specific emojis and CTAs

**Animations:**
- Box: Popping scale effect (2s loop)
- Emoji: Bouncing with rotation (1.5s loop)
- Text: Wiggle rotation (3s loop)
- Button: Pulsing shadow (2s loop)
- Sparkle: 360° spin (2s loop)

**Current Active:** Valentine's Day (Feb 14)
- Emoji: 💖
- Suggestions rotate between 3 variations
- CTA: "Perfect timing for Valentine's Day 💝"

### 3. Email Signup Section
**Location:** After final CTA, before footer
**Elements:**
- Happy mascot image with popup animation
- Email input field with validation
- Submit button with state changes
- Coming soon apps preview

**Validation:**
- Email regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Shows error for invalid emails
- Success state: "✨ You're In! Check Your Email"

**Coming Soon Apps:**
- 🎁 Gift Wrapper Pro
- ⚡ Speed Booster
- 🎨 Color Popz
- 🔔 Smart Notifications
- 📊 Analytics Dashboard

### 4. Interactive Animation Showcase
**Location:** Blog page
**Cards:** 5 animation types
1. **Confetti Burst** (🎊🎉✨)
2. **Floating Hearts** (❤️💕💖)
3. **Snowfall** (❄️❄️❄️❄️)
4. **Fireworks** (💥✨🎆)
5. **Sparkle Trail** (✨⭐💫)

**Hover Effects:**
- Transform: scale(1.05) + translateY(-12px)
- Box shadow intensifies
- Gradient border appears
- Particles animate

### 5. Seasonal Animation Cards
**Location:** Homepage, seasonal section
**Cards:** 6 seasons
1. **Valentine's Day** - Floating hearts
2. **Halloween** - Bouncing pumpkins
3. **Christmas** - Snowfall
4. **Summer** - Spinning sun
5. **Black Friday** - Firework explosions
6. **St. Patrick's** - Spinning clovers + rainbow

**Hover Behavior:**
- Activates particle animations
- Each card has 3-4 animated particles
- Custom keyframe animations per season

### 6. Footer Structure
**Layout:** 5 columns
1. **Funitize (Brand)** - Logo, tagline
2. **Product** - Features, Animations, How It Works, Download App
3. **Support** - Contact Us, Documentation, FAQ
4. **Legal** - Privacy Policy, Terms of Service, Refund Policy
5. **Resources** - Blog, Animation Library, Shopify App Store

**Social Media Links:**
- Twitter/X
- Facebook
- Instagram
- YouTube

---

## 📁 File Structure

```
funitize-landing/
├── index.html                    # Main landing page
├── blog.html                     # Blog index with interactive animations
├── contact.html                  # Contact page
├── docs.html                     # Documentation page
├── faq.html                      # FAQ page
├── privacy.html                  # Privacy policy
├── terms.html                    # Terms of service
├── refund.html                   # Refund policy
│
├── styles.css                    # All styles (1500+ lines)
├── script.js                     # JavaScript (holiday detection, forms)
│
├── assets/
│   ├── funitize-logo.jpg        # Logo file
│   ├── happy-mascot.jpg         # Happy character
│   ├── media/
│   │   ├── images/              # 29 images
│   │   │   ├── Funitize website - 1.png
│   │   │   ├── Funitize website - 2.png
│   │   │   └── ... (27 more)
│   │   └── videos/              # 24 videos
│   │       ├── Funatize Graphic Animations.mp4
│   │       ├── Get Funitize Today on the Shopify App Store.mp4
│   │       └── ... (22 more)
│
├── blog-posts/
│   ├── ultimate-guide-falling-animations.html
│   ├── psychology-of-motion-design.html
│   ├── seasonal-animations-boost-sales.html
│   ├── case-study-black-friday.html
│   ├── mobile-animations-best-practices.html
│   ├── accessibility-animations.html
│   ├── shopify-animations-2024.html
│   ├── custom-animations-tutorial.html
│   ├── animation-performance-optimization.html
│   ├── conversion-rate-animations.html
│   └── future-of-ecommerce-animations.html
│
├── Dockerfile                    # Docker image config
├── docker-compose.yml            # Docker Compose setup
├── nginx.conf                    # Nginx configuration
├── .dockerignore                 # Files to exclude from image
├── deploy-hetzner.sh            # Deployment automation script
├── HETZNER-DEPLOY.md            # Deployment guide
└── MASTER-DOCUMENTATION.md      # This file
```

---

## 🚀 Deployment Guide

### Prerequisites
1. Hetzner VPS server (Cloud or dedicated)
2. Docker and Docker Compose installed
3. Domain pointed to server IP
4. SSH access to server
5. Port 80 and 443 open

### Step 1: Prepare Hetzner Server

SSH into your Hetzner server:

```bash
ssh root@YOUR_SERVER_IP
```

Install Docker:

```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Install Docker Compose plugin
apt-get update
apt-get install docker-compose-plugin -y

# Verify installation
docker --version
docker compose version
```

Create deployment directory:

```bash
mkdir -p /opt/funitize-landing
cd /opt/funitize-landing
```

### Step 2: Deploy via Script (Recommended)

On your **local machine**:

```bash
cd /Users/blackhat01/funitize-landing

# Edit deploy-hetzner.sh and set:
# SERVER_IP="YOUR_HETZNER_IP"
# DOMAIN="funitize.com"

# Make executable
chmod +x deploy-hetzner.sh

# Run deployment
./deploy-hetzner.sh
```

The script will:
1. Build Docker image locally
2. Save image as tar.gz
3. Upload to Hetzner
4. Load image on server
5. Start container with docker-compose

### Step 3: Manual Deployment (Alternative)

If script fails, deploy manually:

**On local machine:**
```bash
# Build image
docker build -t funitize-landing:latest .

# Save image
docker save funitize-landing:latest | gzip > funitize-landing.tar.gz

# Upload to server
scp funitize-landing.tar.gz root@YOUR_IP:/tmp/
scp docker-compose.yml root@YOUR_IP:/opt/funitize-landing/
```

**On Hetzner server:**
```bash
# Load image
cd /tmp
docker load < funitize-landing.tar.gz

# Start container
cd /opt/funitize-landing
docker compose up -d

# Verify running
docker ps | grep funitize
```

### Step 4: Configure Nginx Reverse Proxy + SSL

**On Hetzner server:**

```bash
# Install Nginx and Certbot
apt-get install nginx certbot python3-certbot-nginx -y

# Create Nginx config
cat > /etc/nginx/sites-available/funitize << 'EOF'
server {
    listen 80;
    server_name funitize.com www.funitize.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF

# Enable site
ln -s /etc/nginx/sites-available/funitize /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default  # Remove default site

# Test configuration
nginx -t

# Reload Nginx
systemctl reload nginx

# Get SSL certificate (Let's Encrypt)
certbot --nginx -d funitize.com -d www.funitize.com --non-interactive --agree-tos -m ben@advancedmarketing.co

# Verify SSL
curl -I https://funitize.com
```

### Step 5: Configure DNS

**In Cloudflare (or your DNS provider):**

```
Type: A
Name: @
Value: YOUR_HETZNER_IP
Proxy: Off (orange cloud disabled)

Type: A
Name: www
Value: YOUR_HETZNER_IP
Proxy: Off
```

**Note:** Disable Cloudflare proxy during SSL setup, can re-enable after.

### Step 6: Verify Deployment

```bash
# Check container status
docker ps

# View logs
docker logs funitize-landing

# Check Nginx
systemctl status nginx

# Test site
curl http://localhost:8080
curl https://funitize.com
```

---

## 🎄 Holiday Detection System

### How It Works

The JavaScript in `script.js` contains a holiday detection function that:
1. Gets current date
2. Loops through holiday definitions
3. Calculates days until each holiday
4. Returns holiday if within range (before/after days)
5. Updates suggestion content every 4 seconds

### Holiday Definitions

```javascript
const holidays = [
    { name: 'Valentine\'s Day', month: 2, day: 14, range: 21, emoji: '💖', color: '#FF66C4' },
    { name: 'St. Patrick\'s Day', month: 3, day: 17, range: 14, emoji: '🍀', color: '#10b981' },
    { name: 'Easter', month: 4, day: 9, range: 21, emoji: '🐰', color: '#FF66C4' },
    { name: 'Mother\'s Day', month: 5, day: 14, range: 14, emoji: '👩‍👧', color: '#FF66C4' },
    { name: 'Summer', month: 6, day: 21, range: 60, emoji: '☀️', color: '#FFB800' },
    { name: 'Independence Day', month: 7, day: 4, range: 14, emoji: '🎆', color: '#5170FF' },
    { name: 'Halloween', month: 10, day: 31, range: 30, emoji: '🎃', color: '#FF6B00' },
    { name: 'Thanksgiving', month: 11, day: 23, range: 14, emoji: '🦃', color: '#FFB800' },
    { name: 'Black Friday', month: 11, day: 24, range: 7, emoji: '🎆', color: '#000000' },
    { name: 'Christmas', month: 12, day: 25, range: 45, emoji: '🎄', color: '#10b981' },
    { name: 'New Year', month: 1, day: 1, range: 14, emoji: '🎉', color: '#FFB800' }
];
```

### Suggestion Variations

Each holiday has 2-3 different suggestions that rotate:

**Valentine's Day Example:**
```javascript
suggestions["Valentine's Day"] = [
    {
        text: "Hey, try Valentine's Day hearts!",
        cta: "Perfect timing for Valentine's Day 💝",
        button: "Try Valentine's Animations"
    },
    {
        text: "Love is in the air! 💕",
        cta: "Falling hearts are HOT right now 🔥",
        button: "Get Valentine's Effects"
    },
    {
        text: "Make them fall in love 😍",
        cta: "Heart animations convert like crazy!",
        button: "Add Heart Animations"
    }
];
```

### Adding New Holidays

1. Edit `script.js`
2. Add to `holidays` array:
```javascript
{ name: 'Your Holiday', month: X, day: Y, range: Z, emoji: '🎉', color: '#HEXCODE' }
```
3. Add suggestions:
```javascript
suggestions["Your Holiday"] = [
    { text: "...", cta: "...", button: "..." }
];
```

### Range Explained

- **range: 21** = Show 21 days before and 21 days after the holiday
- **range: 7** = Show 7 days before and 7 days after
- Allows promotions to start early and run after the date

---

## 🎨 Animation System

### CSS Animations Used

#### 1. Suggestion Box Animations
```css
/* Popping effect */
@keyframes suggestion-pop {
    0%, 100% { transform: scale(1) translateY(0); }
    50% { transform: scale(1.05) translateY(-10px); }
}

/* Emoji bounce */
@keyframes emoji-bounce {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
}

/* Text wiggle */
@keyframes text-wiggle {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-2deg); }
    75% { transform: rotate(2deg); }
}

/* Button pulse */
@keyframes button-pulse {
    0%, 100% { box-shadow: 0 8px 24px rgba(81, 112, 255, 0.4); }
    50% { box-shadow: 0 12px 32px rgba(255, 102, 196, 0.6); }
}

/* Sparkle spin */
@keyframes sparkle-spin {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.3); }
    100% { transform: rotate(360deg) scale(1); }
}
```

#### 2. Seasonal Card Animations

**Valentine's Hearts:**
```css
@keyframes heart-float-1 {
    0%, 100% { transform: translate(10%, 80%) rotate(0deg); opacity: 0; }
    10%, 90% { opacity: 1; }
    50% { transform: translate(30%, -20%) rotate(15deg); }
}
```

**Christmas Snowfall:**
```css
@keyframes snow-fall-1 {
    0% { transform: translate(0, -20%) rotate(0deg); opacity: 0; }
    10% { opacity: 1; }
    100% { transform: translate(-20%, 120%) rotate(360deg); opacity: 1; }
}
```

**Black Friday Fireworks:**
```css
@keyframes firework-explode-1 {
    0% { transform: translate(30%, 50%) scale(0); opacity: 0; }
    30% { opacity: 1; }
    50% { transform: translate(30%, 20%) scale(2); opacity: 1; }
    100% { transform: translate(30%, 10%) scale(3); opacity: 0; }
}
```

### Performance Optimization

- Use `will-change: transform` for animated elements
- Prefer `transform` and `opacity` (GPU accelerated)
- Avoid animating `width`, `height`, `top`, `left`
- Use `requestAnimationFrame` for JavaScript animations
- Limit particles to 3-4 per card

---

## ⚙️ Configuration

### Docker Configuration

**Dockerfile:**
- Base image: `nginx:alpine` (minimal, secure)
- Size: ~50MB
- Copies all website files to `/usr/share/nginx/html/`
- Custom nginx.conf for optimization

**docker-compose.yml:**
```yaml
version: '3.8'
services:
  funitize-web:
    build: .
    container_name: funitize-landing
    ports:
      - "8080:80"
    restart: unless-stopped
    environment:
      - TZ=UTC
```

### Nginx Configuration

**Key Settings:**
```nginx
# Gzip compression
gzip on;
gzip_types text/plain text/css text/xml text/javascript application/javascript;

# Cache static assets (1 year)
location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|mp4)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# No cache for HTML
location / {
    add_header Cache-Control "no-cache";
}

# Security headers
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
```

### Email Form Configuration

**Current Behavior:**
- Frontend validation only
- Shows success message after 1 second
- No actual email sending (placeholder)

**To Connect Real Email:**

Option 1 - Add Netlify Forms:
```html
<form name="email-signup" method="POST" data-netlify="true">
    <input type="email" name="email" required>
    <button type="submit">Subscribe</button>
</form>
```

Option 2 - Add Backend API:
```javascript
fetch('/api/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email })
});
```

Option 3 - Mailchimp Integration:
```html
<form action="https://yourlist.us1.list-manage.com/subscribe/post" method="POST">
    <input type="email" name="EMAIL" required>
    <button type="submit">Subscribe</button>
</form>
```

---

## 🔧 Troubleshooting

### Docker Issues

**Container won't start:**
```bash
# Check logs
docker logs funitize-landing

# Check if port is in use
netstat -tulpn | grep 8080

# Remove and recreate
docker compose down
docker compose up -d
```

**Image build fails:**
```bash
# Check Dockerfile syntax
docker build --no-cache -t funitize-landing .

# Check disk space
df -h

# Clean up old images
docker system prune -a
```

**Permission denied errors:**
```bash
# Add user to docker group
sudo usermod -aG docker $USER
newgrp docker
```

### Nginx Issues

**502 Bad Gateway:**
```bash
# Check if container is running
docker ps

# Check Nginx config
nginx -t

# Check Nginx logs
tail -f /var/log/nginx/error.log

# Restart Nginx
systemctl restart nginx
```

**SSL Certificate Issues:**
```bash
# Renew certificate
certbot renew --nginx

# Force renewal
certbot renew --force-renewal

# Check expiration
certbot certificates
```

### DNS Issues

**Site not loading:**
```bash
# Check DNS propagation
nslookup funitize.com
dig funitize.com

# Flush DNS (local)
sudo dnsmasq -k

# Wait for propagation (up to 48 hours)
```

### Performance Issues

**Slow page load:**
```bash
# Check Nginx gzip is enabled
curl -H "Accept-Encoding: gzip" -I https://funitize.com

# Monitor container resources
docker stats funitize-landing

# Check server resources
htop
```

---

## 🛠️ Maintenance

### Regular Tasks

**Weekly:**
- Check Docker container status: `docker ps`
- Review Nginx logs: `tail -100 /var/log/nginx/access.log`
- Check disk space: `df -h`

**Monthly:**
- Update Docker images: `docker compose pull && docker compose up -d`
- Review SSL certificate expiration: `certbot certificates`
- Backup website files: `tar -czf funitize-backup-$(date +%Y%m%d).tar.gz /opt/funitize-landing`

**Quarterly:**
- Update server packages: `apt-get update && apt-get upgrade`
- Review and update holiday dates
- Test all forms and animations
- Performance audit with Lighthouse

### Updating Content

**Update Holiday Suggestions:**
```bash
# On Hetzner server
cd /opt/funitize-landing
nano script.js  # Edit holiday data
docker compose restart
```

**Update Media Files:**
```bash
# Upload new files
scp new-image.png root@SERVER:/opt/funitize-landing/assets/media/images/

# Restart container
ssh root@SERVER 'cd /opt/funitize-landing && docker compose restart'
```

**Update Styles:**
```bash
# Edit locally
nano styles.css

# Redeploy
./deploy-hetzner.sh
```

### Monitoring

**Check Container Health:**
```bash
docker ps
docker logs --tail 50 funitize-landing
docker stats funitize-landing
```

**Check Website Uptime:**
```bash
# Simple check
curl -I https://funitize.com

# With monitoring
# Setup: https://uptimerobot.com
```

**Analytics:**
- Add Google Analytics to track visitors
- Monitor Nginx access logs for traffic patterns
- Use Cloudflare Analytics if proxied

### Backup Strategy

**Automated Backup Script:**
```bash
#!/bin/bash
# /opt/scripts/backup-funitize.sh

DATE=$(date +%Y%m%d)
BACKUP_DIR="/opt/backups"
SITE_DIR="/opt/funitize-landing"

mkdir -p $BACKUP_DIR

# Backup files
tar -czf $BACKUP_DIR/funitize-$DATE.tar.gz $SITE_DIR

# Keep only last 7 days
find $BACKUP_DIR -name "funitize-*.tar.gz" -mtime +7 -delete

echo "Backup completed: funitize-$DATE.tar.gz"
```

**Setup Cron:**
```bash
# Edit crontab
crontab -e

# Add line (runs daily at 3 AM)
0 3 * * * /opt/scripts/backup-funitize.sh
```

---

## 📊 Performance Metrics

**Target Metrics:**
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1
- Time to Interactive: <3.0s
- Page Size: <5MB

**Optimization Checklist:**
- ✅ Gzip compression enabled
- ✅ Static asset caching (1 year)
- ✅ Image optimization (WebP format recommended)
- ✅ Minified CSS and JavaScript
- ✅ Lazy loading for videos
- ✅ CDN usage (optional via Cloudflare)

---

## 🔐 Security Best Practices

**Implemented:**
- ✅ Security headers (X-Frame-Options, XSS Protection, nosniff)
- ✅ HTTPS with Let's Encrypt SSL
- ✅ Docker container isolation
- ✅ Regular security updates
- ✅ No sensitive data in codebase

**Recommended:**
- Setup fail2ban for SSH protection
- Configure UFW firewall (allow 22, 80, 443)
- Regular security audits
- Monitor logs for suspicious activity
- Keep server packages updated

---

## 📞 Support & Contact

**Owner:** Benjamin Tate
**Email:** ben@advancedmarketing.co
**Company:** Advanced Marketing Limited (Hong Kong)

**Server Details:**
- Provider: Hetzner
- Container: Docker
- Web Server: Nginx
- SSL: Let's Encrypt

**Documentation Files:**
- `MASTER-DOCUMENTATION.md` - This file
- `HETZNER-DEPLOY.md` - Deployment guide
- `README.md` - Quick start (if exists)

---

## 🎯 Quick Reference Commands

```bash
# === Local Development ===
# Build Docker image
docker build -t funitize-landing .

# Run locally
docker run -d -p 8080:80 funitize-landing

# === Hetzner Deployment ===
# Deploy via script
./deploy-hetzner.sh

# SSH to server
ssh root@YOUR_IP

# === Container Management ===
# Start container
docker compose up -d

# Stop container
docker compose down

# Restart container
docker compose restart

# View logs
docker logs funitize-landing

# Live log stream
docker logs -f funitize-landing

# === Nginx Management ===
# Test config
nginx -t

# Reload config
systemctl reload nginx

# Restart Nginx
systemctl restart nginx

# View access logs
tail -f /var/log/nginx/access.log

# View error logs
tail -f /var/log/nginx/error.log

# === SSL Management ===
# Renew certificates
certbot renew

# Force renew
certbot renew --force-renewal

# Check certificates
certbot certificates

# === Monitoring ===
# Container stats
docker stats funitize-landing

# Disk usage
df -h

# Server resources
htop

# === Maintenance ===
# Update system
apt-get update && apt-get upgrade -y

# Clean Docker
docker system prune -a

# Backup site
tar -czf funitize-backup.tar.gz /opt/funitize-landing
```

---

**Last Updated:** February 14, 2026
**Version:** 1.0
**Status:** Production Ready 🚀
