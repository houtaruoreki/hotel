# Django Project Setup and Execution

This repository contains a Django project with setup scripts for Windows and Unix-like systems (macOS, Linux). These scripts automate the creation of a virtual environment, installation of dependencies, running database migrations, and starting the Django development server.

## Prerequisites

- Python 3.x installed on your system
- pip package manager (included with Python 3.x)
- `git` (optional, for cloning the repository)

## Installation Steps

1. Clone this repository to your local machine (if you haven't already):

    ```bash
    git clone https://github.com/houtaruoreki/hotel.git
    ```

2. Navigate to the project directory:

    ```bash
    cd hotel
    ```

3. **For Windows:**

    - Open Command Prompt (cmd).
    - Navigate to the `hotel` directory.
    - To run both backend and frontend, execute the `run_project.bat` script:

    ```batch
    run_project.bat
    ```

    This will activate the virtual environment, install dependencies for both backend and frontend, run database migrations, and start both Django server and frontend server.

    - To run only the backend, execute the `run_backend.bat` script:

    ```batch
    run_backend.bat
    ```

    This will activate the virtual environment, install dependencies, run database migrations, and start the Django server.

    - To run only the frontend, execute the `run_frontend.bat` script:

    ```batch
    run_frontend.bat
    ```

    This will change directory to the frontend folder, check if Vite is installed, install it if necessary, and start the Vite server.

      
4. **For Unix-like Systems (macOS, Linux):**

    - To run both backend and frontend, execute the `run_project.sh` script:

    ```bash
    ./run_project.sh
    ```

    If you encounter permission issues, make the script executable:

    ```bash
    chmod +x run_project.sh
    ```

    Or use bash:

    ```bash 
    bash run_project.sh
    ```

    This will activate the virtual environment, install dependencies for both backend and frontend, run database migrations, and start both Django server and frontend server.

    - To run only the backend or frontend:

    ```bash
    ./run_backend.sh
    ```

    ```bash
    ./run_frontend.sh
    ```

    If you encounter permission issues, make the respective scripts executable:

    ```bash
    chmod +x run_backend.sh
    ```

    ```bash
    chmod +x run_frontend.sh
    ```

    Or use bash:

    ```bash 
    bash run_backend.sh
    ```

    ```bash 
    bash run_frontend.sh
    ```

    Running these scripts will activate the virtual environment, install dependencies, and start the respective server.

Follow these steps to set up and run your Django project on your local machine
