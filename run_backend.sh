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
