
# This is the build stage
FROM node:12-stretch AS build

RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build


# This is the prod stage
FROM node:12-stretch

# install nginx
RUN apt update && apt install sudo
RUN sudo apt-get -y install nginx

RUN  rm /etc/nginx/sites-enabled/default

# copy default config to this container
COPY --from=build /home/node/app/config/default.conf /usr/share/nginx/conf.d/

# USER node

RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY --from=build /home/node/app/dist/academy-app ./academy-app
COPY --from=build /home/node/app/config/package.json /home/node/app/config/app.js /home/node/app/config/package-lock.json ./

RUN npm ci

# RUN apk add --update nodejs npm
# RUN addgroup -S node && adduser -S node -G node
# USER node
# RUN mkdir /home/node/app
# WORKDIR /home/node/app
# COPY --from=build --chown=node:node /build ./
# EXPOSE 5000
# CMD [ "node", "app.js" ]
