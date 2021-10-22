# base image
FROM node:alpine

# specify working directory for node projects
WORKDIR /usr/app

# extra installations
#RUN apk add --update nodejs npm
COPY ./ /usr/app
RUN npm i

# starting command
CMD ["npm", "start"]