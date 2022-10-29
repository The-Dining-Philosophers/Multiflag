# Dockerfile# Pull the base image
FROM node:16
# Set the working directory
WORKDIR /multiflag-front
# Copy app dependencies to container
COPY package*.json ./

# Install dependencies
RUN npm ci

# Get code
COPY . ./

# Expose port
EXPOSE 3000

# Get permissions for node_modules
RUN mkdir ./node_modules/.cache && chmod -R 777 ./node_modules/.cache

# Deploy app for local development
CMD ["npm", "start"]