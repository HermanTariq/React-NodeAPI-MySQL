# Use an official node image as the base image
FROM node:18-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose port Vite will run on
EXPOSE 3000

# Command to build Vite project using environment variables passed at runtime
CMD ["sh", "-c", "VITE_BASE_URL=$VITE_BASE_URL npm run build && npm run preview"]
