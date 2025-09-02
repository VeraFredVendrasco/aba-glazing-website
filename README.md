# ABA Glazing - Professional Website

A modern and responsive website for ABA Glazing, inspired by the design of Fairco (leading company in the Irish windows and doors market).

## 🚀 Features

- **Modern Design**: Clean and professional interface
- **Fully Responsive**: Works perfectly on desktop, tablet and mobile
- **Optimized Performance**: Fast loading and smooth animations
- **SEO Friendly**: Semantic structure and optimized meta tags
- **Accessibility**: Keyboard navigation and screen reader support
- **Interactive Forms**: Quote request system
- **Automatic Slider**: Hero section with automatic transitions
- **Animations**: Modern and elegant visual effects

## 📁 Project Structure

```
ABA Glazing/
├── index.html          # Main page
├── styles.css          # CSS styles
├── script.js           # Interactive JavaScript
├── README.md           # This file
└── assets/             # Images folder (create)
    ├── logo.png        # Company logo
    ├── hero-bg.jpg     # Hero background image
    ├── windows.jpg     # Windows image
    ├── doors.jpg       # Doors image
    └── ...
```

## 🎨 Customization

### 1. Brand Colors

To change the main colors, edit the variables in the `styles.css` file:

```css
/* Main colors */
--primary-color: #2563eb;      /* Primary blue */
--secondary-color: #1d4ed8;    /* Dark blue */
--accent-color: #60a5fa;       /* Light blue */
--text-dark: #1e293b;          /* Dark text */
--text-light: #64748b;         /* Light text */
--bg-light: #f8fafc;           /* Light background */
--bg-dark: #1e293b;            /* Dark background */
```

### 2. Logo and Images

1. **Logo**: Replace the "ABA Glazing" text in the HTML with an image:
   ```html
   <div class="logo">
       <img src="assets/logo.png" alt="ABA Glazing" height="50">
   </div>
   ```

2. **Hero Images**: Add your images to the `assets/` folder and update the CSS:
   ```css
   .slide::before {
       background: url('assets/your-hero-image.jpg') center/cover;
   }
   ```

3. **Product Images**: Replace the placeholders:
   ```html
   <img src="assets/your-windows.jpg" alt="ABA Glazing Windows">
   <img src="assets/your-doors.jpg" alt="ABA Glazing Doors">
   ```

### 3. Content

#### Contact Information
```html
<!-- In header -->
<span><i class="fas fa-phone"></i> (11) 99999-9999</span>
<span><i class="fas fa-envelope"></i> contact@abaglazing.com</span>

<!-- In footer -->
<p>São Paulo | Rio de Janeiro | Belo Horizonte</p>
```

#### Company Statistics
```html
<div class="stat-item">
    <h3>Up to 30%</h3>
    <p>Energy Bill Savings</p>
</div>
<div class="stat-item">
    <h3>+5,000</h3>
    <p>Installations Completed</p>
</div>
<div class="stat-item">
    <h3>15+</h3>
    <p>Years of Experience</p>
</div>
```

#### Customer Testimonials
```html
<div class="testimonial-card">
    <div class="testimonial-content">
        <p>"Your testimonial here..."</p>
    </div>
    <div class="testimonial-author">
        <h4>Customer Name</h4>
        <span>City, State</span>
    </div>
</div>
```

### 4. Social Media

Update the social media links in the footer:
```html
<div class="social-links">
    <a href="https://instagram.com/abaglazing"><i class="fab fa-instagram"></i></a>
    <a href="https://facebook.com/abaglazing"><i class="fab fa-facebook"></i></a>
    <a href="https://linkedin.com/company/abaglazing"><i class="fab fa-linkedin"></i></a>
</div>
```

## 🔧 Functionality

### Automatic Slider
- Automatic transition every 5 seconds
- Manual controls (arrows)
- Responsive on all devices

### Mobile Menu
- Hamburger menu for mobile devices
- Functional dropdown menus
- Smooth navigation

### Quote Form
- Field validation
- Success notifications
- Backend integration ready

### Animations
- Animated counters for statistics
- Fade-in effects on scroll
- Parallax on hero section

## 📱 Responsiveness

The website is fully responsive with breakpoints:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🚀 How to Use

1. **Download/Clone** the project
2. **Customize** colors, logo and content
3. **Add** your images to the `assets/` folder
4. **Test** on different devices
5. **Upload** to your web server

## 📧 Backend Integration

To connect the form to a backend:

1. **Edit** the submit function in `script.js`:
```javascript
quoteForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    
    try {
        const response = await fetch('/api/quote', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            showNotification('Quote sent successfully!', 'success');
        }
    } catch (error) {
        showNotification('Error sending quote. Please try again.', 'error');
    }
});
```

2. **Configure** your server to receive form data

## 🎯 SEO and Performance

### Meta Tags (already included)
```html
<meta name="description" content="ABA Glazing - Quality Windows & Doors. Energy efficiency and modern design for your home.">
<meta name="keywords" content="windows, doors, glazing, energy efficiency, ABA Glazing">
<meta name="author" content="ABA Glazing">
```

### Included Optimizations
- Lazy loading of images
- Debounce on scroll events
- CSS and JS minification (recommended for production)
- Image compression (recommended)

## 🔍 Next Steps

1. **Add more pages**:
   - Detailed product page
   - About company page
   - Contact page
   - Blog/news

2. **Advanced features**:
   - Online chat
   - Quote calculator
   - Project gallery
   - Scheduling system

3. **Integrations**:
   - Google Analytics
   - Facebook Pixel
   - WhatsApp Business
   - CRM

## 📞 Support

For questions or additional customizations, contact the developer.

---

**Developed with ❤️ for ABA Glazing**
