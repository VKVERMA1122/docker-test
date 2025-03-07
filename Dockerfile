FROM node:18

# Set default port value
ARG PORT=3333
ENV PORT=$PORT

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source
COPY . .

# Expose the port from environment
EXPOSE ${PORT}

# Start the application
CMD [ "node", "server/index.js" ]
