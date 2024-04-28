#!/bin/sh

npm install -g npm@10.6.0
npm init -y
npm i npm-check-updates
npm i vite
echo '{ "scripts": { "build": "vite build" } }' > /app/package.json

npm run build


