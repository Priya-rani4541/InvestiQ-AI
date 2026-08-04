# Use Node.js image
FROM node:22-alpine

# Working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project
COPY . .

# Expose Vite port
EXPOSE 5173

# Start Vite server
CMD ["npm", "run", "dev", "--", "--host"]