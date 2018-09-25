FROM node:alpine
RUN yarn global add localtunnel && yarn cache clean
