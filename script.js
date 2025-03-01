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