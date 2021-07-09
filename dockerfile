# Check out https://hub.docker.com/_/node to select a new base image
FROM node:12-slim

# Set to a non-root built-in user `node`
USER node

# Create app directory (with user `node`)
RUN mkdir -p /home/node/app

WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY --chown=node package*.json ./

RUN npm install
# Bundle app source code
COPY --chown=node . .

ENV HOST=0.0.0.0 PORT=8080

EXPOSE ${PORT}
CMD [ "node", "server.js" ]
#docker build -t build-app-constructora .
#docker tag  gcr.io/custom-citadel-274619/build-app-constructora
#variables de entorno INSTANCE_CONNECTION_NAME = custom-citadel-274619:us-central1:anniix
#docker push gcr.io/custom-citadel-274619/build-app-constructora
#probar docker run -i -t -p 8080:8080 build-app-constructora  /bin/bash