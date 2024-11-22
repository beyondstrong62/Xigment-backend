# Use official Node.js image as base
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Expose the app's port
EXPOSE 3000

# Command to run the app
CMD ["npm", "run", "start:prod"]
