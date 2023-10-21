# Use the official Node.js image as the base image
FROM node:lts-alpine

ENV NODE_ENV=production

# Set the working directory in the container to /app
WORKDIR /app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install --production --silent && mv node_modules ../

COPY . .

# Expose port 3000
EXPOSE 3000

RUN chown -R node /app

USER node

# Define the entry point for the container
CMD ["npm", "start"]
