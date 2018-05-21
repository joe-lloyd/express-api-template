FROM node:wheezy

RUN mkdir -p /var/www/${CONTAINER_NAME}
WORKDIR /var/www/${CONTAINER_NAME}

COPY package.json .
RUN yarn global add pm2

RUN npm i

COPY . .

EXPOSE 3000

RUN npm run build

CMD ["npm", "run", "start-server"]
