const products = document.querySelector('#products');
productsList;

// console.log(productsList)
products.innerHTML='';
productsList.forEach(product => {
    console.log(product.image)
    products.innerHTML += `
    <div class="products__card card">
        <div class="card__img">
            <img src="images/${product.image}" alt="id: ${product.id}">
            <div class="card__btn">
                <a href="product.html" class="card__cart">
                    <div class="card__cart-wrap">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <span>add to cart</span>	
                    </div>
                </a>
                <a href="#" class="card__like">
                    <i class="fa-regular fa-heart"></i>
                    <!-- <i class="fa-solid fa-heart"></i> -->
                </a>
            </div>
        </div>
        <div class="card__text">
            <h4>Flamboyant Pink Top</h4>
            ${(product.price != null)? `<p class="card__price">$${(Math.round(product.price*100)/100).toFixed(2)}</p>`:''}
        </div>
    </div>`;
});

// console.log(products)
