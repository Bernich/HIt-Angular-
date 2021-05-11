
FROM node:12-stretch AS build

USER node

RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY dist/hive-media  ./

EXPOSE 4000

CMD ["node","server/main.js"]
