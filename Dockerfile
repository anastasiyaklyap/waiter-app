FROM node:16
WORKDIR /app
ADD package.json ./
ADD yarn.lock ./
RUN yarn --pure-lockfile
ADD ./ ./
RUN yarn build
CMD ["yarn", "start"]
