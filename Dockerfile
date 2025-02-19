FROM node:16-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force && \
    npm install --only=development

COPY . .

RUN npm run build --prod --verbose

FROM nginx:alpine

COPY --from=build /app/dist/portfolio /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
