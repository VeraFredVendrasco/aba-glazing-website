# 🚀 Installation Guide - ABA Glazing

This guide will help you set up and customize the ABA Glazing website.

## 📋 Prerequisites

- Code editor (VS Code, Sublime Text, etc.)
- Modern web browser
- Web server (for production)
- Company images (logo, product photos, etc.)

## 🛠️ Local Installation

### 1. Download Files
```bash
# Clone or download the project files
# All files should be in the "ABA Glazing" folder
```

### 2. File Structure
Make sure your structure looks like this:
```
ABA Glazing/
├── index.html          # Main page
├── styles.css          # CSS styles
├── script.js           # Interactive JavaScript
├── config.js           # Site configuration
├── README.md           # General documentation
├── INSTALLATION.md     # This file
└── assets/             # Images folder
    └── README.md       # Image instructions
```

### 3. Local Test
1. Open the `index.html` file in your browser
2. Check if all functionalities are working
3. Test on different screen sizes

## 🎨 Customization

### 1. Basic Settings
Edit the `config.js` file to customize:

```javascript
// Company information
company: {
    name: "ABA Glazing",
    phone: "(11) 99999-9999",
    email: "contact@abaglazing.com",
    // ... other information
}

// Brand colors
colors: {
    primary: "#2563eb",    // Primary color
    secondary: "#1d4ed8",  // Secondary color
    // ... other colors
}
```

### 2. Add Images
1. Create your images following the specifications in `assets/README.md`
2. Place the images in the `assets/` folder
3. Update the paths in the HTML if necessary

### 3. Content
- Edit the texts in the `index.html` file
- Update customer testimonials
- Modify company statistics
- Customize contact information

## 🌐 Production Deployment

### Option 1: Traditional Hosting
1. **Buy domain** (e.g., abaglazing.com)
2. **Hire hosting** (Hostinger, GoDaddy, etc.)
3. **Upload files** via FTP
4. **Configure SSL** (HTTPS)

### Option 2: Free Services
- **GitHub Pages**: For static sites
- **Netlify**: Automatic deployment
- **Vercel**: Optimized performance

### Option 3: WordPress (Recommended)
1. **Install WordPress** on hosting
2. **Create custom theme** based on this code
3. **Use plugins** for forms and SEO

## 📧 Form Configuration

### Simple Backend (PHP)
Create a `process-form.php` file:

```php
<?php
if ($_POST) {
    $service = $_POST['service'];
    $time = $_POST['time'];
    
    $to = "contact@abaglazing.com";
    $subject = "New Quote Request - ABA Glazing";
    $message = "Service: $service\nTime: $time";
    
    mail($to, $subject, $message);
    
    echo json_encode(['success' => true]);
}
?>
```

### Service Integration
- **Google Forms**: For simple forms
- **Typeform**: For advanced forms
- **Mailchimp**: For email marketing
- **Zapier**: For automations

## 🔍 SEO and Marketing

### 1. Google Analytics
Add the Google Analytics code in the `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. Google Search Console
1. Add the site to Google Search Console
2. Verify the property
3. Submit the sitemap

### 3. Facebook Pixel
For Facebook/Instagram campaigns:

```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 📱 Advanced Features

### 1. Online Chat
- **Tawk.to**: Free chat
- **Crisp**: Professional chat
- **WhatsApp Business**: Direct integration

### 2. Quote Calculator
Create a JavaScript calculator for quick estimates.

### 3. Project Gallery
Add a section with photos of completed projects.

### 4. Blog/News
For dynamic content and SEO.

## 🔧 Maintenance

### Regular Updates
- Check for broken links
- Update contact information
- Add new testimonials
- Optimize images

### Backup
- Make regular backups of files
- Keep copies of original high-resolution images
- Document changes

### Performance
- Compress images
- Minify CSS and JS
- Use CDN for external resources
- Implement cache

## 🆘 Support

### Common Issues

1. **Images don't load**
   - Check file paths
   - Confirm file names
   - Check permissions

2. **Form doesn't work**
   - Check backend configuration
   - Test on local server
   - Check error logs

3. **Site not responsive**
   - Check CSS media queries
   - Test on different devices
   - Check viewport meta tag

### Useful Resources
- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)
- [CSS-Tricks](https://css-tricks.com/)
- [Stack Overflow](https://stackoverflow.com/)

## 📞 Contact

For technical support or additional customizations:
- **Email**: [your-email@example.com]
- **WhatsApp**: [your-number]
- **Hours**: Monday to Friday, 9am to 6pm

---

**Developed with ❤️ for ABA Glazing**

*Last updated: January 2025*
