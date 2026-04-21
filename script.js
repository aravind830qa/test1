// Product Data
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "electronics",
        price: 79.99,
        image: "🎧",
        description: "Premium sound quality with noise cancellation",
        rating: 4.5,
        reviews: 128,
        badge: "Popular"
    },
    {
        id: 2,
        name: "Smartwatch Pro",
        category: "electronics",
        price: 199.99,
        image: "⌚",
        description: "Track your fitness and stay connected",
        rating: 4.7,
        reviews: 95,
        badge: "Sale"
    },
    {
        id: 3,
        name: "Classic T-Shirt",
        category: "fashion",
        price: 29.99,
        image: "👕",
        description: "Comfortable cotton blend perfect for everyday wear",
        rating: 4.3,
        reviews: 156,
        badge: null
    },
    {
        id: 4,
        name: "Running Shoes",
        category: "fashion",
        price: 89.99,
        image: "👟",
        description: "Lightweight and supportive athletic footwear",
        rating: 4.6,
        reviews: 203,
        badge: "Hot"
    },
    {
        id: 5,
        name: "Desk Lamp",
        category: "home",
        price: 39.99,
        image: "💡",
        description: "Adjustable LED lamp with USB charging",
        rating: 4.4,
        reviews: 87,
        badge: null
    },
    {
        id: 6,
        name: "Coffee Maker",
        category: "home",
        price: 59.99,
        image: "☕",
        description: "Programmable coffee maker with timer",
        rating: 4.2,
        reviews: 112,
        badge: "Sale"
    },
    {
        id: 7,
        name: "Yoga Mat",
        category: "sports",
        price: 34.99,
        image: "🧘",
        description: "Non-slip exercise mat for yoga and fitness",
        rating: 4.5,
        reviews: 67,
        badge: null
    },
    {
        id: 8,
        name: "Dumbbells Set",
        category: "sports",
        price: 49.99,
        image: "🏋️",
        description: "5-piece adjustable dumbbell set",
        rating: 4.8,
        reviews: 142,
        badge: "Popular"
    },
    {
        id: 9,
        name: "Portable Speaker",
        category: "electronics",
        price: 69.99,
        image: "🔊",
        description: "Waterproof Bluetooth speaker with 12hr battery",
        rating: 4.6,
        reviews: 178,
        badge: null
    },
    {
        id: 11,
        name: "Winter Jacket",
        category: "fashion",
        price: 129.99,
        image: "🧥",
        description: "Warm insulated jacket for cold weather",
        rating: 4.7,
        reviews: 95,
        badge: "Hot"
    },
    {
        id: 11,
        name: "Bed Pillow",
        category: "home",
        price: 45.99,
        image: "🛏️",
        description: "Memory foam pillow for better sleep",
        rating: 4.5,
        reviews: 234,
        badge: null
    },
    {
        id: 12,
        name: "Water Bottle",
        category: "sports",
        price: 24.99,
        image: "🥤",
        description: "Insulated stainless steel water bottle",
        rating: 4.4,
        reviews: 156,
        badge: "Sale"
    }
];

// Shopping Cart
let cart = [];
let currentFilter = 'all';

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.querySelector('.cart-btn');
const cartModal = document.getElementById('cartModal');
const closeBtn = document.querySelector('.close-btn');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.querySelector('.cart-count');
const filterBtns = document.querySelectorAll('.filter-btn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            renderProducts(currentFilter);
        });
    });

    // Cart modal
    cartBtn.addEventListener('click', openCart);
    closeBtn.addEventListener('click', closeCart);
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) closeCart();
    });

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        alert(`Thank you for subscribing with ${email}!`);
        newsletterForm.reset();
    });

    // Shop Now button
    document.querySelector('.hero .btn-primary').addEventListener('click', () => {
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
}

// Render Products
function renderProducts(filter) {
    productsGrid.innerHTML = '';
    
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">No products found</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const card = createProductCard(product);
        productsGrid.appendChild(card);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const rating = '⭐'.repeat(Math.floor(product.rating)) + (product.rating % 1 !== 0 ? '✨' : '');
    
    card.innerHTML = `
        <div class="product-image">
            ${product.image}
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        </div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-rating">
                <span class="stars">${rating}</span>
                <span class="reviews">(${product.reviews} reviews)</span>
            </div>
            <div class="product-footer">
                <span class="product-price">$${product.price.toFixed(2)}</span>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();
    showNotification(`${product.name} added to cart!`);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Update Cart
function updateCart() {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    renderCartItems();
    calculateTotal();
}

// Render Cart Items
function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-message">Your cart is empty</p>';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">${item.image}</div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

// Calculate Total
function calculateTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Open Cart
function openCart() {
    cartModal.classList.add('active');
}


function closeCart() {
    cartModal.classList.remove('active');
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #10b981;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#cart') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
