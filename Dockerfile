FROM node:lts-iron
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 3001
CMD ["npm","run","dev"]
