@echo off

echo Changing directory to frontend
cd frontend

echo Installing dependencies
call npm install 

echo Starting Vite server...
call npm run dev
