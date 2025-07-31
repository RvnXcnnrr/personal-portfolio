# Maintenance Mode Commands

Quick commands to toggle maintenance mode for your portfolio website.

## Available Commands

### NPM Scripts (Recommended)
```bash
# Enable maintenance mode
npm run maintenance:on

# Disable maintenance mode  
npm run maintenance:off

# Check current status
npm run maintenance:status

# Deploy with maintenance page
npm run deploy:maintenance

# Deploy normal site
npm run deploy:normal

# Just deploy current state
npm run deploy
```

### Direct Script Usage
```bash
# PowerShell (Recommended)
.\maintenance.ps1 on     # Enable maintenance
.\maintenance.ps1 off    # Disable maintenance
.\maintenance.ps1 status # Check status

# Batch file (Alternative)
.\maintenance.bat on     # Enable maintenance
.\maintenance.bat off    # Disable maintenance
.\maintenance.bat status # Check status
```

## Quick Deploy Workflow

### To activate maintenance:
```bash
npm run deploy:maintenance
```
This will:
1. Switch to maintenance mode
2. Build the project
3. Deploy to Netlify

### To restore normal site:
```bash
npm run deploy:normal
```
This will:
1. Switch back to normal mode
2. Build the project
3. Deploy to Netlify

## Manual Workflow

### Enable maintenance and deploy:
```bash
npm run maintenance:on
npm run build
netlify deploy --prod --dir=dist
```

### Disable maintenance and deploy:
```bash
npm run maintenance:off
npm run build
netlify deploy --prod --dir=dist
```

## How It Works

The script automatically:
- ✅ Backs up your current `main.jsx` as `main-original.jsx`
- 🚧 Replaces `main.jsx` with the maintenance version
- 🔄 Safely restores the original when disabling
- 📊 Shows current status with visual indicators

## Status Indicators

- 🚧 **MAINTENANCE MODE: ACTIVE** - Site shows maintenance page
- ✅ **NORMAL MODE: ACTIVE** - Site shows full portfolio

## Safety Features

- Won't overwrite if maintenance mode already active
- Automatic backup and restore of original files
- Clear status messages and error handling
- No risk of losing your main site code

Perfect for quick maintenance deployments!
