FROM node:14-alpine

WORKDIR /home/app/front

COPY package*.json ./

EXPOSE 8080
