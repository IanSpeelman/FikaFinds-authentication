FROM node:lts-alpine3.20
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3001
CMD ["npm","run","dev"]
