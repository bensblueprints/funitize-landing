#!/bin/bash

# Funitize Landing Page - Hetzner Deployment Script

echo "🚀 Deploying Funitize Landing to Hetzner..."

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SERVER_USER="root"
SERVER_IP="46.62.157.83"
DEPLOY_PATH="/opt/funitize-landing"
DOMAIN="46.62.157.83"  # Update this when you add a domain

echo -e "${BLUE}Step 1: Building Docker image locally...${NC}"
docker build -t funitize-landing:latest .

echo -e "${BLUE}Step 2: Saving Docker image...${NC}"
docker save funitize-landing:latest | gzip > funitize-landing.tar.gz

echo -e "${BLUE}Step 3: Uploading to Hetzner...${NC}"
scp funitize-landing.tar.gz ${SERVER_USER}@${SERVER_IP}:/tmp/
scp docker-compose.yml ${SERVER_USER}@${SERVER_IP}:${DEPLOY_PATH}/

echo -e "${BLUE}Step 4: Deploying on server...${NC}"
ssh ${SERVER_USER}@${SERVER_IP} << 'ENDSSH'
cd /tmp
docker load < funitize-landing.tar.gz
rm funitize-landing.tar.gz

cd /opt/funitize-landing
docker-compose down
docker-compose up -d

echo "✅ Deployment complete!"
docker ps | grep funitize
ENDSSH

echo -e "${GREEN}✅ Funitize Landing deployed successfully!${NC}"
echo -e "${BLUE}Access your site at: http://${DOMAIN}${NC}"

# Cleanup
rm funitize-landing.tar.gz
