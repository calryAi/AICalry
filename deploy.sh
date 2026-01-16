#!/bin/bash

# Deployment script for aicalry.app
# This script builds and deploys the Next.js frontend to production

set -e

echo "🚀 Starting deployment for aicalry.app..."

# Set production environment variables
export NODE_ENV=production
export NEXT_PUBLIC_API_URL=https://api.aicalry.app
export NEXT_PUBLIC_DOMAIN=aicalry.app

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the application
echo "🔨 Building application..."
npm run build

# Start the application with PM2
echo "🎯 Starting application with PM2..."
npm run pm2:restart

echo "✅ Deployment completed successfully!"
echo "🌐 Application should be available at: https://aicalry.app"
echo "🔗 Backend API remains at: https://api.aicalry.app"
