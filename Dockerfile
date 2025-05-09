# Этап сборки (build stage)
FROM node:18 AS build

WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем остальной код и билдим
COPY . .
RUN npm run build

# Этап запуска (production stage)
FROM node:18

WORKDIR /app

# Копируем билд из этапа сборки
COPY --from=build /app/dist /app/dist

# Устанавливаем сервер для раздачи статики (например, http-server)
RUN npm install -g http-server

# Открываем порт 5000 (по умолчанию http-server)
EXPOSE 5000

# Запускаем сервер для отдачи статики
CMD ["http-server", "dist", "-p", "5000"]
