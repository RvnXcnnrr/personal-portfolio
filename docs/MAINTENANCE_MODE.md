# Under Maintenance Mode Setup

This document explains how to quickly switch your portfolio website to maintenance mode for deployment.

## Quick Setup

### Option 1: Replace main.jsx (Recommended for deployment)

1. **Backup your current main.jsx:**
   ```bash
   cp src/main.jsx src/main-original.jsx
   ```

2. **Replace main.jsx with maintenance mode:**
   ```bash
   cp src/main-maintenance.jsx src/main.jsx
   ```

3. **Deploy as normal** - Your site will now show the maintenance page

4. **To restore after maintenance:**
   ```bash
   cp src/main-original.jsx src/main.jsx
   ```

### Option 2: Temporary Switch in main.jsx

Simply edit `src/main.jsx` and change:
```jsx
import App from './App.jsx'
```
to:
```jsx
import MaintenanceApp from './MaintenanceApp.jsx'
```

And change:
```jsx
<App />
```
to:
```jsx
<MaintenanceApp />
```

## Files Created

- **`src/components/maintenance/UnderMaintenance.jsx`** - Main maintenance component
- **`src/components/maintenance/UnderMaintenance.css`** - Styling for maintenance page
- **`src/MaintenanceApp.jsx`** - App wrapper for maintenance mode
- **`src/main-maintenance.jsx`** - Pre-configured main.jsx for maintenance

## Features

✅ **Professional Design** - Clean, modern maintenance page  
✅ **Responsive** - Works perfectly on all devices  
✅ **Contact Links** - Email, GitHub, LinkedIn access  
✅ **Animated Background** - Subtle floating shapes  
✅ **Accessible** - ARIA labels and semantic HTML  
✅ **Dark/Light Mode** - Respects user preferences  
✅ **Performance** - Lightweight and fast loading  

## Customization

### Update Contact Information
Edit `src/components/maintenance/UnderMaintenance.jsx`:
- Email link (line 52)
- GitHub URL (line 59)  
- LinkedIn URL (line 67)

### Change Estimated Downtime
Edit the text in the maintenance description section.

### Modify Colors/Styling
Edit `src/components/maintenance/UnderMaintenance.css` to match your brand colors.

## Deployment

1. Switch to maintenance mode (Option 1 or 2 above)
2. Build and deploy as usual:
   ```bash
   npm run build
   npm run deploy
   ```
3. Your live site will show the maintenance page
4. Work on updates locally with your original code
5. When ready, switch back and redeploy

## Notes

- The maintenance page uses your existing CSS variables from `global.css`
- All animations respect `prefers-reduced-motion` for accessibility
- Contact links are functional during maintenance
- Page is SEO-friendly with proper meta information
