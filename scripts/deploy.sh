#!/bin/bash

# Google Cloud App Engine Deployment Script
# Usage: ./scripts/deploy.sh [project-id] [service-name]

set -e

# Default values
PROJECT_ID=${1:-"your-project-id"}
SERVICE_NAME=${2:-"default"}

echo "🚀 Starting deployment to Google Cloud App Engine..."
echo "Project ID: $PROJECT_ID"
echo "Service: $SERVICE_NAME"

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo "❌ Google Cloud SDK is not installed. Please install it first."
    echo "Download from: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Check if user is authenticated
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" | grep -q .; then
    echo "❌ Not authenticated with Google Cloud. Please run: gcloud auth login"
    exit 1
fi

# Set the project
echo "📋 Setting project to $PROJECT_ID..."
gcloud config set project $PROJECT_ID

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# Build the application
echo "🔨 Building the application..."
export NODE_ENV=production
export GOOGLE_CLOUD=true
npm run build

# Create .env.production if it doesn't exist
if [ ! -f .env.production ]; then
    echo "📝 Creating .env.production file..."
    cat > .env.production << EOF
NODE_ENV=production
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
PORT=8080
EOF
    echo "⚠️  Please update JWT_SECRET in .env.production before deploying!"
fi

# Deploy to App Engine
echo "🚀 Deploying to App Engine..."
gcloud app deploy app.yaml --quiet

# Get the deployed URL
DEPLOYED_URL=$(gcloud app describe --format="value(defaultHostname)")
echo "✅ Deployment successful!"
echo "🌐 Your app is available at: https://$DEPLOYED_URL"

# Optional: Open the deployed app
read -p "Would you like to open the deployed app? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    gcloud app browse
fi

echo "🎉 Deployment completed successfully!" 