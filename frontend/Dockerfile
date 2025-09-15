# docker-todo/frontend/Dockerfile
FROM node:18-alpine

WORKDIR /app

# copy only package.json and package-lock.json first
COPY package*.json ./
RUN npm install

# copy the rest of the code
COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
