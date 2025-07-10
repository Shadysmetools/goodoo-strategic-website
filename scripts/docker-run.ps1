Write-Host "Goodoo Strategic Website - Docker Runner" -ForegroundColor Green
Write-Host "======================================" -ForegroundColor Green

Write-Host ""
Write-Host "Choose an option:" -ForegroundColor Yellow
Write-Host "1. Build and run production container"
Write-Host "2. Build and run development container"
Write-Host "3. Stop all containers"
Write-Host "4. View running containers"
Write-Host "5. View logs"
Write-Host "6. Clean up containers and images"
Write-Host ""

$choice = Read-Host "Enter your choice (1-6)"

switch ($choice) {
    "1" {
        Write-Host "Building and running production container..." -ForegroundColor Green
        docker-compose up --build -d
        Write-Host ""
        Write-Host "Production server running at: http://localhost:3000" -ForegroundColor Green
        Write-Host "Press Ctrl+C to stop" -ForegroundColor Yellow
        docker-compose logs -f
    }
    "2" {
        Write-Host "Building and running development container..." -ForegroundColor Green
        docker-compose --profile dev up --build -d
        Write-Host ""
        Write-Host "Development server running at: http://localhost:3001" -ForegroundColor Green
        Write-Host "Press Ctrl+C to stop" -ForegroundColor Yellow
        docker-compose --profile dev logs -f
    }
    "3" {
        Write-Host "Stopping all containers..." -ForegroundColor Yellow
        docker-compose down
        docker-compose --profile dev down
        Write-Host "All containers stopped." -ForegroundColor Green
    }
    "4" {
        Write-Host "Running containers:" -ForegroundColor Yellow
        docker ps
    }
    "5" {
        Write-Host "Container logs:" -ForegroundColor Yellow
        docker-compose logs
    }
    "6" {
        Write-Host "Cleaning up containers and images..." -ForegroundColor Yellow
        docker-compose down --rmi all --volumes --remove-orphans
        docker system prune -f
        Write-Host "Cleanup complete." -ForegroundColor Green
    }
    default {
        Write-Host "Invalid choice. Please run the script again." -ForegroundColor Red
    }
}

Read-Host "Press Enter to continue" 