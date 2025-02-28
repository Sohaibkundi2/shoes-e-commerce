document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".hero-content", { y: -50, opacity: 0, duration: 1 });
    gsap.from(".category-card", { scale: 0, opacity: 0, duration: 0.5, stagger: 0.2 });
    gsap.from(".product-card", { x: -50, opacity: 0, duration: 0.5, stagger: 0.2 });
});

const cartItems = [];
const cartContainer = document.querySelector(".cart-items");
const totalPriceElement = document.getElementById("total-price");

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const productName = button.previousElementSibling.previousElementSibling.textContent;
        const productPrice = parseFloat(button.previousElementSibling.textContent.replace("$", ""));
        
        cartItems.push({ name: productName, price: productPrice });
        updateCart();
    });
});

function updateCart() {
    cartContainer.innerHTML = "";
    let total = 0;

    cartItems.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.textContent = `${item.name} - $${item.price}`;
        cartContainer.appendChild(cartItem);
        total += item.price;
    });

    totalPriceElement.textContent = `$${total}`;
}
document.querySelectorAll(".scroll-btn").forEach(button => {
    button.addEventListener("click", () => {
        const targetSection = document.querySelector(button.dataset.target);
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});
