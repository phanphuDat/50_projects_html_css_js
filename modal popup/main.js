var btnOpen = document.querySelector(".modal__open");
var boxModal = document.querySelector(".modal");
var iconClose = document.querySelector(".inner__header--exit");
var btnClose = document.querySelector(".modal__inner--footer button");
var modalInner = document.querySelector(".modal__inner");

function toggleModal() {
  boxModal.classList.toggle("hidden");
}

btnOpen.addEventListener("click", toggleModal);
iconClose.addEventListener("click", toggleModal);
btnClose.addEventListener("click", toggleModal);
boxModal.addEventListener("click", function (event) {
  //   if (event.target.classList.value === "modal") {
  //     toggleModal();
  //   }
  if (event.target === event.currentTarget) {
    toggleModal();
  }
});
