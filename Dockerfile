FROM node:12.18.3-alpine
WORKDIR /data
EXPOSE 8080
RUN yarn config set registry https://registry.npm.taobao.org

CMD yarn dev

