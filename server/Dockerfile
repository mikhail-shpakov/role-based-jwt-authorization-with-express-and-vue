FROM node:lts-alpine as backend
WORKDIR /app
RUN npm install pm2 -g
COPY ./server/ ./
RUN npm ci
EXPOSE 8081
USER node
CMD [ "npm", "run", "prod" ]
