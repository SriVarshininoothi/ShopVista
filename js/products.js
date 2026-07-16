
const productsContainer = document.getElementById("productsContainer");
const productFound = document.getElementById("productFound");
const searchcategory = document.getElementById("searchcategory");
const searchproduct = document.getElementById("searchproduct");
const sortby = document.getElementById("sort");



let allProducts = [];

// Display Products
function displayProducts(products) {

    productsContainer.innerHTML = "";

    productFound.innerHTML = `
        <h5 class="foundcount">${products.length} Products Found</h5>
    `;

    products.forEach((product) => {

        productsContainer.innerHTML += `

        <div class="col-lg-3 col-md-4 col-sm-6">

            <div class="card">

                <button class="discountp">
                    -${Math.ceil(product.discountPercentage)}%
                </button>

                <img src="${product.thumbnail}" alt="${product.title}">

                <button class="available">
                    ${product.availabilityStatus}
                </button>

                <div class="bg">

                    <h5 class="category1">
                        ${product.category}
                    </h5>

                    <h6 class="title">
                        ${product.title}
                    </h6>

               <div class="d-flex align-items-center gap-1">
                      ${getStars(product.rating)}
                    <span>${product.rating}</span>
                </div>

                    <h5 class="price1">
                        $${product.price}
                    </h5>

                </div>

            </div>

        </div>

        `;

    });

}

// Fetch All Products
async function getProducts() {

    try {

        // Fetch all
        const response = await fetch("https://dummyjson.com/products?limit=194");

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        allProducts = data.products;
        displayProducts(allProducts);

        console.log("Total Products :", data.total);
        console.log("Fetched Products :", data.products.length);



    } catch (error) {

        console.log(error);

        productsContainer.innerHTML = `
            <h3 class="text-center text-danger">
                Failed to load products.
            </h3>
        `;
    }

}

getProducts();

// load categories

async function getCategories() {

    try {

        const response = await fetch("https://dummyjson.com/products/categories");
        const categories = await response.json();

        searchcategory.innerHTML = `

    <option value="">All Categories</option>
    
    `;

        categories.forEach((category) => {

            searchcategory.innerHTML += `

        <option value="${category.slug}">${category.name}</option>

        
        `;

        });
    } catch (error) {
        console.log(error);
    }



}

getCategories();


//search input 
function getSearchProduct() {

    const searchText = searchproduct.value.toLowerCase().trim();
const selectedCategory = searchcategory.value;
    const filteredProducts = allProducts.filter((product) => {

        const matchSearch = 
            product.title.toLowerCase().includes(searchText) ||
            product.category.toLowerCase().includes(searchText);
        
            const matchCategory =
            selectedCategory ==="" || product.category===selectedCategory;
    
            return matchSearch && matchCategory;

    });

    if (filteredProducts.length > 0) {

        displayProducts(filteredProducts);

    } else {

        productsContainer.innerHTML = `
            <div class="col-12 text-center py-5">

                <i class="bi bi-search fs-1 text-secondary"></i>

                <h4>No Products Found</h4>

                <p>Try a different search or category.</p>

                <button id="clearBtn" class="btn btn-danger">
                    Clear Filters
                </button>

            </div>
        `;

        productFound.innerHTML = `
            <h5 class="foundcount">0 Products Found</h5>
        `;

        document.getElementById("clearBtn").addEventListener("click", () => {

            searchproduct.value = "";

            displayProducts(allProducts);

        });

    }

}
function sortProducts() {

    let products = [...allProducts];

    if (sortby.value === "low") {

        products.sort((a, b) => a.price - b.price);

    } 
    else if (sortby.value === "high") {

        products.sort((a, b) => b.price - a.price);

    } 
    else if (sortby.value === "rating") {

        products.sort((a, b) => b.rating - a.rating);

    }

    displayProducts(products);

}
searchproduct.addEventListener("input", getSearchProduct);
searchcategory.addEventListener("change", getSearchProduct);
sortby.addEventListener("change", sortProducts);

function getStars(rating) {

    let stars = "";

    let fullStars = Math.floor(rating);
    let halfStar = rating % 1 >= 0.5;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars += `<i class="bi bi-star-fill star"></i>`;
    }

    // Half star
    if (halfStar) {
        stars += `<i class="bi bi-star-half star"></i>`;
    }

    // Empty stars
    let emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < emptyStars; i++) {
        stars += `<i class="bi bi-star star"></i>`;
    }

    return stars;
}


