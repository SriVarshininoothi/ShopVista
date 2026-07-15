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
                        ${Math.ceil(product.discountPercentage)}%
                    </button>

                    <img src="${product.thumbnail}" alt="${product.title}">

                    <button class="available">
                        ${product.availabilityStatus}
                    </button>

                 <div class="bg">

    <h5 class="category1">${product.category}</h5>

    <h6 class="title">${product.title}</h6>

    <div>


</div>
    <div class="d-flex align-items-center gap-1">
        <i class="bi bi-star-fill star"></i>
        <i class="bi bi-star-fill star"></i>
        <i class="bi bi-star-fill star"></i>
        <i class="bi bi-star-fill star"></i>
        <i class="bi bi-star-half star"></i>

        <span>${product.rating}</span>
    </div>    
    <h5 class="price1">$${product.price}</h5>
    

</div>
</div>

            `;

        });

    } catch (error) {
        console.log(error);
    }

}

getProduct();