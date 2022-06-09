document.addEventListener('DOMContentLoaded', function() {
    console.log(document.querySelectorAll('.accordion__text'))
    document.querySelectorAll('.accordion__text').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            // console.log(path, path==='two', document.querySelector('[data-target="${path}"]'))

            document.querySelectorAll('.steps-content').forEach(function(tabContent) {
                tabContent.classList.remove('steps-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('steps-content-active')
        }) 
    })
})