const productsContainer = document.getElementById("productsContainer");
const productFound = document.getElementById("productFound");

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

        console.log("Total Products :", data.total);
        console.log("Fetched Products :", data.products.length);

        displayProducts(data.products);

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