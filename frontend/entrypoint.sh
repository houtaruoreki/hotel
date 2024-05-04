#!/bin/sh

npm install -g npm@10.6.0
npm i vite
npm install @vitejs/plugin-react
npm install react react-dom
npm install react-router-dom
npm install react-slick
npm install slick-carousel


npm init -y
npm i npm-check-updates


sed -i 's/"scripts": {/"scripts": {\n    "build": "vite build",/' package.json




npm run build


