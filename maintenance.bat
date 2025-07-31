@echo off
REM Maintenance Mode Toggle Script for Portfolio (Windows Batch)

if "%1"=="" (
    echo Usage: maintenance.bat [on^|off^|status]
    echo   on     - Enable maintenance mode
    echo   off    - Disable maintenance mode  
    echo   status - Show current mode
    exit /b 1
)

set "mainFile=src\main.jsx"
set "mainOriginal=src\main-original.jsx"
set "mainMaintenance=src\main-maintenance.jsx"

if "%1"=="status" goto :status
if "%1"=="on" goto :enable
if "%1"=="off" goto :disable

echo Invalid option. Use: on, off, or status
exit /b 1

:enable
if exist "%mainOriginal%" (
    echo [93m⚠️  Maintenance mode is already active![0m
    goto :status
)

echo [93m🚧 Enabling maintenance mode...[0m
copy "%mainFile%" "%mainOriginal%" >nul
echo    ✓ Backed up main.jsx
copy "%mainMaintenance%" "%mainFile%" >nul
echo    ✓ Activated maintenance page
echo.
echo [93m🚧 MAINTENANCE MODE ACTIVATED![0m
echo    Your site will now show the maintenance page.
echo [96m   To deploy: npm run build ^&^& netlify deploy --prod --dir=dist[0m
goto :status

:disable
if not exist "%mainOriginal%" (
    echo [93m⚠️  Maintenance mode is not active![0m
    goto :status
)

echo [92m✅ Disabling maintenance mode...[0m
copy "%mainOriginal%" "%mainFile%" >nul
echo    ✓ Restored original main.jsx
del "%mainOriginal%" >nul
echo    ✓ Cleaned up backup file
echo.
echo [92m✅ NORMAL MODE RESTORED![0m
echo    Your site is back to normal operation.
echo [96m   To deploy: npm run build ^&^& netlify deploy --prod --dir=dist[0m
goto :status

:status
echo.
echo Current Status:
if exist "%mainOriginal%" (
    echo [93m🚧 MAINTENANCE MODE: ACTIVE[0m
    echo    Original main.jsx backed up as main-original.jsx
) else (
    echo [92m✅ NORMAL MODE: ACTIVE[0m
    echo    Site is running normally
)
