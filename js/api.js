const productsContainer = document.getElementById("productsContainer");

// Fetch products
async function getProduct() {

    try {

        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        productsContainer.innerHTML = "";

        data.products.forEach((product) => {

            productsContainer.innerHTML += `

                <div class="card">

                    <button class="discountp">
                        ${Math.ceil(product.discountPercentage)}% OFF
                    </button>

                    <img src="${product.thumbnail}" alt="${product.title}">

                    <button class="available">
                        ${product.availabilityStatus}
                    </button>

                    <div class="bg">

                        <h5>${product.category}</h5>

                        <h6>${product.title}</h6>

                        <p>⭐ ${product.rating}</p>

                    </div>

                </div>

            `;

        });

    } catch (error) {
        console.log(error);
    }

}

getProduct();