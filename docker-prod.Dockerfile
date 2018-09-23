FROM node:alpine
RUN mkdir -p /app
WORKDIR /app
ADD . /app
RUN yarn install --production && yarn cache clean
CMD ["yarn", "start"]
EXPOSE 3000
