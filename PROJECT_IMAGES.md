# Adding Project Images

To complete your portfolio setup, you'll need to add screenshots of your projects.

## Directory Structure
Create the following directory structure in your `public` folder:

```
public/
├── images/
│   ├── projects/
│   │   ├── ecommerce-website.jpg
│   │   ├── wordpress-business.jpg
│   │   ├── task-manager.jpg
│   │   ├── portfolio-website.jpg
│   │   ├── restaurant-landing.jpg
│   │   └── blog-cms.jpg
│   └── profile.jpg (for your profile photo)
```

## Image Requirements
- **Format**: JPG, PNG, or WebP
- **Dimensions**: 400px width × 250px height (recommended)
- **File Size**: Keep under 200KB for optimal loading
- **Quality**: High quality but optimized for web

## How to Add Images

1. **Create the directories**:
   ```bash
   mkdir -p public/images/projects
   ```

2. **Add your project screenshots**:
   - Take screenshots of your live projects
   - Resize them to 400×250 pixels
   - Save them with the exact filenames mentioned above
   - Place them in `public/images/projects/`

3. **Add your profile photo**:
   - Take a professional headshot
   - Resize to around 400×400 pixels (square)
   - Save as `profile.jpg` in `public/images/`

## Image Optimization Tips
- Use tools like [TinyPNG](https://tinypng.com/) to compress images
- Consider using WebP format for better compression
- Ensure images look good on both light and dark themes

## Fallback Images
If you don't have project screenshots yet, you can:
- Use placeholder images from [Unsplash](https://unsplash.com/)
- Create mockup screenshots using design tools
- Add screenshots later as you complete projects

## Alternative: Remove Image Display
If you prefer not to show project images:

1. Open `src/components/Projects.jsx`
2. Find the `project-image` section in the JSX
3. Comment out or remove the image display code
4. Adjust the CSS accordingly in `Projects.css`

The portfolio will work fine without images, focusing on project descriptions and links instead.
