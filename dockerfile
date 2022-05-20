FROM node:stretch-slim

EXPOSE 3000

COPY ./build ./build

RUN npm install -g serve

CMD ["serve", "-s", "./build"]