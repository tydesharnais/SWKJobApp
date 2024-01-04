@echo off
title Run Job Tracker v1.0
color 02
cls
echo JOB TRACKER STARTUP...
echo.
timeout -t 5
echo.
echo.
echo Changing Directory...
cd html
dir
echo.
echo.
echo Starting Main Process...
timeout -t 5
start popup.html
cd ..
cd py 
echo.
echo.
echo Starting Server...
uvicorn app:app --reload