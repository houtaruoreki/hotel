@echo off

echo Changing directory to backend
cd backend

:activate_venv
if exist venv\Scripts\activate.bat (
    call venv\Scripts\activate.bat
) else (
    echo Virtual environment not found. Creating...
    python -m venv venv
    call venv\Scripts\activate.bat
    echo Installing dependencies...
    pip install -r requirements.txt
)

:run_migrations
echo Running migrations...
python manage.py makemigrations
python manage.py migrate

:insert_room_data
echo Inserting room data...
python manage.py shell << EOF
from hotel.models import Room

# Insert data into the Room model
Room.objects.create(number=101, description='Single room with a view', price=100.0, status=True, is_cottage=False)
Room.objects.create(number=102, description='Double room with balcony', price=150.0, status=True, is_cottage=False)
Room.objects.create(number=103, description='Luxury suite with ocean view', price=300.0, status=False, is_cottage=False)
Room.objects.create(number=201, description='Cozy cottage by the lake', price=200.0, status=True, is_cottage=True)
Room.objects.create(number=202, description='Rustic cabin in the woods', price=180.0, status=True, is_cottage=True)

EOF

:run_server
echo Starting Django server...
python manage.py runserver

exit /b
