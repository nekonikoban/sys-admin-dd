window.addEventListener("DOMContentLoaded", (e) => {

    console.log("JS Loaded")

    // Hide the loader when the page is fully loaded
    var loader = document.getElementById('loader')
    if ( loader )
         loader.remove()

    // Section Highlighting and Connecting Lines on Hover
    var sections = document.querySelectorAll('section')

        sections.forEach(function (section) {
            section.addEventListener('mouseenter', function () {
                section.classList.add('section-highlighted')

                // Dim other elements
                sections.forEach(function (otherSection) {
                    if (otherSection !== section) {
                        otherSection.style.transition = 'opacity 0.3s ease-in-out'
                        otherSection.style.opacity = '0.9'
                    }
                })
            })

            section.addEventListener('mouseleave', function () {
                // Reset styles on mouse leave
                sections.forEach(function (otherSection) {
                    otherSection.style.transition = 'opacity 0.3s ease-in-out'
                    otherSection.style.opacity = '1'
                })
            })
        })
})