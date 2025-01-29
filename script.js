// Dummy product data for demo purposes
const products = [
    { name: "Smartphone", image: "https://via.placeholder.com/200", description: "Latest smartphone with high performance.", price: "$499" },
    { name: "Laptop", image: "https://via.placeholder.com/200", description: "Powerful laptop for work and play.", price: "$899" },
    { name: "Wireless Headphones", image: "https://via.placeholder.com/200", description: "Noise-cancelling wireless headphones.", price: "$129" },
    { name: "Smartwatch", image: "https://via.placeholder.com/200", description: "Track your fitness with this smartwatch.", price: "$199" },
];

// Function to filter products based on the search input
function searchProduct() {
    const searchQuery = document.getElementById("product-search").value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery)
    );

    displayProducts(filteredProducts);
}

// Function to display products on the page
function displayProducts(productsToDisplay) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ''; // Clear previous products

    productsToDisplay.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">${product.price}</div>
            <button>Buy Now</button>
        `;

        productList.appendChild(productDiv);
    });
}

// Display all products when the page loads
window.onload = () => displayProducts(products);
