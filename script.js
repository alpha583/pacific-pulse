// Sample product data
const products = [
    {
        id: 1,
        name: "Product 1",
        image: "product1.jpg",
        price: "$100",
        discount: "10%",
        offers: "Free shipping",
        category: "electronics",
        platforms: [
            { name: "Platform 1", logo: "platform1-logo.png" },
            { name: "Platform 2", logo: "platform2-logo.png" }
        ]
    },
    {
        id: 2,
        name: "Product 2",
        image: "product2.jpg",
        price: "$200",
        discount: "15%",
        offers: "Buy one get one free",
        category: "clothing",
        platforms: [
            { name: "Platform 3", logo: "platform3-logo.png" },
            { name: "Platform 4", logo: "platform4-logo.png" }
        ]
    },
    // Add more products as needed
];

// Function to display products
function displayProducts(filteredProducts) {
    const productDisplay = document.querySelector('.product-display');
    productDisplay.innerHTML = ''; // Clear existing products

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="specifications">
                <p>Price: ${product.price}</p>
                <p>Discount: ${product.discount}</p>
                <p>Offers: ${product.offers}</p>
            </div>
            <div class="ecommerce-options">
                ${product.platforms.map(platform => `
                    <div class="ecommerce-option">
                        <img src="${platform.logo}" alt="${platform.name} Logo">
                    </div>
                `).join('')}
            </div>
        `;

        productDisplay.appendChild(productDiv);
    });
}

// Function to filter products based on category
function filterProducts() {
    const categorySelect = document.getElementById('category');
    const selectedCategory = categorySelect.value;

    const filteredProducts = products.filter(product => {
        return selectedCategory === 'all' || product.category === selectedCategory;
    });

    displayProducts(filteredProducts);
}

// Function to handle search
function searchProducts() {
    const searchInput = document.querySelector('.search-bar input');
    const searchTerm = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchTerm);
    });

    displayProducts(filteredProducts);
}

// Event listeners
document.getElementById('category').addEventListener('change', filterProducts);
document.querySelector('.search-bar input').addEventListener('input', searchProducts);

// Initial display of products
displayProducts(products);
