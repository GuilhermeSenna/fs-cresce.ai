FROM node

WORKDIR /usr/app

COPY package.json tsconfig.json .env wait.sh ./

RUN npm install

RUN npx prisma push

RUN npx prisma generate

COPY . .

EXPOSE 3001

CMD ["npm", "run", "dev"]