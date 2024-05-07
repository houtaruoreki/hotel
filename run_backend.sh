#!/bin/bash

activate_venv() {
    source venv/bin/activate
}


create_venv() {
    python3 -m venv venv
}


install_dependencies() {
    pip install -r requirements.txt
}


run_migrations() {
    python manage.py makemigrations
    python manage.py migrate
}
#!/bin/bash


activate_venv() {
    if [ -f "backend/venv/bin/activate" ]; then
        source backend/venv/bin/activate
    else
        echo "Virtual environment not found. Creating..."
        python3 -m venv backend/venv
        source backend/venv/bin/activate
        echo "Installing dependencies..."
        pip install -r backend/requirements.txt
    fi
}


run_migrations() {
    echo "Running migrations..."
    python backend/manage.py makemigrations
    python backend/manage.py migrate
}


run_server() {
    echo "Starting Django server..."
    python backend/manage.py runserver
}


main() {
    activate_venv
    run_migrations
    run_server
}


main


run_server() {
    python manage.py runserver
}


main() {
    if [ ! -d "venv" ]; then
        echo "Creating virtual environment..."
        create_venv
        activate_venv
        install_dependencies
    else
        echo "Activating existing virtual environment..."
        activate_venv
    fi

    echo "Running migrations..."
    run_migrations

    echo "Starting Django server..."
    run_server
}


main
