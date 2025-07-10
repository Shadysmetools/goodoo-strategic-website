@echo off
echo Checking Docker Desktop status...
echo.

:check_loop
docker ps >nul 2>&1
if %errorlevel% equ 0 (
    echo Docker Desktop is running and ready!
    echo.
    echo You can now run your application with:
    echo   docker-compose up --build -d
    echo.
    echo Or use the docker-run script:
    echo   scripts\docker-run.bat
    pause
    exit /b 0
) else (
    echo Docker Desktop is starting up... Please wait.
    echo This may take a few minutes on first run.
    echo.
    echo If Docker Desktop is not running, please:
    echo 1. Open Docker Desktop from the Start menu
    echo 2. Wait for it to fully start (you'll see the whale icon in system tray)
    echo 3. Run this script again
    echo.
    timeout /t 5 /nobreak >nul
    goto check_loop
) 