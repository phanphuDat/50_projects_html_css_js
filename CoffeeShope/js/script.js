const searchForm = document.querySelector(".search-form");
const cartItemsContainer = document.querySelector(".cart-items-container");
const checkoutCart = document.querySelector("#checkout-cart");
const navbar = document.querySelector(".navbar");

document.querySelector("#search-icon").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItemsContainer.classList.remove("active");
};

document.querySelector("#shop-icon").onclick = () => {
  cartItemsContainer.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};
checkoutCart.addEventListener("click", () => {
  cartItemsContainer.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
});

document.querySelector("#bar-icon").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItemsContainer.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItemsContainer.classList.remove("active");
};

// HEADER SCROLL

const header = document.querySelector(".header");

window.addEventListener("scroll", (e) => {
  var scroll_y = this.scrollY;
  if (scroll_y > 0) {
    header.style.padding = ".5rem 1.5rem";
    // header.style.opacity = '1'
    header.classList.add("scroll");
  }
  if (scroll_y == 0) {
    header.style.padding = "1.5rem 7%";
    header.classList.remove("scroll");
  }
});

//form control 
const labels = document.querySelectorAll('.form-control label');

// labels.forEach((label) => {
//   label.innerHTML = label.innerText
//     .split("")
//     .map(
//       (letter, idx) =>
//         `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
//     )
//     .join("");
// });
