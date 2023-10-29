FROM node:18.18.2-alpine
WORKDIR /app
RUN npm install -g npm@latest && npm install -g vite@latest

RUN npm install @mui/material @emotion/react @emotion/styled
RUN npm install @fontsource/roboto
RUN npm install @mui/icons-material

RUN npm init -y
RUN npm install -g firebase-tools
RUN npm install --save firebase

RUN apk --no-cache add curl
