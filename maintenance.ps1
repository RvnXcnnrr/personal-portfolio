#!/usr/bin/env pwsh
# Maintenance Mode Toggle Script for Portfolio

param(
    [Parameter(Mandatory=$true)]
    [ValidateSet("on", "off", "status")]
    [string]$Mode
)

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$mainFile = Join-Path $projectRoot "src\main.jsx"
$mainOriginal = Join-Path $projectRoot "src\main-original.jsx"
$mainMaintenance = Join-Path $projectRoot "src\main-maintenance.jsx"

function Show-Status {
    if (Test-Path $mainOriginal) {
        Write-Host "🚧 MAINTENANCE MODE: ACTIVE" -ForegroundColor Yellow
        Write-Host "   Original main.jsx backed up as main-original.jsx" -ForegroundColor Gray
    } else {
        Write-Host "✅ NORMAL MODE: ACTIVE" -ForegroundColor Green
        Write-Host "   Site is running normally" -ForegroundColor Gray
    }
}

function Enable-Maintenance {
    if (Test-Path $mainOriginal) {
        Write-Host "⚠️  Maintenance mode is already active!" -ForegroundColor Yellow
        return
    }
    
    Write-Host "🚧 Enabling maintenance mode..." -ForegroundColor Yellow
    
    # Backup current main.jsx
    Copy-Item $mainFile $mainOriginal -Force
    Write-Host "   ✓ Backed up main.jsx" -ForegroundColor Green
    
    # Replace with maintenance version
    Copy-Item $mainMaintenance $mainFile -Force
    Write-Host "   ✓ Activated maintenance page" -ForegroundColor Green
    
    Write-Host ""
    Write-Host "🚧 MAINTENANCE MODE ACTIVATED!" -ForegroundColor Yellow
    Write-Host "   Your site will now show the maintenance page." -ForegroundColor Gray
    Write-Host "   To deploy: npm run build && netlify deploy --prod --dir=dist" -ForegroundColor Cyan
}

function Disable-Maintenance {
    if (-not (Test-Path $mainOriginal)) {
        Write-Host "⚠️  Maintenance mode is not active!" -ForegroundColor Yellow
        return
    }
    
    Write-Host "✅ Disabling maintenance mode..." -ForegroundColor Green
    
    # Restore original main.jsx
    Copy-Item $mainOriginal $mainFile -Force
    Write-Host "   ✓ Restored original main.jsx" -ForegroundColor Green
    
    # Remove backup
    Remove-Item $mainOriginal -Force
    Write-Host "   ✓ Cleaned up backup file" -ForegroundColor Green
    
    Write-Host ""
    Write-Host "✅ NORMAL MODE RESTORED!" -ForegroundColor Green
    Write-Host "   Your site is back to normal operation." -ForegroundColor Gray
    Write-Host "   To deploy: npm run build && netlify deploy --prod --dir=dist" -ForegroundColor Cyan
}

# Main script logic
switch ($Mode) {
    "on" { 
        Enable-Maintenance 
    }
    "off" { 
        Disable-Maintenance 
    }
    "status" { 
        Show-Status 
    }
}

Write-Host ""
Write-Host "Current Status:" -ForegroundColor White
Show-Status
