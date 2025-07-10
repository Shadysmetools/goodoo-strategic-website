# Use the official Node.js 20 image
FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Set the port environment variable for Next.js
ENV PORT=8080

# Copy app source
COPY . .

# Ensure a fresh build
RUN rm -rf .next

# Build Next.js app
RUN npm run build

# Expose port 8080
EXPOSE 8080

# Start the app
CMD ["npm", "start"] 