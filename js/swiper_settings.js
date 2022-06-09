var swiper = new Swiper(".hero__swiper", {
  pagination: {
    // el: ".swiper-pagination",
    // type: "bullets",
    clickable: true
  },
  spaceBetween: 0,
  effect: "fade",
  centeredSlides: true,
  speed: 2000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  }
});