#!/bin/bash

echo "Changing directory to backend"
cd ./backend

activate_venv() {
    if [ -f "venv/bin/activate" ]; then
        source venv/bin/activate
    else
        echo "Virtual environment not found. Creating..."
        python3 -m venv venv
        source venv/bin/activate
        echo "Installing dependencies..."
        pip install -r requirements.txt
    fi
}

run_migrations() {
    echo "Running migrations..."
    python manage.py makemigrations
    python manage.py migrate
}

run_server() {
    local port=8000
    local max_attempts=10
    local attempt=0
    local server_started=false

    echo "Starting Django server..."

    while [ $attempt -lt $max_attempts ]; do
        if nc -z localhost $port; then
            echo "Port $port is in use, trying another port..."
            port=$((port + 1))
            attempt=$((attempt + 1))
        else
            echo "Starting server on port $port..."
            python manage.py runserver localhost:$port
            server_started=true
            break
        fi
    done

    if [ "$server_started" = false ]; then
        echo "Failed to start server after $max_attempts attempts. Exiting."
        exit 1
    fi
}

main() {
    activate_venv
    run_migrations
    run_server
}

main
