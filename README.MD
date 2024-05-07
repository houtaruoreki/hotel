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
      - Navigate to the `django-project` directory.
      - Run the `run_backend.bat` script:

        ```batch
        run_backend.bat
        ```

      This will activate the virtual environment, install dependencies, run database migrations, and start the Django server.
      
4. **For Unix-like Systems (macOS, Linux):**

    - Run the `run_backend.sh` script:

    ```bash
    run_backend.sh
    ```

    If you encounter permission issues, make the script executable:

    ```bash
    chmod +x run_backend.sh
    ./run_backend.sh
    ```

    Or use bash 

    ```bash 
    bash run_backend.sh
    ```

Follow these steps to set up and run your Django project on your local machine.