// ========================================
// 1. داده محصولات
// ========================================
const products = [
    {
        id: 1,
        name: 'Trendy American Style Heavyweight Hoodie',
        category: 'Hoodies',
        price: 45.00,
        isNew: true,
        images: [
            "products-image/Trendy American-Style Heavyweight Hoodie. Versatile Loose-Fit Casual Couple's Top for Fall/1 (1).avif",
            "products-image/Trendy American-Style Heavyweight Hoodie. Versatile Loose-Fit Casual Couple's Top for Fall/1 (2).avif",
            "products-image/Trendy American-Style Heavyweight Hoodie. Versatile Loose-Fit Casual Couple's Top for Fall/1 (3).avif",   
        ],
        pageUrl: "product.html",
        // Stripe payment links per size (fill with your actual links)
        stripeLinks: {
            XS: "",
            S: "",
            M: "https://buy.stripe.com/3cI9AU2CI0CB54X8gt8IU08",
            L: "https://buy.stripe.com/5kQ9AU6SY1GFfJBbsF8IU09",
            XL: "https://buy.stripe.com/eVqcN6916dpnbtl54h8IU0a",
            XXL: "https://buy.stripe.com/5kQdRa5OUgBzeFxbsF8IU0b"
        }
    },
    {
        id: 2,
        name: '500g Ethnic Embroidered Hoodie',
        category: 'Hoodie',
        price: 45.00,
        isNew: true,
        images: ["products-image/500g Unisex Ethnic Embroidered Hoodie – Oversized Streetwear for Fall/hoodie (front).jpg",
                 "products-image/500g Unisex Ethnic Embroidered Hoodie – Oversized Streetwear for Fall/hoodie (back).avif",
                 "products-image/500g Unisex Ethnic Embroidered Hoodie – Oversized Streetwear for Fall/hoodie (10).avif",
                 "products-image/500g Unisex Ethnic Embroidered Hoodie – Oversized Streetwear for Fall/hoodie (12).avif",
                 


        ],
        pageUrl: "Products/500g Unisex Ethnic Embroidered Hoodie.html",
        stripeLinks: {
            XS: "",
            S: "",
            M: "https://buy.stripe.com/7sYaEY0uA85354X9kx8IU0c",
            L: "https://buy.stripe.com/5kQ6oIcdi3ON2WPbsF8IU0d",
            XL: "https://buy.stripe.com/14A5kEb9e5WVeFxdAN8IU0e",
            XXL: "https://buy.stripe.com/9B68wQfpu8539ld54h8IU0f"
        }
    },
    {
        id: 3,
        name: ' Sweatshirt for Autumn',
        category: 'Clothing',
        price: 39.99,
        isNew: true,
        images: [
            "products-image/Unisex Wheat Texture Loose Polo-Collar Sweatshirt for Autumn/polo (1).webp",
            "products-image/Unisex Wheat Texture Loose Polo-Collar Sweatshirt for Autumn/polo (2).webp",
            "products-image/Unisex Wheat Texture Loose Polo-Collar Sweatshirt for Autumn/polo (3).avif",
            "products-image/Unisex Wheat Texture Loose Polo-Collar Sweatshirt for Autumn/polo (4).avif"
        ],

        descriptionHtml: `
            <p>Embrace the season with our Unisex Wheat Texture Loose Polo-Collar Sweatshirt. Soft, breathable fabric with a relaxed drape makes it ideal for everyday layering in cooler weather.</p>
            <p>Features: textured wheat knit, polo-style collar, drop-shoulder fit, and ribbed cuffs and hem. Pairs easily with jeans or joggers for a clean, minimal look.</p>
        `,
        // Optional: product-specific details list
        detailsHtml: `
            <li><strong>Material:</strong> Soft cotton-poly blend, breathable</li>
            <li><strong>Fit:</strong> Loose, true to size</li>
            <li><strong>Care:</strong> Machine wash cold, tumble dry low</li>
            <li><strong>Season:</strong> Ideal for autumn layering</li>
        `,

        pageUrl: "Products/Unisex Wheat Texture Loose Polo-Collar Sweatshirt for Autumn.html",
        stripeLinks: {
            XS: "",
            S: "",
            M: "https://buy.stripe.com/dRmdRagtyadbfJBgMZ8IU0g",
            L: "https://buy.stripe.com/14AaEY3GM0CB7d568l8IU0h",
            XL: "https://buy.stripe.com/00weVegty1GFdBtgMZ8IU0i",
            XXL: "https://buy.stripe.com/28E9AUcdicljeFx40d8IU0j"
        }
    },
    {
        id: 4,
        name: 'American Varsity Style Navy Blue Letter Patch Hoodie',
        category: 'Hoodie',
        price: 43.99,
        isNew: false,
        images: ["products-image/Patch Hoodie/patch hoodie (1).avif",
                 "products-image/Patch Hoodie/patch hoodie (2).avif",
                 "products-image/Patch Hoodie/patch hoodie (3).avif",
                 "products-image/Patch Hoodie/patch hoodie (4).avif",
        ],

        descriptionHtml: `
        <p>Step into classic collegiate style with our American Varsity Style Hoodie in a bold navy blue finish. Inspired by vintage varsity fashion, this hoodie features standout letter patches and sporty details that give it that iconic all-American campus vibe.</p>
        <p>Crafted from a soft, high-quality fabric blend, it delivers warmth, comfort, and serious style points. Whether you're hitting the streets or just keeping it casual, this hoodie adds a confident edge to any outfit.</p>
    `,
    // Optional: product-specific details list
    detailsHtml: `
        <li><strong>Varsity-inspired design:</strong> with bold letter patches</li>
        <li><strong>Fit:</strong> True to size</li>
        <li><strong>Care:</strong>Comfortable fit with premium fabric and stitched detail</li>
        <li><strong>Season:</strong> Ideal for autumn layering</li>
    `,

        pageUrl: "Products/American Varsity Style Navy Blue Letter Patch Hoodie.html",
        stripeLinks: {
            XS: "",
            S: "",
            M: "https://buy.stripe.com/fZu3cw6SYadb2WP54h8IU0o",
            L: "https://buy.stripe.com/fZu28s9162KJapheER8IU0p",
            XL: "https://buy.stripe.com/28E7sM1yE5WV54X54h8IU0q",
            XXL: "https://buy.stripe.com/5kQ28s9162KJgNF7cp8IU0r"
        }
    },
    {
        id: 5,
        name: 'Mens LooseFit American Plaid Pullover Hoodie Jacket',
        category: 'Hoodie',
        price: 60.00,
        isNew: true,
        images: ["products-image/Hoodie Jacket/hoodie (1).avif",
                 "products-image/Hoodie Jacket/hoodie (2).avif",
                 "products-image/Hoodie Jacket/hoodie (3).avif",
                 "products-image/Hoodie Jacket/hoodie (4).avif",
        ],
        descriptionHtml: `
        <p>Bring laid-back American style to your cool-weather wardrobe with our Loose-Fit Plaid Pullover Hoodie Jacket — the perfect fusion of comfort, warmth, and street-smart style. Featuring a bold plaid pattern and relaxed fit, this hoodie jacket delivers effortless vibes with a rugged, timeless edge.</p>
        <p>Whether you're layering up for chilly days or making a casual statement, this piece is a go-to essential for fall and beyond.</p>
    `,
    // Optional: product-specific details list
    detailsHtml: `
        <li><strong> Bold plaid design:</strong> Inspired by classic American workwear</li>
        <li><strong>Fit:</strong> True to size</li>
        <li><strong>Care:</strong> Loose, relaxed fit for everyday </li>
        <li><strong>Season:</strong> Ideal for autumn layering</li>
    `,
        pageUrl: "Products/Hoodie Jacket.html",
        stripeLinks: {
            XS: "",
            S: "",
            M: "https://buy.stripe.com/8x2aEY3GMbhfeFxdAN8IU0k",
            L: "https://buy.stripe.com/bJebJ2cdietr40TeER8IU0l",
            XL: "https://buy.stripe.com/4gM4gAelqbhf8h9bsF8IU0m",
            XXL: "https://buy.stripe.com/28E5kEcdi0CB0OH1S58IU0n"
        }
    },

    {
        id: 6,
        name: 'AT Rock Cat Tee Y2K Punk Streetwear',
        category: 'T-Shirt',
        price: 19.99,
        isNew: true,
        images: ["products-image/AT Rock Cat/cattee-white.avif",
                 "products-image/AT Rock Cat/cattee-white-back.avif",
                 "products-image/AT Rock Cat/cattee-black.avif",
                 "products-image/AT Rock Cat/cattee-black-back.avif",
                 "products-image/AT Rock Cat/cattee-blue.avif",
                 "products-image/AT Rock Cat/cattee-bule-back.avif",
        ],
        descriptionHtml: `
        <p>Turn up your street style with the AT Rock Cat Graphic Tee, a bold fusion of Y2K nostalgia and rebellious punk energy. Featuring a unique “Rock Cat” print inspired by underground culture, this tee adds the perfect edge to any casual outfit.</p>
        <p>Made from soft, breathable cotton, it delivers all-day comfort while keeping your look effortlessly cool. Whether you’re out with friends or styling your next streetwear fit, this tee brings attitude, creativity, and confidence to your vibe.</p>
    `,
    // Optional: product-specific details list
    detailsHtml: `
        <li><strong> Design:</strong>Y2K punk aesthetic with a bold Rock Cat graphic</li>
        <li><strong>Fit:</strong> True to size with a relaxed, streetwear silhouette</li>
        <li><strong>Fabric:</strong>Soft and durable cotton blend for comfort and breathability </li>
        <li><strong>Care:</strong>Machine washable, easy to maintain</li>
        <li><strong>Season:</strong>Perfect for spring and summer wear</li>

    `,
        pageUrl: "Products/AT Rock Cat Tee  Y2K Punk Streetwear.html",
        stripeLinks: {
            XS: "",
            S: "",
            M: "https://buy.stripe.com/6oU7sM3GM853cxp54h8IU0s",
            L: "https://buy.stripe.com/9B63cwelqdpncxp54h8IU0t",
            XL: "https://buy.stripe.com/cNifZi3GM5WV9ld0O18IU0u",
            XXL: "https://buy.stripe.com/eVqcN61yE9972WP1S58IU0v"
        }
    },
];

// ========================================
// اسلایدشو محصول در product.html (مجزا از Hero)
// ========================================
function buildProductSlideshow(product) {
    const container = document.getElementById('productImageMain');
    if (!container) return;

    const images = (product.images && product.images.length > 0)
        ? product.images
        : [
            // اگر تصویری موجود نبود از یک جای‌نگهدار استفاده می‌کنیم
            'products-image/placeholder.jpg'
        ];

    // Adjust relative paths when this page is inside the Products/ subdirectory
    const inProductsSubdir = window.location.pathname.includes('Products/');
    const resolvedImages = images.map(src => inProductsSubdir ? `../${src}` : src);

    container.innerHTML = `
        <div class="p-slideshow" aria-label="Product image gallery">
            <div class="p-slides">
                ${resolvedImages.map((src, i) => `
                    <div class="p-slide ${i === 0 ? 'active' : ''}">
                        <img src="${src}" alt="${product.name} - image ${i + 1}" />
                    </div>
                `).join('')}
            </div>
            <button class="p-slide-arrow p-prev" aria-label="Previous image">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <button class="p-slide-arrow p-next" aria-label="Next image">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
            <div class="p-indicators"></div>
        </div>
    `;

    initProductSlideshow(container);
}

function initProductSlideshow(root) {
    const slides = Array.from(root.querySelectorAll('.p-slide'));
    if (slides.length === 0) return;

    let current = 0;
    const prevBtn = root.querySelector('.p-prev');
    const nextBtn = root.querySelector('.p-next');
    const indicatorsWrap = root.querySelector('.p-indicators');

    // ساخت اندیکاتورها
    indicatorsWrap.innerHTML = '';
    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = `p-indicator ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            current = i;
            update();
        });
        indicatorsWrap.appendChild(dot);
    });

    const indicators = Array.from(root.querySelectorAll('.p-indicator'));

    function update() {
        slides.forEach((s, i) => s.classList.toggle('active', i === current));
        indicators.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function next() {
        current = (current + 1) % slides.length;
        update();
    }

    function prev() {
        current = (current - 1 + slides.length) % slides.length;
        update();
    }

    if (prevBtn) prevBtn.addEventListener('click', prev);
    if (nextBtn) nextBtn.addEventListener('click', next);

    // اتوپلی ملایم
    let timer = setInterval(next, 5000);
    root.addEventListener('mouseenter', () => clearInterval(timer));
    root.addEventListener('mouseleave', () => { timer = setInterval(next, 5000); });

    update();
}

// ========================================
// 2. ساخت کارت محصول
// ========================================
function createProductCard(product) {
    const imageHTML = product.images && product.images.length > 0 
        ? `<img src="${product.images[0]}" alt="${product.name}">`
        : `<div class="product-placeholder"></div>`;
    
    const productLink = product.pageUrl || 'product.html';
    
    return `
        <div class="product-card" data-id="${product.id}" data-name="${product.name.toLowerCase()}">
            <div class="product-image">
                ${imageHTML}
            </div>
            <div class="product-card-content">
                <h3 class="product-card-name">${product.name}</h3>
                <p class="product-card-category">${product.category}</p>
                <div class="product-card-footer">
                    <span class="product-card-price">$${product.price.toFixed(2)}</span>
                    <a href="${productLink}" class="product-card-button">Buy</a>
                </div>
            </div>
        </div>
    `;
}

// ========================================
// 3. نمایش محصولات در صفحه اصلی
// ========================================
function initProducts() {
    const newArrivalsScroll = document.getElementById('newArrivalsScroll');
    const productsGrid = document.getElementById('productsGrid');

    if (newArrivalsScroll) {
        const newProducts = products.filter(p => p.isNew);
        newArrivalsScroll.innerHTML = newProducts.map(createProductCard).join('');
    }

    if (productsGrid) {
        productsGrid.innerHTML = products.map(createProductCard).join('');
    }

    // Bind click handlers so selecting a product stores its id and navigates to its page
    bindProductCardClicks();
}

// ========================================
// 4. نمایش جزئیات محصول در product.html
// ========================================
function initProductDetail() {
    let productId = parseInt(localStorage.getItem('selectedProduct'));

    // Fallback: if no selectedProduct in storage, try to infer by current page filename
    if (!productId || isNaN(productId)) {
        const path = window.location.pathname.replace(/\\/g, '/');
        const filename = path.substring(path.lastIndexOf('/') + 1);
        const matchByPage = products.find(p => p.pageUrl.endsWith(filename));
        if (matchByPage) {
            productId = matchByPage.id;
            localStorage.setItem('selectedProduct', String(productId));
        }
    }

    const product = products.find(p => p.id === productId) || products[0];

    if (!product) return;

    document.getElementById('productName').textContent = product.name;
    document.getElementById('productCategory').textContent = product.category;
    document.getElementById('productPrice').textContent = `$${product.price.toFixed(2)}`;

    // Only overwrite description if the product explicitly provides it.
    // Otherwise, keep the description written in each HTML page.
    const descEl = document.getElementById('productDescription');
    if (descEl && typeof product.descriptionHtml === 'string' && product.descriptionHtml.trim() !== '') {
        descEl.innerHTML = product.descriptionHtml;
    }

    // Only overwrite product details list if the product explicitly provides it.
    // We try to fill the <ul> inside .product-details; if not found, we fallback to replacing the container content.
    if (typeof product.detailsHtml === 'string' && product.detailsHtml.trim() !== '') {
        const detailsContainer = document.querySelector('.product-details');
        if (detailsContainer) {
            const detailsUl = detailsContainer.querySelector('ul');
            if (detailsUl) {
                detailsUl.innerHTML = product.detailsHtml;
            } else {
                detailsContainer.innerHTML = `<h3>Product Details</h3><ul>${product.detailsHtml}</ul>`;
            }
        }
    }

    // ساخت اسلایدشو محصول در بخش تصویر اصلی
    buildProductSlideshow(product);

    // محصولات مرتبط
    const relatedProducts = products.filter(p => p.id !== productId).slice(0, 4);
    const relatedContainer = document.getElementById('relatedProducts');
    if (relatedContainer) {
        relatedContainer.innerHTML = relatedProducts.map(createProductCard).join('');
    }

    // Bind size selection
    const sizeButtons = Array.from(document.querySelectorAll('.size-option'));
    sizeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            sizeButtons.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });

    // Buy Now click -> go to Stripe link for selected size
    const buyBtn = document.getElementById('buyNowButton');
    if (buyBtn) {
        buyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedBtn = document.querySelector('.size-option.selected');
            const size = selectedBtn ? selectedBtn.textContent.trim() : '';
            const links = product.stripeLinks || {};
            const url = links[size];

            if (url && /^https?:\/\//i.test(url)) {
                window.location.href = url;
            } else {
                alert(`برای سایز ${size || 'انتخاب نشده'} لینک پرداخت تعریف نشده است. لطفا سایز را انتخاب کرده و لینک Stripe را در scripts.js -> products[].stripeLinks تکمیل کنید.`);
            }
        });
    }
}

// ========================================
// Helpers: bind product card interactions
// ========================================
function bindProductCardClicks() {
    // Click anywhere on the card navigates to its page and sets selectedProduct
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Avoid double handling when clicking the inner button
            const button = e.target.closest('.product-card-button');
            if (button) return; // handled below

            const id = parseInt(card.getAttribute('data-id'));
            const product = products.find(p => p.id === id);
            if (product) {
                localStorage.setItem('selectedProduct', String(product.id));
                window.location.href = product.pageUrl;
            }
        });
    });

    // Ensure Buy button also sets the product id before following the link
    document.querySelectorAll('.product-card-button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            if (!card) return;
            const id = parseInt(card.getAttribute('data-id'));
            if (!isNaN(id)) {
                localStorage.setItem('selectedProduct', String(id));
            }
            // allow default navigation afterward
        });
    });
}

// ========================================
// 5. اسلایدشو (Hero Slideshow)
// ========================================
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });

    const indicators = document.querySelectorAll('.slide-indicator');
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

function initSlideshow() {
    if (slides.length === 0) return;

    const indicatorsContainer = document.querySelector('.slide-indicators');
    if (indicatorsContainer) {
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.className = `slide-indicator ${i === 0 ? 'active' : ''}`;
            indicator.addEventListener('click', () => {
                currentSlide = i;
                showSlide(currentSlide);
            });
            indicatorsContainer.appendChild(indicator);
        }
    }

    const prevBtn = document.querySelector('.slide-prev');
    const nextBtn = document.querySelector('.slide-next');

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    setInterval(nextSlide, 5000);
}

// ========================================
// 6. جستجو
// ========================================
function initSearch() {
    const searchToggle = document.querySelector('.search-toggle');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchClose = document.querySelector('.search-close');
    const searchInput = document.getElementById('searchInput');

    if (searchToggle && searchOverlay) {
        searchToggle.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            setTimeout(() => searchInput.focus(), 300);
        });
    }

    if (searchClose && searchOverlay) {
        searchClose.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
            searchInput.value = '';
            filterProducts('');
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            filterProducts(e.target.value);
        });
    }
}

function filterProducts(query) {
    const productCards = document.querySelectorAll('.product-card');
    const searchTerm = query.toLowerCase().trim();

    productCards.forEach(card => {
        const productName = card.getAttribute('data-name');
        if (searchTerm === '' || productName.includes(searchTerm)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// ========================================
// 7. اسکرول افقی محصولات
// ========================================
function initScrollControls() {
    const scrollContainers = document.querySelectorAll('.products-scroll');

    scrollContainers.forEach((container) => {
        const parent = container.closest('.section');
        if (!parent) return;

        const leftBtn = parent.querySelector('.scroll-left');
        const rightBtn = parent.querySelector('.scroll-right');

        if (leftBtn) {
            leftBtn.addEventListener('click', () => {
                container.scrollBy({ left: -320, behavior: 'smooth' });
            });
        }

        if (rightBtn) {
            rightBtn.addEventListener('click', () => {
                container.scrollBy({ left: 320, behavior: 'smooth' });
            });
        }

        function updateButtons() {
            if (leftBtn) {
                leftBtn.disabled = container.scrollLeft <= 0;
            }
            if (rightBtn) {
                const maxScroll = container.scrollWidth - container.clientWidth;
                rightBtn.disabled = container.scrollLeft >= maxScroll - 1;
            }
        }

        container.addEventListener('scroll', updateButtons);
        updateButtons();
    });
}

// ========================================
// 8. سبد خرید
// ========================================
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// ========================================
// 9. انتخاب سایز
// ========================================
function initSizeSelector() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('size-option')) {
            document.querySelectorAll('.size-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            e.target.classList.add('selected');
        }
    });
}

// ========================================
// 10. دکمه خرید
// ========================================
function initBuyButton() {
    const buyNowButton = document.getElementById('buyNowButton');
    if (!buyNowButton) return;
    // If we're on a product detail page (has size selector), skip the generic handler.
    // initProductDetail() will attach the Stripe redirect logic.
    if (document.querySelector('.product-size-selector')) return;

    buyNowButton.addEventListener('click', () => {
        const selectedSize = document.querySelector('.size-option.selected');
        if (selectedSize) {
            alert(`Purchase initiated! Size: ${selectedSize.textContent}. Payment will be securely processed via Stripe.`);
        } else {
            alert('Please select a size first.');
        }
    });
}

// ========================================
// 11. اسکرول نرم
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navHeight = document.querySelector('.nav').offsetHeight;
                    const targetPosition = target.offsetTop - navHeight - 20;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ========================================
// 12. لینک فعال در منو
// ========================================
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
        if (current === '' && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        }
    });
}

// ========================================
// 13. راه‌اندازی همه چیز
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initProducts();
    initSlideshow();
    initScrollControls();
    initSearch();
    updateCartCount();
    initSizeSelector();
    initBuyButton();
    initSmoothScroll();

    // اگر در صفحه product.html هستیم
    if (window.location.pathname.includes('product.html') || 
        window.location.pathname.includes('Products/')) {
        initProductDetail();
        initHideGalleryOnScroll();
    }
});

window.addEventListener('scroll', updateActiveNav);

// ========================================
// 14. مخفی/نمایش گالری هنگام اسکرول
// ========================================
function initHideGalleryOnScroll() {
    const gallery = document.querySelector('.product-gallery');
    if (!gallery) return;

    const threshold = 200; // px from top to start hiding
    const mq = window.matchMedia('(max-width: 1024px)'); // only on tablets/phones

    let bound = false;
    const onScroll = () => {
        if (window.scrollY > threshold) {
            gallery.classList.add('hidden-on-scroll');
        } else {
            gallery.classList.remove('hidden-on-scroll');
        }
    };

    function enable() {
        if (bound) return;
        window.addEventListener('scroll', onScroll);
        onScroll();
        bound = true;
    }

    function disable() {
        if (!bound) return;
        window.removeEventListener('scroll', onScroll);
        gallery.classList.remove('hidden-on-scroll');
        bound = false;
    }

    function apply() {
        if (mq.matches) {
            enable();
        } else {
            disable();
        }
    }

    if (mq.addEventListener) {
        mq.addEventListener('change', apply);
    } else if (mq.addListener) {
        mq.addListener(apply); // older browsers
    }
    apply();
}


