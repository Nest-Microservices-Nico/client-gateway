FROM node:21-alpine3.19

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --legacy-peer-deps

# Instalar grep
RUN apk --no-cache add grep

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]