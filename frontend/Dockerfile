FROM node:alpine

WORKDIR /app
COPY . .


COPY ./entrypoint.sh .
ENTRYPOINT ["sh", "/app/entrypoint.sh"]