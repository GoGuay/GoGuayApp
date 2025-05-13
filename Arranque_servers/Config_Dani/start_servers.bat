@echo off
cd /d C:\Users\User\Documents\PRIDERIDE\PrideRide\backend
start cmd /k "python app.py"

cd /d C:\Users\User\Documents\PRIDERIDE\PrideRide\frontend
start cmd /k "ng serve --open"
