# Deployment Guide for aicalry.app

## Overview
This Next.js frontend application is configured to be deployed to `aicalry.app` while maintaining the backend API at `api.aicalry.app`.

## Key Configuration Changes Made

### 1. Environment Variables
- Added `NEXT_PUBLIC_DOMAIN=aicalry.app` to all configuration files
- Maintained `NEXT_PUBLIC_API_URL=https://api.aicalry.app` for backend communication

### 2. Next.js Configuration (`next.config.ts`)
- Added domain environment variable
- Maintained API proxy configuration to `api.aicalry.app`
- Standalone output for optimal deployment

### 3. PM2 Configuration (`ecosystem.config.js`)
- Updated with production environment variables
- Configured for port 3000
- Added domain configuration

### 4. Firebase App Hosting (`apphosting.yaml`)
- Increased max instances to 2 for better performance
- Added environment variables for production

## Deployment Options

### Option 1: PM2 Deployment (Recommended for VPS/Server)
```bash
# Run the deployment script
npm run deploy

# Or manually:
npm ci
npm run build
npm run pm2:restart
```

### Option 2: Firebase App Hosting
```bash
# Deploy to Firebase App Hosting
npm run deploy:firebase
```

### Option 3: Manual Deployment
```bash
# Set environment variables
export NODE_ENV=production
export NEXT_PUBLIC_API_URL=https://api.aicalry.app
export NEXT_PUBLIC_DOMAIN=aicalry.app

# Build and start
npm ci
npm run build
npm run start:prod
```

## Domain Configuration

### DNS Setup
Point your domain `aicalry.app` to your server IP address:
- A record: `aicalry.app` → `YOUR_SERVER_IP`
- CNAME record: `www.aicalry.app` → `aicalry.app`

### Nginx Configuration (if using reverse proxy)
```nginx
server {
    listen 80;
    server_name aicalry.app www.aicalry.app;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    server_name aicalry.app www.aicalry.app;
    
    ssl_certificate /path/to/ssl/cert.pem;
    ssl_certificate_key /path/to/ssl/private.key;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Backend API Isolation

✅ **Confirmed**: The backend API at `api.aicalry.app` will remain completely unaffected because:
- This is a frontend-only application
- No API routes exist in this project
- All API calls are proxied through Next.js rewrites
- The backend API runs independently

## Verification Steps

1. **Build Test**: `npm run build` should complete without errors
2. **Local Test**: `npm run start:prod` should start on port 3000
3. **PM2 Test**: `npm run pm2:start` should start the application
4. **Domain Test**: Access `https://aicalry.app` should show the application
5. **API Test**: Verify API calls still work through the proxy

## Troubleshooting

### Common Issues
- **Port conflicts**: Ensure port 3000 is available
- **Environment variables**: Check that all env vars are set correctly
- **Build errors**: Run `npm run typecheck` and `npm run lint`
- **PM2 issues**: Check logs with `pm2 logs calry-ai-web`

### Logs Location
- PM2 logs: `/var/log/pm2/calry-ai-web*.log`
- Application logs: Check PM2 status with `pm2 status`

## Security Considerations

- SSL certificates should be configured for HTTPS
- Environment variables are properly scoped
- API proxy maintains security headers
- No sensitive data exposed in frontend code
