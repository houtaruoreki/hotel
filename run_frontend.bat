@echo off

echo Changing directory to frontend
cd frontend

REM Check if Vite is installed
where vite >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo Vite is not installed. Installing...
    npm install vite
)

echo Starting Vite server...
npm run dev
