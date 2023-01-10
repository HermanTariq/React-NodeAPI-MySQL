FROM node:current-alpine3.16  as build-stage

WORKDIR /app
ENV API_URL http://35.173.233.114:9001
COPY package.json .
RUN npm install
COPY . .
RUN sed -i "s|API_URL|$API_URL|g" /app/src/api/api.js

RUN npm run build


FROM nginx:1.17.0-alpine

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENV API_URL http://35.173.233.114:9001
RUN sed -i "s|{{API_URL}}|$API_URL|g" /etc/nginx/conf.d/default.conf
CMD nginx -g 'daemon off;'
