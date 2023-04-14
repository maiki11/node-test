FROM --platform=linux/amd64 node:11.15
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
ENV NODE_ENV=production
EXPOSE 80
CMD [ "node", "index.js" ]