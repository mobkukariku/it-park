# Используем официальный образ для Node.js
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (или yarn.lock) в контейнер
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта в контейнер
COPY . .

# Строим проект
RUN npm run build

# Открываем порт для приложения (по умолчанию 3000, можно изменить)
EXPOSE 5173

# Запускаем приложение
CMD ["npm", "run", "start"]
