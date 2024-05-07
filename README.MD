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

Follow these steps to set up and run your Django project on your local machine.
