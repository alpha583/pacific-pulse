// Language Select Functionality
document.getElementById('language-select').addEventListener('change', function changeLanguage() {
  const selectedLanguage = document.getElementById('language-select').value;
  if (selectedLanguage === 'en') {
    alert('Language changed to English');
  } else {
    alert('Language changed to Hinglish');
  }
});

// Filter Interaction
const filterOptions = document.querySelectorAll('.filter-option');
filterOptions.forEach(option => {
  option.addEventListener('click', function() {
    const subOptions = this.querySelector('.sub-options');
    if (subOptions) {
      subOptions.style.display = subOptions.style.display === 'block' ? 'none' : 'block';
    }
  });
});
``` Here’s the complete code for the updated **Pacific Search** website, incorporating all your specified features and ensuring a professional and mobile-friendly design.

### HTML (index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pacific Search</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <div class="blue-ribbon">
      <h1>Pacific Search</h1>
    </div>
    <div class="search-bar">
      <input type="text" placeholder="Search for reviews...">
      <button>Search</button>
    </div>
  </header>

  <div class="scrolling-message">
    <p>Welcome to Pacific Search - Find detailed reviews for your favorite products. Use the filters or search bar to get started!</p>
  </div>

  <main>
    <aside class="filter-panel">
      <h3>Filter by Category</h3>
      <ul>
        <li class="filter-option">Cars</li>
        <li class="filter-option">Mobiles
          <ul class="sub-options">
            <li>Apple</li>
            <li>Samsung</li>
            <li>Redmi</li>
            <li>OnePlus</li>
          </ul>
        </li>
        <li class="filter-option">PC Motherboard & Other Electronics
          <ul class="sub-options">
            <li>Gaming Motherboards</li>
            <li>Workstation Motherboards</li>
            <li>Accessories</li>
          </ul>
        </li>
      </ul>
    </aside>

    <section class="content-area">
      <h2>Welcome to Pacific Search</h2>
      <p>Find detailed reviews for your favorite products. Use the filters or search bar to get started!</p>
    </section>
  </main>

  <footer>
    <p>&copy; 2023 Pacific Search. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
