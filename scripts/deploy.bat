@echo off
setlocal enabledelayedexpansion

REM Google Cloud App Engine Deployment Script for Windows
REM Usage: scripts\deploy.bat [project-id] [service-name]

set PROJECT_ID=%1
if "%PROJECT_ID%"=="" set PROJECT_ID=your-project-id

set SERVICE_NAME=%2
if "%SERVICE_NAME%"=="" set SERVICE_NAME=default

echo 🚀 Starting deployment to Google Cloud App Engine...
echo Project ID: %PROJECT_ID%
echo Service: %SERVICE_NAME%

REM Check if gcloud is installed
gcloud --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Google Cloud SDK is not installed. Please install it first.
    echo Download from: https://cloud.google.com/sdk/docs/install
    pause
    exit /b 1
)

REM Check if user is authenticated
gcloud auth list --filter=status:ACTIVE --format="value(account)" | findstr /r "." >nul
if errorlevel 1 (
    echo ❌ Not authenticated with Google Cloud. Please run: gcloud auth login
    pause
    exit /b 1
)

REM Set the project
echo 📋 Setting project to %PROJECT_ID%...
gcloud config set project %PROJECT_ID%

REM Install dependencies
echo 📦 Installing dependencies...
call npm ci --only=production
if errorlevel 1 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

REM Build the application
echo 🔨 Building the application...
set NODE_ENV=production
set GOOGLE_CLOUD=true
call npm run build
if errorlevel 1 (
    echo ❌ Build failed
    pause
    exit /b 1
)

REM Create .env.production if it doesn't exist
if not exist .env.production (
    echo 📝 Creating .env.production file...
    (
        echo NODE_ENV=production
        echo JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
        echo PORT=8080
    ) > .env.production
    echo ⚠️  Please update JWT_SECRET in .env.production before deploying!
)

REM Deploy to App Engine
echo 🚀 Deploying to App Engine...
gcloud app deploy app.yaml --quiet
if errorlevel 1 (
    echo ❌ Deployment failed
    pause
    exit /b 1
)

REM Get the deployed URL
for /f "tokens=*" %%i in ('gcloud app describe --format="value(defaultHostname)"') do set DEPLOYED_URL=%%i
echo ✅ Deployment successful!
echo 🌐 Your app is available at: https://%DEPLOYED_URL%

REM Optional: Open the deployed app
set /p OPEN_APP="Would you like to open the deployed app? (y/n): "
if /i "%OPEN_APP%"=="y" (
    gcloud app browse
)

echo 🎉 Deployment completed successfully!
pause 