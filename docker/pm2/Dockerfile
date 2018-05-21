FROM node:wheezy

RUN mkdir -p /var/www/express-pm2
WORKDIR /var/www/express-pm2

COPY package.json .
RUN yarn global add pm2

RUN yarn

COPY . .

EXPOSE 3000

RUN yarn build

CMD ["yarn", "start-server"]
