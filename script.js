// السلة
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// تحديث عدد المنتجات
function updateCartCount() {
    const cartIcon = document.querySelector(".fa-cart-shopping");

    if (!cartIcon) return;

    let badge = document.querySelector(".cart-count");

    if (!badge) {
        badge = document.createElement("span");
        badge.className = "cart-count";
        cartIcon.parentElement.style.position = "relative";
        cartIcon.parentElement.appendChild(badge);
    }

    badge.textContent = cart.length;
}

// أزرار إضافة إلى السلة
const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.parentElement;

        const product = {
            name: card.querySelector("h3").textContent,
            price: card.querySelector("p").textContent,
            image: card.querySelector("img").src
        };

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartCount();

        button.textContent = "✔ تمت الإضافة";

        setTimeout(() => {

            button.textContent = "أضف إلى السلة";

        },1500);

    });

});

updateCartCount();
