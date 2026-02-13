# Funitize Landing Page

A vibrant, playful landing page for the Funitize Shopify app - bringing stores to life with magical falling animations.

## Features

- **Playful Maximalist Design**: Candy-colored gradients, bouncy typography, celebratory atmosphere
- **Live Confetti Animation**: Canvas-based falling confetti that runs continuously
- **64+ Animation Previews**: Grid showcase of all available animation effects
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Smooth Scroll Animations**: Intersection Observer-based reveals as you scroll
- **Interactive Elements**: Hover effects, video previews, micro-interactions

## Tech Stack

- **HTML5**: Semantic, accessible markup
- **CSS3**: Custom properties, gradients, animations, grid/flexbox layouts
- **Vanilla JavaScript**: Canvas animations, scroll observers, video controls
- **Fonts**: Fredoka (display), DM Sans (body), Righteous (CTAs)

## Project Structure

```
funitize-landing/
├── index.html              # Main landing page
├── styles.css              # All styles with CSS variables
├── script.js               # Confetti animation + interactions
├── assets/
│   ├── Funitize.mp4       # Hero video
│   ├── animations/        # 64 animation MP4 files
│   └── moodboard/         # Reference images
└── README.md
```

## Assets

- **Main Video**: `assets/Funitize.mp4` (hero section demo)
- **Animation Library**: 64 MP4 files (1.mp4 through 64.mp4) in `assets/animations/`
- **Moodboard**: 6 reference images in `assets/moodboard/`

## Design System

### Colors
- Primary: #FF6B9D (vibrant pink)
- Secondary: #C44569 (deeper rose)
- Accent 1: #FFC107 (golden yellow)
- Accent 2: #00D9FF (electric cyan)
- Accent 3: #A855F7 (vivid purple)

### Typography
- Display: Fredoka (round, friendly, playful)
- Body: DM Sans (clean, warm, readable)
- CTA: Righteous (bold, attention-grabbing)

### Key Features
1. **Animated Canvas Background**: Falling confetti particles with random shapes/colors
2. **Video Previews**: Auto-playing animation demos in grid layout
3. **Scroll Reveals**: Staggered fade-in animations using Intersection Observer
4. **Hover Interactions**: Scale, rotate, glow effects on cards
5. **Easter Egg**: Click logo 5 times for extra confetti burst

## Deployment to Hetzner

### Requirements
- Hetzner server with web server (Nginx/Apache)
- SSH access
- Domain configured with DNS pointing to server
- SSL certificate (Let's Encrypt recommended)

### Deployment Steps

1. **Build/Prepare** (if needed):
   ```bash
   # No build step required - static HTML/CSS/JS
   ```

2. **Upload to Server**:
   ```bash
   scp -r ~/funitize-landing/* user@server:/var/www/funitize/
   ```

3. **Configure Web Server** (Nginx example):
   ```nginx
   server {
       listen 80;
       server_name funitize.yourdomain.com;
       root /var/www/funitize;
       index index.html;

       location / {
           try_files $uri $uri/ =404;
       }

       # Cache static assets
       location ~* \.(mp4|jpg|jpeg|png|css|js)$ {
           expires 30d;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

4. **SSL Certificate**:
   ```bash
   certbot --nginx -d funitize.yourdomain.com
   ```

## Performance Notes

- **Video Optimization**: 64 animation videos - consider lazy loading or pagination for production
- **Canvas Animation**: Runs at 60fps, minimal CPU usage with 50 particles
- **Images**: Moodboard images are reference only (not used on live page)
- **Total Page Weight**: ~25MB (mostly video assets)

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support (playsinline for videos)

## Accessibility

- Semantic HTML structure
- Reduced motion support (can be added)
- Alt text for images (to be added in production)
- Keyboard navigation support
- Color contrast meets WCAG AA standards

## Future Enhancements

- [ ] Add loading states for video grid
- [ ] Implement lazy loading for animation videos
- [ ] Add testimonials section with real customer quotes
- [ ] Integrate with Shopify App Store API
- [ ] Add newsletter signup form
- [ ] Implement analytics tracking
- [ ] Add reduced-motion media query support
- [ ] Create FAQ accordion section

## Easter Eggs

1. Click the logo 5 times → Extra confetti burst + message

## License

Proprietary - All rights reserved

## Contact

For deployment assistance or questions, contact the development team.
