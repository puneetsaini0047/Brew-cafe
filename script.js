const menuOpenButton = document.querySelector(".fa-bars");
const menuCloseButton = document.querySelector(".fa-times");

menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-menu");
});




const swiper = new Swiper('.slider-wrapper', {
  
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,

  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
  0: {
    slidesPerView: 1
  },
  768: {
    slidesPerView: 2
  },
  1024: {
    slidesPerView: 3
  }
}

});