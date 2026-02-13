# Funitize Landing - Hetzner Docker Deployment

## 🎯 Features Added

### Dynamic Holiday Animation Suggestions
- ✅ Detects current/upcoming holidays automatically
- ✅ Valentine's Day promotion active (Feb 14)
- ✅ Cycles through suggestions every 4 seconds
- ✅ Animated popping, bouncing button
- ✅ Holiday-specific CTAs and emojis
- ✅ All fonts changed to Outfit

## 🚀 Quick Deploy to Hetzner

### Prerequisites
1. Hetzner server with Docker installed
2. Domain pointed to your Hetzner server IP
3. SSH access to your server

### Step 1: Configure Your Server IP

Edit `deploy-hetzner.sh` and replace:
```bash
SERVER_IP="YOUR_HETZNER_IP"  # Your actual IP
DOMAIN="funitize.com"        # Your actual domain
```

### Step 2: Prepare Hetzner Server

SSH into your server and run:

```bash
# Install Docker and Docker Compose (if not already installed)
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Install Docker Compose
apt-get update
apt-get install docker-compose-plugin

# Create deployment directory
mkdir -p /opt/funitize-landing
```

### Step 3: Deploy

From your local machine:

```bash
cd /Users/blackhat01/funitize-landing
./deploy-hetzner.sh
```

### Step 4: Configure Nginx Reverse Proxy (Optional)

If you want SSL and domain mapping, install Nginx on your Hetzner server:

```bash
# On Hetzner server
apt-get install nginx certbot python3-certbot-nginx

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
nginx -t
systemctl reload nginx

# Get SSL certificate
certbot --nginx -d funitize.com -d www.funitize.com
```

## 🐳 Manual Docker Commands

### Build Image
```bash
docker build -t funitize-landing .
```

### Run Container
```bash
docker run -d \
  --name funitize-landing \
  -p 8080:80 \
  --restart unless-stopped \
  funitize-landing
```

### Using Docker Compose
```bash
docker-compose up -d
```

### View Logs
```bash
docker logs funitize-landing
```

### Stop Container
```bash
docker-compose down
```

### Update Deployment
```bash
docker-compose down
docker build -t funitize-landing .
docker-compose up -d
```

## 📁 File Structure

```
funitize-landing/
├── Dockerfile              # Docker image configuration
├── docker-compose.yml      # Docker Compose setup
├── nginx.conf             # Nginx web server config
├── deploy-hetzner.sh      # Automated deployment script
├── index.html             # Main landing page
├── styles.css             # All styles
├── script.js              # JavaScript (holiday detection)
├── assets/                # Images, videos, media
└── blog/                  # Blog posts
```

## 🎨 Holiday Detection Logic

The site automatically detects holidays and shows relevant animations:

### Supported Holidays
- ❤️ Valentine's Day (Feb 14)
- 🍀 St. Patrick's Day (Mar 17)
- 🐰 Easter (Apr 9)
- 👩‍👧 Mother's Day (May 14)
- ☀️ Summer (Jun 21)
- 🎆 Independence Day (Jul 4)
- 🎃 Halloween (Oct 31)
- 🦃 Thanksgiving (Nov 23)
- 🎆 Black Friday (Nov 24)
- 🎄 Christmas (Dec 25)
- 🎉 New Year (Jan 1)

### Current Active: Valentine's Day
- Emoji: 💖
- Suggestions: "Hey, try Valentine's Day hearts!", "Love is in the air! 💕", "Make them fall in love 😍"
- CTA: "Perfect timing for Valentine's Day 💝"
- Button: "Try Valentine's Animations"

## 🔧 Troubleshooting

### Container won't start
```bash
docker logs funitize-landing
docker ps -a
```

### Port already in use
Change port in `docker-compose.yml`:
```yaml
ports:
  - "8081:80"  # Use 8081 instead
```

### Nginx reverse proxy issues
```bash
# Check Nginx config
nginx -t

# View Nginx logs
tail -f /var/log/nginx/error.log
```

## 📊 Performance

- **Docker image size:** ~50MB (Alpine Linux + Nginx)
- **Page load time:** <1s (with gzip compression)
- **Static files cached:** 1 year
- **HTML cached:** No cache (always fresh)

## 🔒 Security Headers

All security headers are configured in `nginx.conf`:
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block

## 🎯 Next Steps

1. ✅ Point your domain DNS to Hetzner server IP
2. ✅ Run deployment script
3. ✅ Configure SSL with Certbot
4. ✅ Test all pages and animations
5. ✅ Monitor with `docker stats funitize-landing`

---

**Deployment Status:** Ready to deploy! 🚀
**Estimated Deploy Time:** 2-3 minutes
