#!/bin/bash
cd frontend
# Check if Vite is installed
if ! command -v vite &> /dev/null; then
    echo "Vite is not installed. Installing..."
    npm install vite
fi

echo "Starting Vite server..."
npm run dev
