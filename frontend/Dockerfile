FROM node:14 as builder

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . ./

ARG PUBLIC_URL

ENV PUBLIC_URL $PUBLIC_URL

RUN npm run build


FROM nginx:1.15-alpine

COPY --from=builder /app/build /usr/share/nginx/html
