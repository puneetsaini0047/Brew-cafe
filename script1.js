// Menu items data
const menuItems = [
    // Hot Beverages
    {
        id: 1,
        name: "Espresso",
        category: "hot-beverages",
        price: 120,
        description: "Rich and bold shot of pure coffee perfection",
        image: "images/espresso.jpg"
    },
    {
        id: 2,
        name: "Cappuccino",
        category: "hot-beverages",
        price: 180,
        description: "Creamy steamed milk with rich espresso and foam",
        image: "images/cappuccino.jpg"
    },
    {
        id: 3,
        name: "Latte",
        category: "hot-beverages",
        price: 200,
        description: "Smooth espresso with steamed milk and light foam",
        image: "images/latte.jpg"
    },
    {
        id: 4,
        name: "French Roast",
        category: "hot-beverages",
        price: 160,
        description: "Dark roasted coffee with intense flavor",
        image: "images/french-roast.jpg"
    },
    {
        id: 5,
        name: "Hot Chocolate",
        category: "hot-beverages",
        price: 150,
        description: "Rich and creamy chocolate drink topped with whipped cream",
        image: "images/hot-chocolate.jpg"
    },
    
    // Cold Beverages
    {
        id: 6,
        name: "Iced Coffee",
        category: "cold-beverages",
        price: 140,
        description: "Refreshing cold brew coffee served over ice",
        image: "images/iced-coffee.jpg"
    },
    {
        id: 7,
        name: "Frappuccino",
        category: "cold-beverages",
        price: 220,
        description: "Blended coffee drink with ice and whipped cream",
        image: "images/frappuccino.jpg"
    },
    {
        id: 8,
        name: "Cold Brew",
        category: "cold-beverages",
        price: 160,
        description: "Smooth and less acidic coffee brewed cold",
        image: "images/cold-brew.jpg"
    },
    {
        id: 9,
        name: "Iced Latte",
        category: "cold-beverages",
        price: 190,
        description: "Chilled espresso with cold milk and ice",
        image: "images/iced-latte.jpg"
    },
    
    // Refreshments
    {
        id: 10,
        name: "Fresh Orange Juice",
        category: "refreshments",
        price: 120,
        description: "Freshly squeezed orange juice packed with vitamins",
        image: "images/orange-juice.jpg"
    },
    {
        id: 11,
        name: "Lemonade",
        category: "refreshments",
        price: 100,
        description: "Tangy and refreshing homemade lemonade",
        image: "images/lemonade.jpg"
    },
    {
        id: 12,
        name: "Fruit Smoothie",
        category: "refreshments",
        price: 180,
        description: "Blended fresh fruits with yogurt and honey",
        image: "images/smoothie.jpg"
    },
    {
        id: 13,
        name: "Iced Tea",
        category: "refreshments",
        price: 90,
        description: "Refreshing iced tea with lemon and mint",
        image: "images/iced-tea.jpg"
    },
    
    // Desserts
    {
        id: 14,
        name: "Chocolate Cake",
        category: "desserts",
        price: 250,
        description: "Rich chocolate cake with creamy frosting",
        image: "images/chocolate-cake.jpg"
    },
    {
        id: 15,
        name: "Cheesecake",
        category: "desserts",
        price: 280,
        description: "Creamy New York style cheesecake",
        image: "images/cheesecake.jpg"
    },
    {
        id: 16,
        name: "Tiramisu",
        category: "desserts",
        price: 320,
        description: "Italian coffee-flavored dessert with mascarpone",
        image: "images/tiramisu.jpg"
    },
    {
        id: 17,
        name: "Croissant",
        category: "desserts",
        price: 120,
        description: "Buttery and flaky French pastry",
        image: "images/croissant.jpg"
    },
    {
        id: 18,
        name: "Muffin",
        category: "desserts",
        price: 100,
        description: "Freshly baked muffin with blueberries",
        image: "images/muffin.jpg"
    },
    
    // Special Combos
    {
        id: 19,
        name: "Coffee & Cake Combo",
        category: "combos",
        price: 350,
        description: "Your choice of coffee with a slice of cake",
        image: "images/coffee-cake-combo.jpg"
    },
    {
        id: 20,
        name: "Breakfast Combo",
        category: "combos",
        price: 280,
        description: "Coffee with croissant and fresh juice",
        image: "images/breakfast-combo.jpg"
    },
    {
        id: 21,
        name: "Afternoon Special",
        category: "combos",
        price: 400,
        description: "Latte with sandwich and dessert",
        image: "images/afternoon-combo.jpg"
    },
    
    // Burger & Fries
    {
        id: 22,
        name: "Classic Burger",
        category: "snacks",
        price: 280,
        description: "Juicy beef patty with lettuce, tomato, and cheese",
        image: "images/classic-burger.jpg"
    },
    {
        id: 23,
        name: "Chicken Burger",
        category: "snacks",
        price: 260,
        description: "Grilled chicken breast with fresh vegetables",
        image: "images/chicken-burger.jpg"
    },
    {
        id: 24,
        name: "Veggie Burger",
        category: "snacks",
        price: 240,
        description: "Plant-based patty with avocado and sprouts",
        image: "images/veggie-burger.jpg"
    },
    {
        id: 25,
        name: "French Fries",
        category: "snacks",
        price: 120,
        description: "Golden crispy fries with our special seasoning",
        image: "images/french-fries.jpg"
    },
    {
        id: 26,
        name: "Onion Rings",
        category: "snacks",
        price: 140,
        description: "Crispy battered onion rings with dipping sauce",
        image: "images/onion-rings.jpg"
    }
];

// Cart functionality
let cart = [];
let currentCategory = 'all';

// DOM elements
const menuGrid = document.getElementById('menuGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutModal = document.getElementById('checkoutModal');
const successModal = document.getElementById('successModal');
const checkoutForm = document.getElementById('checkoutForm');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderMenuItems();
    setupEventListeners();
    updateCartDisplay();
});

// Setup event listeners
function setupEventListeners() {
    // Category filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            filterByCategory(category);
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Checkout form submission
    checkoutForm.addEventListener('submit', handleOrderSubmission);
    
    // Close modals when clicking outside
    checkoutModal.addEventListener('click', function(e) {
        if (e.target === this) closeCheckout();
    });
    
    successModal.addEventListener('click', function(e) {
        if (e.target === this) closeSuccess();
    });
}

// Render menu items
function renderMenuItems() {
    menuGrid.innerHTML = '';
    
    menuItems.forEach(item => {
        const menuItemHTML = `
            <div class="menu-item" data-category="${item.category}">
                <img src="${item.image}" alt="${item.name}" class="item-image" 
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNHB4IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+JHtpdGVtLm5hbWV9PC90ZXh0Pjwvc3ZnPg=='" />
                <div class="item-details">
                    <h3 class="item-name">${item.name}</h3>
                    <p class="item-description">${item.description}</p>
                    <div class="item-price">₹${item.price}</div>
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
                        <span class="qty-display" id="qty-${item.id}">1</span>
                        <button class="qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                        <i class="fas fa-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
        menuGrid.innerHTML += menuItemHTML;
    });
}

// Filter items by category
function filterByCategory(category) {
    currentCategory = category;
    const items = document.querySelectorAll('.menu-item');
    
    items.forEach(item => {
        const itemCategory = item.dataset.category;
        if (category === 'all' || itemCategory === category) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Change quantity for menu items
function changeQuantity(itemId, change) {
    const qtyDisplay = document.getElementById(`qty-${itemId}`);
    let currentQty = parseInt(qtyDisplay.textContent);
    let newQty = currentQty + change;
    
    if (newQty < 1) newQty = 1;
    if (newQty > 10) newQty = 10;
    
    qtyDisplay.textContent = newQty;
}

// Add item to cart
function addToCart(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    const quantity = parseInt(document.getElementById(`qty-${itemId}`).textContent);
    
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...item,
            quantity: quantity
        });
    }
    
    updateCartDisplay();
    showNotification(`${item.name} added to cart!`);
    
    // Reset quantity to 1
    document.getElementById(`qty-${itemId}`).textContent = '1';
}

// Update cart display
function updateCartDisplay() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">₹${item.price} x ${item.quantity}</div>
                </div>
                <div class="cart-item-controls">
                    <button class="cart-qty-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                    <span class="cart-qty">${item.quantity}</span>
                    <button class="cart-qty-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                    <i class="fas fa-trash remove-item" onclick="removeFromCart(${item.id})"></i>
                </div>
            </div>
        `).join('');
    }
    
    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total;
    
    // Update checkout button state
    const checkoutBtn = document.querySelector('.checkout-btn');
    checkoutBtn.disabled = cart.length === 0;
}

// Update cart item quantity
function updateCartQuantity(itemId, change) {
    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            updateCartDisplay();
        }
    }
}

// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartDisplay();
    showNotification('Item removed from cart');
}

// Toggle cart sidebar
function toggleCart() {
    cartSidebar.classList.toggle('open');
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) return;
    
    toggleCart();
    updateCheckoutSummary();
    checkoutModal.classList.add('active');
}

// Update checkout summary
function updateCheckoutSummary() {
    const checkoutItems = document.getElementById('checkoutItems');
    const checkoutTotal = document.getElementById('checkoutTotal');
    
    checkoutItems.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <span>${item.name} x ${item.quantity}</span>
            <span>₹${item.price * item.quantity}</span>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    checkoutTotal.textContent = total;
}

// Handle order submission
function handleOrderSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(checkoutForm);
    const orderData = {
        customer: {
            name: formData.get('customerName'),
            email: formData.get('customerEmail'),
            phone: formData.get('customerPhone'),
            address: formData.get('deliveryAddress')
        },
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        notes: formData.get('orderNotes') || '',
        timestamp: new Date().toISOString(),
        orderId: generateOrderId()
    };
    
    // Simulate API call
    submitOrder(orderData);
}

// Submit order (simulated backend)
function submitOrder(orderData) {
    // Show loading state
    const submitBtn = document.querySelector('.place-order-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    submitBtn.disabled = true;
    
    // Simulate API delay
    setTimeout(() => {
        // Store order in localStorage (simulating database)
        const orders = JSON.parse(localStorage.getItem('brewCafeOrders') || '[]');
        orders.push(orderData);
        localStorage.setItem('brewCafeOrders', JSON.stringify(orders));
        
        // Reset form and cart
        checkoutForm.reset();
        cart = [];
        updateCartDisplay();
        
        // Show success modal
        closeCheckout();
        document.getElementById('orderNumber').textContent = orderData.orderId;
        successModal.classList.add('active');
        
        // Reset submit button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Send confirmation email (simulated)
        sendConfirmationEmail(orderData);
        
    }, 2000);
}

// Generate order ID
function generateOrderId() {
    return 'BC' + Date.now().toString().slice(-6) + Math.random().toString(36).substr(2, 3).toUpperCase();
}

// Send confirmation email (simulated)
function sendConfirmationEmail(orderData) {
    console.log('Confirmation email sent to:', orderData.customer.email);
    console.log('Order details:', orderData);
    
    // In a real application, this would call your backend API
    // Example: fetch('/api/send-confirmation-email', { method: 'POST', body: JSON.stringify(orderData) })
}

// Close checkout modal
function closeCheckout() {
    checkoutModal.classList.remove('active');
}

// Close success modal
function closeSuccess() {
    successModal.classList.remove('active');
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--success-color);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1003;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Search functionality (bonus feature)
function searchItems(query) {
    const items = document.querySelectorAll('.menu-item');
    const searchTerm = query.toLowerCase();
    
    items.forEach(item => {
        const itemName = item.querySelector('.item-name').textContent.toLowerCase();
        const itemDescription = item.querySelector('.item-description').textContent.toLowerCase();
        
        if (itemName.includes(searchTerm) || itemDescription.includes(searchTerm)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // ESC to close modals/cart
    if (e.key === 'Escape') {
        if (checkoutModal.classList.contains('active')) {
            closeCheckout();
        } else if (successModal.classList.contains('active')) {
            closeSuccess();
        } else if (cartSidebar.classList.contains('open')) {
            toggleCart();
        }
    }
    
    // Ctrl+K to focus search (if implemented)
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        // Focus search input if implemented
    }
});

// Analytics tracking (simulated)
function trackEvent(eventName, data) {
    console.log('Analytics Event:', eventName, data);
    // In a real application: gtag('event', eventName, data) or similar
}

// Track page view
trackEvent('page_view', {
    page: 'order',
    timestamp: new Date().toISOString()
});

// Lazy loading for images
function setupLazyLoading() {
    const images = document.querySelectorAll('.item-image');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}