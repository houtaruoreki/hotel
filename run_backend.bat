@echo off

REM 
:activate_venv
cd backend
if exist venv\Scripts\activate.bat (
    call venv\Scripts\activate.bat
) else (
    echo Virtual environment not found. Creating...
    python -m venv venv
    call venv\Scripts\activate.bat
    echo Installing dependencies...
    pip install -r requirements.txt
)

REM 
:run_migrations
echo Running migrations...
python manage.py makemigrations
python manage.py migrate

REM 
:run_server
echo Starting Django server...
python manage.py runserver

REM 
exit /b
