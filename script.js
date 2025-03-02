document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    
    const cartCount = document.querySelector(".cart-count");
    const cartItems = document.querySelector(".cart-items");
    const totalPrice = document.querySelector("#total-price");

    if (!cartItems || !cartCount || !totalPrice) {
        console.error("Cart elements not found! Make sure the HTML has the correct class names.");
        return;
    }

    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const productCard = event.target.closest(".product-card");
            const productName = productCard.querySelector("h3").innerText;
            const productPrice = parseFloat(productCard.querySelector("p").innerText.replace("$", ""));
            
            const existingItem = cart.find(item => item.name === productName);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: 1 });
            }
            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;
        
        cart.forEach(item => {
            total += item.price * item.quantity;
            const cartItem = document.createElement("div");
            cartItem.innerHTML = `${item.name} - $${item.price} x ${item.quantity}`;
            cartItems.appendChild(cartItem);
        });

        cartCount.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
        totalPrice.innerText = `$${total.toFixed(2)}`;
    }
});

// Checkout Section
const checkoutSection = document.createElement("section");
checkoutSection.id = "checkout";
checkoutSection.innerHTML = `
    <h2>Checkout</h2>
    <form>
        <input type="text" placeholder="Name" required>
        <input type="text" placeholder="Address" required>
        <input type="text" placeholder="Contact Number" required>
        <p>Payment Method: <strong>Cash on Delivery</strong></p>
        <button type="submit">Confirm Order</button>
    </form>
`;
document.body.appendChild(checkoutSection);


const footerPart = document.createElement("footer");
footerPart.innerHTML = `
    <div class="footer-content">
      <div class="footer-section about">
        <h1 class="logo-text"><span>Shoe</span>Store</h1>
        <p>
          We are a team of shoe lovers who are passionate about providing the best quality shoes to our customers.
        </p>
        <div class="contact">
          <span><i class="fas fa-phone"></i> &nbsp; +923350532352 </span>
          <span><i class="fas fa-envelope"></i> &nbsp;sohaibkundi2@gmail.com
          `
document.body.appendChild(footerPart);





// swiper part
var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });