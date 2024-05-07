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

insert_room_data() {
    echo "Inserting room data..."
    python manage.py shell << EOF
from hotel.models import Room

# Insert data into the Room model
Room.objects.create(number=101, description='Single room with a view', price=100.0, status=True, is_cottage=False)
Room.objects.create(number=102, description='Double room with balcony', price=150.0, status=True, is_cottage=False)
Room.objects.create(number=103, description='Luxury suite with ocean view', price=300.0, status=False, is_cottage=False)
Room.objects.create(number=201, description='Cozy cottage by the lake', price=200.0, status=True, is_cottage=True)
Room.objects.create(number=202, description='Rustic cabin in the woods', price=180.0, status=True, is_cottage=True)

EOF
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
    insert_room_data
    run_server
}

main
