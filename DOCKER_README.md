# Docker Setup for Goodoo Strategic Website

This guide will help you run the Goodoo Strategic Website using Docker.

## Prerequisites

- Docker Desktop installed and running
- WSL2 enabled (for Windows users)

## Quick Start

### Option 1: Using the provided scripts (Recommended)

1. **For Windows Command Prompt:**
   ```bash
   scripts\docker-run.bat
   ```

2. **For PowerShell:**
   ```powershell
   .\scripts\docker-run.ps1
   ```

3. Choose option 1 for production or option 2 for development

### Option 2: Manual Docker commands

#### Production Mode
```bash
# Build and run production container
docker-compose up --build -d

# View logs
docker-compose logs -f

# Stop containers
docker-compose down
```

#### Development Mode
```bash
# Build and run development container
docker-compose --profile dev up --build -d

# View logs
docker-compose --profile dev logs -f

# Stop containers
docker-compose --profile dev down
```

## Accessing the Application

- **Production**: http://localhost:3000
- **Development**: http://localhost:3001

## Environment Variables

The application uses the following environment variables:

- `JWT_SECRET`: Secret key for JWT token signing (set to 'your_jwt_secret_here' by default)
- `NODE_ENV`: Environment mode (production/development)

## File Structure

- `Dockerfile`: Defines the container image
- `docker-compose.yml`: Orchestrates the services
- `.dockerignore`: Excludes unnecessary files from the build
- `scripts/docker-run.bat`: Windows batch script for easy management
- `scripts/docker-run.ps1`: PowerShell script for easy management

## Troubleshooting

### Common Issues

1. **Port already in use**: Change the port mapping in `docker-compose.yml`
2. **Permission denied**: Run Docker Desktop as administrator
3. **Build fails**: Check that all files are present and Docker is running

### Useful Commands

```bash
# View running containers
docker ps

# View container logs
docker-compose logs

# Clean up everything
docker-compose down --rmi all --volumes --remove-orphans
docker system prune -f

# Rebuild without cache
docker-compose build --no-cache
```

## Development vs Production

- **Development**: Hot reload enabled, source code mounted as volume
- **Production**: Optimized build, static files served

## Next Steps

1. Set up proper environment variables for production
2. Configure SSL/TLS certificates
3. Set up database connections if needed
4. Configure reverse proxy (nginx) for production deployment 