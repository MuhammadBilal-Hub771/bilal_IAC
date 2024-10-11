# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files to install dependencies
COPY package*.json ./

# Install the frontend dependencies
RUN npm install

# Copy the React app source code
COPY . .

# Build the React app for production
RUN npm run build

# Use nginx to serve the built frontend
FROM nginx:alpine

# Copy the build folder to nginx's default static location
COPY --from=0 /usr/src/app/build /usr/share/nginx/html

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

