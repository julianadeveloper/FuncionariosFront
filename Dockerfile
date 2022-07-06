FROM node:14-alpine

WORKDIR /home/front

COPY package*.json ./

COPY .docker/ .docker/  

EXPOSE 8080
