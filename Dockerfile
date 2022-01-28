FROM node:12-alpine3.15 as build-stage

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production
RUN npm cache clean --force

COPY . .

RUN npm run build

FROM nginx:1.17.0-alpine

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
EXPOSE 3000

CMD nginx -g 'daemon off;'