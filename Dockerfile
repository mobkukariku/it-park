# Этап сборки (build stage)
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Этап запуска (production stage)
FROM node:18

# Ставим рабочую директорию на финальном этапе
WORKDIR /dist

# Копируем сборку
COPY --from=build /app/dist /dist

# Устанавливаем http-server
RUN npm install -g http-server

EXPOSE 5173

# ВАЖНО: точка (.) — значит запускать из текущей директории /dist
CMD ["http-server", ".", "-p", "5173"]
