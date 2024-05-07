@echo off

echo Starting servers

start cmd /k "call run_frontend.bat"
start cmd /k "call run_backend.bat"
