@echo off
echo 🧪 Testing deployment configuration...

echo.
echo 📋 Checking prerequisites...

REM Check if gcloud is installed
gcloud --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Google Cloud SDK is not installed
    echo Please install from: https://cloud.google.com/sdk/docs/install
    pause
    exit /b 1
) else (
    echo ✅ Google Cloud SDK is installed
)

REM Check if authenticated
gcloud auth list --filter=status:ACTIVE --format="value(account)" | findstr /r "." >nul
if errorlevel 1 (
    echo ❌ Not authenticated with Google Cloud
    echo Please run: gcloud auth login
    pause
    exit /b 1
) else (
    echo ✅ Authenticated with Google Cloud
)

echo.
echo 🔨 Testing build process...

REM Install dependencies
echo 📦 Installing dependencies...
call npm ci --only=production
if errorlevel 1 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
) else (
    echo ✅ Dependencies installed successfully
)

REM Build the application
echo 🔨 Building application...
set NODE_ENV=production
set GOOGLE_CLOUD=true
call npm run build
if errorlevel 1 (
    echo ❌ Build failed
    pause
    exit /b 1
) else (
    echo ✅ Build completed successfully
)

echo.
echo 📁 Checking required files...

REM Check if app.yaml exists
if not exist app.yaml (
    echo ❌ app.yaml not found
    pause
    exit /b 1
) else (
    echo ✅ app.yaml found
)

REM Check if .next directory exists
if not exist .next (
    echo ❌ .next directory not found (build output missing)
    pause
    exit /b 1
) else (
    echo ✅ .next directory found
)

REM Check if health endpoint exists
if not exist app\api\health\route.ts (
    echo ❌ Health endpoint not found
    pause
    exit /b 1
) else (
    echo ✅ Health endpoint found
)

echo.
echo 🎯 Testing app.yaml configuration...

REM Validate app.yaml syntax
gcloud app deploy app.yaml --dry-run >nul 2>&1
if errorlevel 1 (
    echo ❌ app.yaml configuration is invalid
    echo Please check the app.yaml file
    pause
    exit /b 1
) else (
    echo ✅ app.yaml configuration is valid
)

echo.
echo ✅ All tests passed! Your application is ready for deployment.
echo.
echo 🚀 To deploy, run:
echo    scripts\deploy.bat your-project-id
echo.
echo 📖 For detailed instructions, see DEPLOYMENT.md
echo.
pause 