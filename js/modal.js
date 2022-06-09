// const btns = document.querySelectorAll('.galerey__slide');
// const modalOverlay = document.querySelector('.gallery__popup');
// const modal = document.querySelectorAll('.gallery__popup__body');
// const closeBtns = document.querySelectorAll('.gallery__popup__close')
// const body = document.querySelector('.body')

// btns.forEach((el) => {
//     document.querySelector(".gallery__popup").classList.add("gallery__popup__active");
//     // document.querySelector(".burger").classList.add("_active");
//     document.querySelector('body').classList.add('lock');
// });

// modalOverlay.addEventListener('click', (e) => {


//   if (e.target == modalOverlay) {
//     modalOverlay.classList.remove('gallery__popup__visible');
//     modal.forEach((el) => {
//       el.classList.remove('gallery__popup__body__visible')
//     });
//     body.classList.remove('modal-open');
//   }

// const modal_btn = document.querySelectorAll('.gallery__slide');
// console.log('modal_btn:', modal_btn);
// modal_btn.forEach((el) => {
//   el.addEventListener('click', (e) => {
//     document.querySelector(".gallery__popup").classList.add("gallery__popup__visible");
//     document.querySelector(".gallery__popup__body").classList.add("gallery__popup__body__visible");
//     document.querySelector('body').classList.add('lock');
//   });
// });
// document.querySelector(".gallery__popup__close").addEventListener("click", function() {
//     document.querySelector(".gallery__popup").classList.remove("gallery__popup__visible");
//     document.querySelector(".gallery__popup__body").classList.remove("gallery__popup__body__visible");
//     document.querySelector('body').classList.remove('lock');
// });

// window.addEventListener('click', (e) => 
//   console.log('element:', e.target.classList)
// );

const modal_btn = document.querySelectorAll('.gallery__slide');
const modalOverlay = document.querySelector('.gallery__popup');
const modal = document.querySelectorAll('.gallery__popup__body');
const closeBtns = document.querySelectorAll('.gallery__popup__close');
const body = document.querySelector('body');
// console.log('modal_btn:', modal_btn);
  modal_btn.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      let path = e.currentTarget.getAttribute('data-path');
      console.log('path:', path);
      modal.forEach((el) => {
        el.classList.remove('gallery__popup__body__visible')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('gallery__popup__body__visible');
      modalOverlay.classList.add('gallery__popup__visible');
    //   document.querySelector('body').classList.add('lock');
      body.classList.add('lock');
    });
  });
  modalOverlay.addEventListener('click', (e) => {
    if (e.target == modalOverlay) {
      modalOverlay.classList.remove('gallery__popup__visible');
      modal.forEach((el) => {
        el.classList.remove('gallery__popup__body__visible')
      });
    //   document.querySelector('body').classList.remove('lock');
      body.classList.remove('lock');
    }
  });
  closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', (e) => {
      modal.forEach((el) => {
        el.classList.remove('gallery__popup__body__visible')
      });
      modalOverlay.classList.remove('gallery__popup__visible');
    //   document.querySelector('body').classList.remove('lock');
      body.classList.remove('lock');
    });
  })