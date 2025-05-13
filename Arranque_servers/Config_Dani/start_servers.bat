@echo off
cd /d C:\Users\JTomas\Desktop\Proyectos\PrideRide\backend
start cmd /k "python app.py"

cd /d C:\Users\JTomas\Desktop\Proyectos\PrideRide\frontend
start cmd /k "ng serve --open"
