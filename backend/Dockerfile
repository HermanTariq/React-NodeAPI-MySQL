FROM node:current-alpine3.16  as build-stage

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9001

CMD ["npm","start"]
