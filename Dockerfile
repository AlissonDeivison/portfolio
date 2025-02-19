# Etapa de Build (Angular)
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force && \
    npm install

COPY . .

RUN npm run build --configuration=production --verbose

# Etapa de Produção (Nginx)
FROM nginx:alpine

# Copia os arquivos de build do Angular para o Nginx
COPY --from=build /app/dist/portfolio /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
