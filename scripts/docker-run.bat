@echo off
echo Goodoo Strategic Website - Docker Runner
echo ======================================

echo.
echo Choose an option:
echo 1. Build and run production container
echo 2. Build and run development container
echo 3. Stop all containers
echo 4. View running containers
echo 5. View logs
echo 6. Clean up containers and images
echo.

set /p choice="Enter your choice (1-6): "

if "%choice%"=="1" (
    echo Building and running production container...
    docker-compose up --build -d
    echo.
    echo Production server running at: http://localhost:3000
    echo Press Ctrl+C to stop
    docker-compose logs -f
) else if "%choice%"=="2" (
    echo Building and running development container...
    docker-compose --profile dev up --build -d
    echo.
    echo Development server running at: http://localhost:3001
    echo Press Ctrl+C to stop
    docker-compose --profile dev logs -f
) else if "%choice%"=="3" (
    echo Stopping all containers...
    docker-compose down
    docker-compose --profile dev down
    echo All containers stopped.
) else if "%choice%"=="4" (
    echo Running containers:
    docker ps
) else if "%choice%"=="5" (
    echo Container logs:
    docker-compose logs
) else if "%choice%"=="6" (
    echo Cleaning up containers and images...
    docker-compose down --rmi all --volumes --remove-orphans
    docker system prune -f
    echo Cleanup complete.
) else (
    echo Invalid choice. Please run the script again.
)

pause 