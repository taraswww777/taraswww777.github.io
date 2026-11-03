FROM node:26.13.0
WORKDIR /app

# Устанавливаем корневые сертификаты для SSL-соединений
RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
COPY . .
RUN npm install
RUN npm run deploy

# запускаем команду, когда запускается образ
CMD node dist/my-site/server/main.js
