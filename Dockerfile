# Etapa 1: Construção da aplicação Angular
FROM node:16 AS build

WORKDIR /app

# Copie o package.json e instale as dependências
COPY package*.json ./
RUN npm install

# Copie o restante dos arquivos do projeto e construa a aplicação
COPY . .
RUN npm run build --prod

# Etapa 2: Servir com Nginx
FROM nginx:alpine

# Copie os arquivos da construção para o diretório do Nginx
COPY --from=build /app/dist/portfolio /usr/share/nginx/html

# Exponha a porta 80
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
