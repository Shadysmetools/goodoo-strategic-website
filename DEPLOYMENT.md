# Google Cloud App Engine Deployment Guide

## Overview
This guide will help you deploy the Goodoo.ai Strategic Website to Google Cloud App Engine with proper configuration and troubleshooting.

## Prerequisites

### 1. Google Cloud Account
- Create a Google Cloud account at [cloud.google.com](https://cloud.google.com)
- Enable billing for your project
- Enable the App Engine API

### 2. Google Cloud SDK
Install the Google Cloud SDK:

**Windows:**
```bash
# Download and run the installer
# https://cloud.google.com/sdk/docs/install#windows
```

**macOS/Linux:**
```bash
# Install via package manager or download
curl https://sdk.cloud.google.com | bash
exec -l $SHELL
```

### 3. Node.js and npm
Ensure you have Node.js 18+ installed:
```bash
node --version
npm --version
```

## Setup Steps

### 1. Initialize Google Cloud Project

```bash
# Login to Google Cloud
gcloud auth login

# Create a new project (or use existing)
gcloud projects create your-project-id --name="Goodoo Strategic Website"

# Set the project
gcloud config set project your-project-id

# Enable App Engine API
gcloud services enable appengine.googleapis.com

# Create App Engine application
gcloud app create --region=us-central1
```

### 2. Configure Environment Variables

Create a `.env.production` file in the root directory:

```env
NODE_ENV=production
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
PORT=8080
```

**⚠️ Important:** Change the JWT_SECRET to a secure random string!

### 3. Update app.yaml Configuration

The `app.yaml` file is already configured, but you may want to customize:

- **Project ID**: Update the service name if needed
- **Region**: Change the region in the deployment command
- **Resources**: Adjust CPU/memory based on your needs
- **Scaling**: Modify scaling parameters

### 4. Build and Deploy

#### Option A: Using the Deployment Script (Recommended)

**Windows:**
```bash
scripts\deploy.bat your-project-id
```

**macOS/Linux:**
```bash
chmod +x scripts/deploy.sh
./scripts/deploy.sh your-project-id
```

#### Option B: Manual Deployment

```bash
# Install dependencies
npm ci --only=production

# Build the application
export NODE_ENV=production
export GOOGLE_CLOUD=true
npm run build

# Deploy to App Engine
gcloud app deploy app.yaml
```

### 5. Verify Deployment

```bash
# Check deployment status
gcloud app describe

# Open the deployed app
gcloud app browse

# View logs
gcloud app logs tail -s default
```

## Configuration Details

### app.yaml Breakdown

```yaml
runtime: nodejs20                    # Node.js runtime version
service: default                     # Service name

env_variables:                       # Environment variables
  NODE_ENV: production
  JWT_SECRET: "your-secret-key"
  PORT: 8080

instance_class: F1                   # Instance type (F1 = free tier)

automatic_scaling:                   # Auto-scaling configuration
  target_cpu_utilization: 0.65
  min_instances: 0
  max_instances: 10

resources:                           # Resource allocation
  cpu: 1
  memory_gb: 0.5
  disk_size_gb: 10

handlers:                           # URL routing rules
  - url: /_next/static             # Next.js static files
    static_dir: .next/static
  - url: /uploads                   # Uploaded files
    static_dir: public/uploads
  - url: /.*                       # All other routes
    script: auto
```

### Health Checks

The application includes health check endpoints:
- **Liveness Check**: `/api/health` (checks if app is running)
- **Readiness Check**: `/api/health` (checks if app is ready to serve)

## Common Issues and Solutions

### 1. Build Failures

**Error:** `TypeScript compilation failed`
**Solution:** 
```bash
# Fix TypeScript errors first
npm run lint
npm run build
```

**Error:** `Memory limit exceeded`
**Solution:**
```yaml
# In app.yaml, increase memory
resources:
  memory_gb: 1.0  # Increase from 0.5
```

### 2. Deployment Failures

**Error:** `Permission denied`
**Solution:**
```bash
# Ensure you're authenticated
gcloud auth login
gcloud config set project your-project-id
```

**Error:** `Service not found`
**Solution:**
```bash
# Create the App Engine application
gcloud app create --region=us-central1
```

### 3. Runtime Issues

**Error:** `JWT_SECRET not set`
**Solution:**
```bash
# Set environment variable in app.yaml
env_variables:
  JWT_SECRET: "your-actual-secret-key"
```

**Error:** `Static files not serving`
**Solution:**
```yaml
# Ensure handlers are correct in app.yaml
handlers:
  - url: /_next/static
    static_dir: .next/static
```

### 4. Performance Issues

**Slow loading times:**
```yaml
# Optimize scaling in app.yaml
automatic_scaling:
  min_idle_instances: 1  # Keep one instance warm
  max_idle_instances: 2
```

**High costs:**
```yaml
# Reduce resources in app.yaml
resources:
  cpu: 0.5
  memory_gb: 0.25
```

## Monitoring and Maintenance

### 1. View Logs
```bash
# Real-time logs
gcloud app logs tail -s default

# Historical logs
gcloud app logs read -s default
```

### 2. Monitor Performance
```bash
# View app statistics
gcloud app describe

# Check instance status
gcloud app instances list
```

### 3. Update Application
```bash
# Deploy updates
gcloud app deploy app.yaml

# Rollback if needed
gcloud app versions list
gcloud app services set-traffic default --splits=VERSION_ID=1.0
```

### 4. Scale Application
```yaml
# Manual scaling (in app.yaml)
manual_scaling:
  instances: 5
```

## Security Considerations

### 1. Environment Variables
- Never commit secrets to version control
- Use Google Cloud Secret Manager for production secrets
- Rotate JWT_SECRET regularly

### 2. HTTPS
- App Engine automatically provides HTTPS
- All traffic is encrypted
- No additional configuration needed

### 3. Access Control
- Use Google Cloud IAM for access management
- Restrict who can deploy to production
- Monitor access logs

## Cost Optimization

### 1. Free Tier
- F1 instances are free (with limits)
- 28 instance hours per day
- 5GB storage

### 2. Production Optimization
```yaml
# Optimize for cost
automatic_scaling:
  min_instances: 0
  max_instances: 5
  target_cpu_utilization: 0.8
```

### 3. Monitoring Costs
```bash
# Check billing
gcloud billing accounts list
gcloud billing projects describe your-project-id
```

## Troubleshooting Checklist

- [ ] Google Cloud SDK installed and authenticated
- [ ] App Engine API enabled
- [ ] Project created and set
- [ ] Environment variables configured
- [ ] JWT_SECRET set to secure value
- [ ] Application builds successfully locally
- [ ] No TypeScript/ESLint errors
- [ ] Health check endpoint working
- [ ] Static files properly configured
- [ ] Database connections (if any) configured

## Support

If you encounter issues:

1. Check the [Google Cloud App Engine documentation](https://cloud.google.com/appengine/docs)
2. Review the application logs: `gcloud app logs tail`
3. Test locally first: `npm run build && npm start`
4. Verify environment variables are set correctly
5. Check the health endpoint: `https://your-app.appspot.com/api/health`

## Next Steps

After successful deployment:

1. Set up a custom domain (optional)
2. Configure monitoring and alerting
3. Set up CI/CD pipeline
4. Implement backup strategies
5. Plan for scaling as traffic grows 