FROM node:26.13.0
WORKDIR /app

# Обновляем сертификаты и ставим curl для проверки
RUN apt-get update && \
    apt-get install -y --no-install-recommends ca-certificates curl && \
    update-ca-certificates && \
    rm -rf /var/lib/apt/lists/*

# Устанавливаем переменную окружения для использования системных CA-сертификатов
ENV NODE_OPTIONS=--use-system-ca

COPY package.json package-lock.json ./
COPY . .
RUN npm install
RUN npm run deploy

# Используем JSON-формат для CMD для корректной обработки сигналов
CMD ["node", "dist/my-site/server/main.js"]
