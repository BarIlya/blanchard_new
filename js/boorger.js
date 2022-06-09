document.querySelector(".header__btn-open").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.add("active");
  // document.querySelector(".burger").classList.add("_active");
  document.querySelector('body').classList.add('lock');
})
// function menu_close() {
//   document.querySelector(".header__nav").classList.remove("active");
//   document.querySelector(".burger").classList.remove("_active");
//   document.querySelector('body').classList.remove('lock');
// }
// document.querySelector(".header__link").addEventListener("click", 
//)
const btns = document.querySelectorAll('.header__link, .header__nav__close');
btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    document.querySelector(".header__nav").classList.remove("active");
    // document.querySelector(".burger").classList.remove("_active");
    document.querySelector('body').classList.remove('lock');
  });
});

// window.addEventListener('click', function(e) {
//   console.log('element:', e.target.innerHTML);
// });

// window.addEventListener('click', (e) => 
//   console.log('element:', e.target.classList)
// );