<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

document.addEventListener('DOMContentLoaded', function () {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    const logoImg = document.querySelector('.logo-img');

    function handleScroll() {
        if (window.scrollY > 30) {
            navbar.classList.add('scrolled');
            logoImg.style.height = '40px';
        } else {
            navbar.classList.remove('scrolled');
            logoImg.style.height = '48px';
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize

    // Add to cart animation
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const cartCount = document.querySelector('.cart-count');
            let count = parseInt(cartCount.textContent);
            cartCount.textContent = count + 1;

            // Add animation
            cartCount.style.transform = 'scale(1.5)';
            setTimeout(() => {
                cartCount.style.transform = 'scale(1)';
            }, 300);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    const logoImg = document.querySelector('.logo-img');

    function handleScroll() {
        if (window.scrollY > 30) {
            navbar.classList.add('scrolled');
            logoImg.style.height = '40px';
        } else {
            navbar.classList.remove('scrolled');
            logoImg.style.height = '48px';
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize

    // Animate elements on load
    const animateElements = (elements, delay) => {
        elements.forEach((el, i) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(-10px)';
            el.style.animation = `fadeIn 0.4s ease forwards ${i * 0.1 + delay}s`;
        });
    };

    animateElements(document.querySelectorAll('.nav-item'), 0.3);
    animateElements(document.querySelectorAll('.btn-paws, .cart-icon'), 0.8);
});

// Mobile filter functionality
const mobileFilterBtn = document.getElementById('mobileFilterBtn');
const mobileFilterContainer = document.getElementById('mobileFilterContainer');
const closeFilter = document.getElementById('closeFilter');
const applyMobileFilters = document.getElementById('applyMobileFilters');

mobileFilterBtn.addEventListener('click', function () {
    mobileFilterContainer.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closeFilter.addEventListener('click', function () {
    mobileFilterContainer.style.display = 'none';
    document.body.style.overflow = 'auto';
});

applyMobileFilters.addEventListener('click', function () {
    mobileFilterContainer.style.display = 'none';
    document.body.style.overflow = 'auto';
    // Here you would add your filter logic
    alert('Filters applied! (This would filter products in a real implementation)');
});

// Close when clicking outside the filter content
mobileFilterContainer.addEventListener('click', function (e) {
    if (e.target === mobileFilterContainer) {
        mobileFilterContainer.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});