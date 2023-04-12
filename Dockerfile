FROM node:16 as base
WORKDIR /app
ADD package.json ./
ADD yarn.lock ./
RUN yarn --pure-lockfile
ADD ./ ./

FROM base as builder
RUN yarn build

FROM nginx:alpine as dist
COPY ./nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 8000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]