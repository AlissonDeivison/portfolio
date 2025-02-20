# Estágio de build
FROM node:20-alpine AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código
COPY . .

# Executa o build da aplicação Angular
RUN npm run build --prod

# Estágio de produção (NGINX)
FROM nginx:alpine

# Copia os arquivos buildados para o NGINX
COPY --from=build /app/dist/portfolio /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Inicia o NGINX
CMD ["nginx", "-g", "daemon off;"]
