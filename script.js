// Sample product data
const products = [
    {
        id: 1,
        name: "Alegre Multi Pearl Necklace",
        price: 199.99,
        description: 'The name "Alegre," meaning "joyful" in Spanish, perfectly captures the spirit of this necklace—it’s all about adding a little sparkle and happiness to your day!',
        image: "images/1.png",
        alternateImage: "images/1.1.png"
    },
    {
        id: 2,
        name: "Dini Necklace in Mother of Pearl",
        price: 299.99,
        description: "A two-in-one piece, features a carved mother of pearl shell pendant and a round bead necklace, both beautifully attached for a cohesive, layered look.",
        image: "images/2.png",
        alternateImage: "images/2.1.png"
    },
    {
        id: 3,
        name: "Rosary Cross Bracelet",
        price: 569.99,
        description: 'For the devoted, our Rosary Cross Bracelet is ornate yet functional. The one-decade rosary consists of ten “Hail Mary” beads, an “Our Father” tambourine (also called the Amami), and a cross pendant.',
        image: "images/3.png",
        alternateImage: "images/3.1.png"
    },
    {
        id: 4,
        name: "Lwok Sbu Wave Ring",
        price: 799.69,
        description: 'The Tboli are celebrated as visionary brass-casters, woodworkers, and “Dreamweavers”. The art of Temwel (brass-casting) is an honoured tradition passed down for generations. ',
        image: "images/4.png",
        alternateImage: "images/4.1.png"
    },
    {
        id: 5,
        name: "Gumamela Filigree Stud Earrings",
        price: 339.99,
        description: "Like the Gumamela itself, these earrings symbolize more than just beauty. They're a nod to the rich tapestry of Filipino culture. From gracing Filipino gardens and parks to being brewed into healing teas for generations, the Gumamela holds a special place in our hearts. It represents resilience, healing, and the vibrant spirit of our people.",
        image: "images/5.png",
        alternateImage: "images/5.1.png"
    }
    ,
    {
        id: 6,
        name: "Padumna Gold Filigree Tambourine Hair Barrette",
        price: 489.19,
        description: "Step into your special day with the Padumna Gold Filigree Tambourine Hair Barrette, the perfect blend of tradition and elegance. 🌸 This gorgeous piece is more than just a hair accessory—it's a tribute to the rich heritage of Filipino jewelry craftsmanship, meticulously handcrafted to add a golden touch to your wedding day or any formal event.",
        image: "images/6.png",
        alternateImage: "images/6.1.png"
    }
    ,
    {
        id: 7,
        name: "Jasmine Twin Necklace in Mother of Pearl",
        price: 199.79,
        description: "A sweet sampaguita twin bud around your neck!",
        image: "images/7.png",
        alternateImage: "images/7.1.png"
    }
    ,
    {
        id: 8,
        name: "Luz Golden Parol Earrings",
        price: 725.00,
        description: "Celebrate the magic of Paskong Pinoy with our Luz Golden Parol Earrings, a festive nod to the iconic Filipino parol that lights up our homes and hearts during Christmas!",
        image: "images/8.png",
        alternateImage: "images/8.1.png"
    }
    ,
    {
        id: 9,
        name: "K'lung Kalayaan Filipino Flag Earrings",
        price: 125.00,
        description: "Spot the iconic blue, red, sun, and three stars? These earrings are a banner of Filipino pride, literally! Wear your heritage with our K’lung Kalayaan Earrings which reinterpret the Philippine flag in intricate beadwork.",
        image: "images/9.png",
        alternateImage: "images/9.1.png"
    }
    ,
    {
        id: 10,
        name: "Bella Teardrop Macabebe Earrings",
        price: 99.99,
        description: "Experience the profound emotional depth symbolized by the teardrop shape with our Bella Teardrop Macabebe Earrings. Let them accompany you as you navigate life's journey, delving into the rich tapestry of your emotions with grace and poise.",
        image: "images/10.png",
        alternateImage: "images/10.1.png"
    }
    ,
    {
        id: 11,
        name: "Araw Filipino Sun Earrings In Mother of Pearl",
        price: 199.00,
        description: "These earrings were made in partnership with Filipina designer Mia Jeanjaquet and the artisans of Arete, and took our team over a year to make!",
        image: "images/11.png",
        alternateImage: "images/11.1.png"
    }
    ,
    {
        id: 12,
        name: "Bluso Nbak Stacking Brass Bangle",
        price: 359.69,
        description: "The Tboli are celebrated as visionary brass-casters, woodworkers, and “Dreamweavers”. The art of Temwel (brass-casting) is an honoured tradition passed down for generations. ",
        image: "images/12.png",
        alternateImage: "images/12.1.png"
    }
];

// Cart state
let cart = [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartModal = document.getElementById('cartModal');
const quickViewModal = document.getElementById('quickViewModal');
const cartCount = document.querySelector('.cart-count');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupEventListeners();
});

// Event Listeners Setup
function setupEventListeners() {
    // Hamburger menu
    hamburger.addEventListener('click', toggleMenu);
    
    // Cart icon
    document.querySelector('.cart-icon').addEventListener('click', toggleCart);
    
    // Close cart button
    document.querySelector('.close-cart').addEventListener('click', toggleCart);
    
    // Close quick view button
    document.querySelector('.close-quick-view').addEventListener('click', closeQuickView);
}

// Toggle mobile menu
function toggleMenu() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Render products
function renderProducts() {
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            <img src="${product.image}" 
                 alt="${product.name}" 
                 class="product-image"
                 onmouseover="this.src='${product.alternateImage}'"
                 onmouseout="this.src='${product.image}'">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
            <div class="quick-view-button" onclick="showQuickView(${product.id})">
                Quick View
            </div>
        </div>
    `).join('');
}

// Quick View functionality
function showQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    quickViewModal.querySelector('.quick-view-details').innerHTML = `
        <div class="quick-view-product">
            <img src="${product.image}" alt="${product.name}">
            <div class="quick-view-info">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
                <p class="description">${product.description}</p>
                <button onclick="addToCart(${product.id})" class="cta-button">
                    Add to Cart
                </button>
            </div>
        </div>
    `;

    quickViewModal.classList.add('active');
}

function closeQuickView() {
    quickViewModal.classList.remove('active');
}

// Cart functionality
function toggleCart() {
    cartModal.classList.toggle('active');
    renderCart();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartCount();
    renderCart();
    closeQuickView();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    renderCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            renderCart();
        }
    }
    updateCartCount();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function renderCart() {
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
                <div class="cart-item-quantity">
                    <button onclick="updateQuantity(${item.id}, -1)" id="minus">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" id="plus">+</button>
                </div>
            </div>
            <button onclick="removeFromCart(${item.id})" id="close">x</button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}



// Connect to the existing cart state
document.addEventListener('DOMContentLoaded', () => {
    const orderItemsContainer = document.getElementById('orderItems');
    const totalPriceElement = document.getElementById('totalPrice');
    const form = document.getElementById('checkoutForm');
    const checkoutButton = document.querySelector('.checkout-btn');
    const paymentMethods = document.querySelectorAll('.payment-method');

    // Render items from existing cart
    function renderOrderSummary() {
        orderItemsContainer.innerHTML = '';
        let total = 0;
        
        cart.forEach(item => {
            total += item.price * item.quantity;
            const itemElement = document.createElement('div');
            itemElement.className = 'item';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <div class="item-name">${item.name}</div>
                    <div>Quantity: ${item.quantity}</div>
                    <div class="price">$${(item.price * item.quantity).toFixed(2)}</div>
                </div>
            `;
            orderItemsContainer.appendChild(itemElement);
        });

        totalPriceElement.textContent = `$${total.toFixed(2)}`;
        return total;
    }

    // Previous validation and form handling code remains the same
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            const formData = {
                personalInfo: {
                    fullName: document.getElementById('fullName').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value
                },
                shippingAddress: {
                    address: document.getElementById('address').value,
                    city: document.getElementById('city').value,
                    state: document.getElementById('state').value,
                    postal: document.getElementById('postal').value,
                    country: document.getElementById('country').value
                },
                paymentMethod: form.querySelector('input[name="payment"]:checked').value,
                orderItems: cart,
                orderTotal: renderOrderSummary()
            };

            alert('Order placed successfully!\n\nOrder Details:\n' + 
                  `Total Amount: $${formData.orderTotal.toFixed(2)}\n` +
                  `Payment Method: ${formData.paymentMethod}\n` +
                  `Shipping to: ${formData.personalInfo.fullName}\n` +
                  `${formData.shippingAddress.address}, ${formData.shippingAddress.city}`);
            
            // Clear cart after successful order
            cart = [];
            updateCartCount();
        }
    });

    // Initial render
    renderOrderSummary();
});


function checkout(){
    confirm("Your order is successfully checkout");
}
// modal


function openLogin(){
    document.querySelector('.login-container').style.visibility = 'visible';
    document.querySelector('.signup-container').style.visibility = 'hidden';
    
  }
  function openSignup(){
    document.querySelector('.signup-container').style.visibility = 'visible';
    document.querySelector('.login-container').style.visibility = 'hidden';
    
  }
  function close() {
    document.querySelector('.login-container').style.visibility = 'hidden';
    document.querySelector('.signup-container').style.visibility = 'hidden';
    
  }
  
  // Adding the event listener to call the close function when #close-btn is clicked
  document.querySelector('#close-btn').addEventListener('click', close);
  document.querySelector('#close-btn1').addEventListener('click', close);

  // Adding the event listener to custom-signup-btn to open function openSignup()
  document.querySelector('.custom-signup-btn').addEventListener('click', openSignup);

  
// Adding the event listener to custom-signup-btn to open function openSignup()


document.getElementById('signin').addEventListener('click', function(event) {
  event.preventDefault();  
  openLogin();
});

document.getElementById('signup').addEventListener('click', function(event) {
  event.preventDefault();  
  openSignup();
});
