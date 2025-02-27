document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { id: 1, name: "Sneaker", price: 50 },
        { id: 2, name: "Formal", price: 80 }
    ];
    
    const productGrid = document.querySelector(".product-grid");
    products.forEach(product => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${product.name}</h3><p>$${product.price}</p><button onclick="addToCart(${product.id})">Add to Cart</button>`;
        productGrid.appendChild(div);
    });
});

function addToCart(id) {
    alert("Added product " + id + " to cart!");
}
