FROM node:16-alpine AS build

WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Limpa o cache e instala as dependências
RUN npm cache clean --force && \
    npm install

# Copia o restante do código
COPY . .

# Executa o build da aplicação Angular
RUN npm run build --prod --verbose

# Fase de produção (NGINX)
FROM nginx:alpine

# Copia os arquivos buildados para o NGINX
COPY --from=build /app/dist/portfolio /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Inicia o NGINX
CMD ["nginx", "-g", "daemon off;"]
