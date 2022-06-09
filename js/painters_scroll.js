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

            scrollTarget.classList.add('active_link');
            currentBtn.classList.add('active_tab');

            // console.log('screenWidth:', window.screen.width);
            // console.log('screenWidth_2:', document.documentElement.clientWidth);
            if (document.documentElement.clientWidth <= 500) {
                const elementPosition = scrollTarget.getBoundingClientRect().top;

                window.scrollBy({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            };
        };
    });
});