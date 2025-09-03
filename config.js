// ABA Glazing Site Configuration
// Edit this file to customize the site

const SITE_CONFIG = {
    // Company Information
    company: {
        name: "ABA Glazing",
        tagline: "Windows and Doors",
        description: "Specialists in high-quality windows and doors, security and modern design for your home.",
        phone: "(xxx) 999-9999",
        email: "contact@abaglazing.com",
        website: "https://abaglazing.com",
        address: "Lucan, Kildare",

    },

    // Brand Colors (CSS Variables)
    colors: {
        primary: "#10b981",        // Primary green (matches logo)
        secondary: "#059669",      // Dark green
        accent: "#34d399",         // Light green
        success: "#10b981",        // Success green
        warning: "#f59e0b",        // Warning yellow
        error: "#ef4444",          // Error red
        dark: "#064e3b",           // Dark green
        light: "#f0fdf4",          // Light green tint
        textDark: "#064e3b",       // Dark green text
        textLight: "#065f46"       // Medium green text
    },

    // Company Statistics
    stats: {
        energySavings: "30%",
        installations: "5000",
        experience: "15",
        customers: "5000"
    },

    // Social Media
    social: {
        instagram: "https://instagram.com/abaglazing",
        facebook: "https://facebook.com/abaglazing",
        linkedin: "https://linkedin.com/company/abaglazing",
        youtube: "https://youtube.com/@abaglazing"
    },



    // Products
    products: {
        windows: {
            title: "ABA Glazing Windows",
            subtitle: "For a warmer, more energy efficient home",
            description: "Our bespoke windows are made to fit each home's unique character just right. Providing A++ rated windows as standard, ABA Glazing's stylish fittings are energy efficient and reduce heating costs.",
            image: "Windows03.jpg",
            features: [
                "A++ energy efficiency rating",
                "Superior thermal insulation",
                "Noise reduction",
                "Enhanced security",
                "Modern and elegant design"
            ]
        },
        doors: {
            title: "ABA Glazing Doors",
            subtitle: "For a stunning first impression",
            description: "All our windows and doors are burglar-resistant. They also come with a security guarantee backed by ABA Glazing. So you can relax knowing your home is safe.",
            image: "Door.jpg",
            features: [
                "Certified burglar resistance",
                "Security guarantee",
                "Exclusive design",
                "Professional installation",
                "Easy maintenance"
            ]
        }
    },

    // Customer Testimonials
    testimonials: [
        {
            name: "Happy Client",
            location: "Dublin, Dublin",
            text: "Excellent quality and service. The windows completely transformed our home!",
            rating: 5
        },
        {
            name: "Client Happy 2",
            location: "Lucan, Kildare",
            text: "Very competent professionals. Fast and clean installation. Highly recommend!",
            rating: 5
        },
        {
            name: "Client Happy 3",
            location: "Maynooth, Kildare",
            text: "Real savings on energy bills. Investment that's worth it!",
            rating: 5
        }
    ],

    // Features
    features: [
        {
            icon: "fas fa-shield-alt",
            title: "Security",
            description: "All our products are burglar-resistant"
        },
        {
            icon: "fas fa-medal",
            title: "Quality",
            description: "Manufactured with the highest quality standards"
        },
        {
            icon: "fas fa-tools",
            title: "Professional Installation",
            description: "Specialized team for perfect installation"
        }
    ],

    // Site Settings
    settings: {
        autoSlide: true,
        slideInterval: 5000, // 5 seconds
        enableAnimations: true,
        enableParallax: true,
        enableLazyLoading: true,
        enableNotifications: true
    },

    // SEO
    seo: {
        title: "ABA Glazing - Quality Windows & Doors | Energy Efficiency",
        description: "ABA Glazing - Specialists in high-quality windows and doors. Energy efficiency, security and modern design for your home. Request a free quote!",
        keywords: "windows, doors, glazing, energy efficiency, ABA Glazing, quality windows, security doors, thermal insulation, energy savings",
        author: "ABA Glazing",
        ogImage: "assets/og-image.jpg"
    },

    // Contact Form
    contact: {
        services: [
            { value: "windows", label: "Windows" },
            { value: "doors", label: "Doors" },
            { value: "other", label: "Other" }
        ],
        timeSlots: [
            { value: "morning", label: "Morning" },
            { value: "afternoon", label: "Afternoon" },
            { value: "evening", label: "Evening" }
        ]
    }
};

// Function to apply configurations
function applyConfig() {
    // Apply CSS colors
    const root = document.documentElement;
    Object.entries(SITE_CONFIG.colors).forEach(([key, value]) => {
        root.style.setProperty(`--${key}`, value);
    });

    // Update company information
    document.title = SITE_CONFIG.seo.title;
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.content = SITE_CONFIG.seo.description;
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) metaKeywords.content = SITE_CONFIG.seo.keywords;

    // Update contact information
    const phoneElements = document.querySelectorAll('.contact-info span:first-child');
    phoneElements.forEach(el => {
        el.innerHTML = `<i class="fas fa-phone"></i> ${SITE_CONFIG.company.phone}`;
    });

    const emailElements = document.querySelectorAll('.contact-info span:last-child');
    emailElements.forEach(el => {
        el.innerHTML = `<i class="fas fa-envelope"></i> ${SITE_CONFIG.company.email}`;
    });

    // Update statistics
    const statElements = document.querySelectorAll('.stat-item h3');
    if (statElements.length >= 3) {
        statElements[0].textContent = `Up to ${SITE_CONFIG.stats.energySavings}`;
        statElements[1].textContent = `+${SITE_CONFIG.stats.installations}`;
        statElements[2].textContent = `${SITE_CONFIG.stats.experience}+`;
    }

    // Update testimonials
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    SITE_CONFIG.testimonials.forEach((testimonial, index) => {
        if (testimonialCards[index]) {
            const content = testimonialCards[index].querySelector('.testimonial-content p');
            const author = testimonialCards[index].querySelector('.testimonial-author h4');
            const location = testimonialCards[index].querySelector('.testimonial-author span');
            
            if (content) content.textContent = `"${testimonial.text}"`;
            if (author) author.textContent = testimonial.name;
            if (location) location.textContent = testimonial.location;
        }
    });

    // Update social media links
    const socialLinks = document.querySelectorAll('.social-links a');
    if (socialLinks.length >= 3) {
        socialLinks[0].href = SITE_CONFIG.social.instagram;
        socialLinks[1].href = SITE_CONFIG.social.facebook;
        socialLinks[2].href = SITE_CONFIG.social.linkedin;
    }
}

// Apply configurations when DOM is loaded
document.addEventListener('DOMContentLoaded', applyConfig);

// Export configuration for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
}
