# use an existing docker images as a base
FROM alpine

# download and install all dependencies
RUN apk add --update gcc
RUN apk add --update redis

# tell the image what to do when it starts as container
CMD ["redis-server"]