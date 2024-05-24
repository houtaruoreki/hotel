@echo off

echo Changing directory to backend
cd backend

:activate_venv
if exist venv\Scripts\activate.bat (
    call venv\Scripts\activate.bat
) else (
    echo Virtual environment not found. Creating...
    python -m venv venv
    call venv\Scripts\activate
    echo Installing dependencies...
    pip install -r requirements.txt
)

:run_migrations
echo Running migrations...
python manage.py makemigrations
python manage.py migrate



:run_server
echo Starting Django server...
python manage.py runserver

exit /b
