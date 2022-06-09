// document.querySelector(".header__form-btn__open").addEventListener("click", function() {
//   document.querySelector(".header__search").classList.add("header__search__active");
//   this.classList.add("active");
// })

// document.addEventListener("click", function(e) {
//   let target = e.target;
//   let form = document.querySelector(".header__search");
//   if (!target.closest(".form-container")) {
//   form.classList.remove("header__search__active");
//     form.querySelector("input").value = "";
//     document.querySelector(".header__form-btn__open").classList.remove("active")
//   }
// })

document.querySelector(".header__form-btn__open").addEventListener("click", function() {
  document.querySelector(".header__search__container_sliding").classList.add("header__search__active");
  // console.log(classList.add("header__search__active"))
  document.querySelector(".sliding__search__close").classList.add("active");
  document.querySelector('body').classList.add('lock');
})

document.querySelector(".sliding__search__close").addEventListener("click", function() {
document.querySelector(".sliding__search__close").classList.remove("active");
document.querySelector(".header__search__container_sliding").classList.remove("header__search__active");
document.querySelector('body').classList.remove('lock');
document.querySelector(".sliding__form__input").value = "";
})