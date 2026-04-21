# ShopHub - E-Commerce Website

A modern, fully-functional e-commerce website built with HTML, CSS, and JavaScript. Features a beautiful design, product catalog, shopping cart, and responsive layout.

## Features

### 🎨 Design & UI
- **Modern Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Beautiful Color Scheme** - Professional gradient colors with smooth transitions
- **Smooth Animations** - Engaging animations and hover effects throughout
- **Font Awesome Icons** - Professional icons for enhanced user experience

### 🛍️ E-Commerce Features
- **Product Catalog** - 12 featured products across 4 categories
- **Category Filtering** - Browse products by Electronics, Fashion, Home, or Sports
- **Product Cards** - Detailed product information with ratings and reviews
- **Shopping Cart** - Fully functional cart with add/remove functionality
- **Cart Notifications** - Real-time feedback when items are added

### 📱 User Interface Sections
1. **Navigation Bar** - Sticky navigation with logo, menu links, and cart button
2. **Hero Section** - Eye-catching banner with call-to-action
3. **Categories** - Browse by shopping categories
4. **Featured Products** - Filterable product grid
5. **Special Offers** - Limited-time offer banner
6. **Newsletter** - Email subscription section
7. **Footer** - Company info, links, and social media

### 🎯 Product Categories
- **Electronics** - Headphones, smartwatches, speakers
- **Fashion** - T-shirts, shoes, jackets
- **Home & Living** - Lamps, coffee makers, pillows
- **Sports** - Yoga mats, dumbbells, water bottles

## Getting Started

### Installation
1. Clone or download the project
2. Open `index.html` in your web browser
3. No additional dependencies or build process required

### File Structure
```
/Users/beqisoft/Documents/E-comm/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## How to Use

### Browsing Products
1. Use the filter buttons to browse by category
2. View product details including price, rating, and description
3. Each product displays availability badge (Sale, Hot, Popular)

### Shopping Cart
1. Click the **shopping cart icon** in the navigation
2. Click **"Add to Cart"** on any product
3. View your cart by clicking the cart icon
4. Remove items with the trash icon
5. See total price in real-time

### Newsletter
1. Scroll to the newsletter section
2. Enter your email address
3. Click **Subscribe** to join our mailing list

## Product Information

Each product includes:
- **Product Image** - Emoji representation for visual appeal
- **Name & Description** - Clear product details
- **Price** - Current pricing
- **Ratings** - Star ratings based on reviews
- **Reviews Count** - Number of customer reviews
- **Special Badges** - Sale, Hot, or Popular indicators

### Sample Products
- Wireless Headphones - $79.99
- Smartwatch Pro - $199.99
- Running Shoes - $89.99
- Coffee Maker - $59.99
- Dumbbells Set - $49.99
- And 7 more...

## Features & Functionality

### JavaScript Features
- Dynamic product rendering
- Cart management system
- Real-time cart updates
- Product filtering
- Smooth scroll navigation
- Form validation for newsletter
- Toast notifications

### Responsive Design
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (below 768px)
- Extra small (480px and below)

## Customization Guide

### Change Store Name
Edit the logo in `index.html`:
```html
<span>ShopHub</span> <!-- Change this -->
```

### Add New Products
Edit the `products` array in `script.js`:
```javascript
{
    id: 13,
    name: "Product Name",
    category: "electronics", // or fashion, home, sports
    price: 99.99,
    image: "🛍️",
    description: "Product description",
    rating: 4.5,
    reviews: 100,
    badge: "Sale" // or null
}
```

### Customize Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    /* ... other colors ... */
}
```

## Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance
- Lightweight - No external dependencies
- Fast loading - Pure HTML/CSS/JavaScript
- Smooth animations - Optimized for 60fps

## Future Enhancement Ideas
- User authentication/login system
- Product search functionality
- Wishlist feature
- Payment integration
- Order history
- Product reviews and ratings submission
- Admin dashboard for product management
- Backend database integration
- Email confirmation for newsletter

## License
Free to use and modify for personal or commercial projects.

## Support
For questions or issues, please contact: info@shophub.com

---

**ShopHub © 2024** - Your Premium E-Commerce Store
# Test_repo
# test1
