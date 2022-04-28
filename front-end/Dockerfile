FROM node:16.15.0

WORKDIR /usr/app

RUN npm i -g expo-cli

COPY package.json .
COPY package-lock.json .

RUN npm i
