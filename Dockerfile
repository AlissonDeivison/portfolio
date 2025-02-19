FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force && \
    npm install

COPY . .

RUN npm run build --prod --verbose

FROM nginx:alpine

COPY --from=build /app/dist/portfolio /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
