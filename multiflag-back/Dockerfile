# Dockerfile# Pull the base image
FROM node:16
# Set the working directory
WORKDIR /multiflag-back

# Install nodemon for live updates
RUN npm install -g nodemon

# Copy app dependencies to container
COPY package*.json ./

# Install dependencies
RUN npm ci

# Get code
COPY . ./

# Expose port
EXPOSE 8080

# Deploy app for local development
CMD ["nodemon", "server.js"]