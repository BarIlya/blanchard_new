// document.querySelectorAll('.painters__scroll-link').forEach(link => {
//     link.addEventListener('click', function(e) {
//         e.preventDefault();

//         const href = this.getAttribute('href').substring(1);
//         const scrollTarget = document.getElementById(href);
//         const elementPosition = scrollTarget.getBoundingClientRect().top;

//         window.scrollBy({
//             top: elementPosition,
//             behavior: 'smooth'
//         });
//     });
// });

// document.querySelectorAll('.catalog__painter-date-content-item').forEach(function (tabsBTN) {
//     tabsBTN.addEventListener('click', function (event) {
//       const path = event.currentTarget.dataset.path
//       console.log(path);

//       document.querySelectorAll('.catalog__painter-description').forEach(function (tabContent) {
//         tabContent.classList.remove('catalog__painter-description_active')
//       })
//       document.querySelector(`[data-target="${path}"]`).classList.add('catalog__painter-description_active')
//     })
//   })

const tabsBtn = document.querySelectorAll(".painters__scroll-link");
// console.log('tabsBtn:', tabsBtn);
tabsBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        // console.log('currentBtn:', currentBtn);
        let tabAttribute = currentBtn.getAttribute('data-tab');
        let scrollTarget = document.getElementById(tabAttribute);

        if(!currentBtn.classList.contains('active_tab','active_link')) {

            tabsBtn.forEach(function(item) {
                item.classList.remove('active_tab','active_link')
            });

            // console.log('data-tab:', tabAttribute);
            // console.log('scrollTarget:', scrollTarget);

            scrollTarget.classList.add('active_tab');
            currentBtn.classList.add('active_link');

            // console.log('screenWidth:', window.screen.width);
            // console.log('screenWidth_2:', document.documentElement.clientWidth);
            if (document.documentElement.clientWidth < 1024) {
                const elementPosition = scrollTarget.getBoundingClientRect().top;

                window.scrollBy({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            };
        };
    });
});