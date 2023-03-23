FROM --platform=linux/amd64 node:11.15
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]