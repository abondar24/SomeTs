FROM node:20-slim
WORKDIR /app

COPY package.json /app

RUN npm install

COPY ./dist ./dist

EXPOSE 8024

CMD ["node", "./dist/index.js"]