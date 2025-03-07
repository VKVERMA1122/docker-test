FROM node:18

ARG PORT=3000
ENV PORT=$PORT

WORKDIR /usr/src/app

# Copy package files (now relative to server directory)
COPY package*.json ./
RUN npm install

# Copy all files from current directory
COPY . .

EXPOSE ${PORT}

CMD [ "node", "index.js" ]
