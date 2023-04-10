FROM --platform=linux/amd64 node:11.15
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 8080
CMD [ "node", "index.js" ]