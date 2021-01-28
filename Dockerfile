FROM node:lts-alpine

WORKDIR /data

EXPOSE 8080

RUN apk add bash
RUN yarn config set registry https://registry.npm.taobao.org \
    && npm config set registry https://registry.npm.taobao.org 

RUN npm i -g npm-check-updates