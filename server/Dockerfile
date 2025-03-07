FROM node:18

ARG PORT=3000
ENV PORT=$PORT

WORKDIR /usr/src/app

# Copy package files from server directory
COPY server/package*.json ./
RUN npm install

# Copy server contents
COPY server/ ./

EXPOSE ${PORT}

# Start the application (index.js will be in root of WORKDIR now)
CMD [ "node", "index.js" ]
