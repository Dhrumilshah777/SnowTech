$(document).ready(function () {
    $("#search-icon").click(function () {
        $(".search-bar-main-main").addClass("search-bar-main-main-transform");
        return false;
    });

    $("#search-close-icon").click(function () {
        $(".search-bar-main-main").removeClass("search-bar-main-main-transform");
    });

    $(".categories-main").click(function () {
        $(".categories-content").slideToggle();
    });

    $(".new-arrivals-main").click(function () {
        $(".new-arrivals-content").slideToggle();
    });

    $("#cart-icon").click(function () {
        $(".shopping-cart-main").addClass("shopping-cart-main-transform");
        return false;
    });

    $("#close-cart-icon").click(function () {
        $(".shopping-cart-main").removeClass("shopping-cart-main-transform");

    });

    $("#user-icon").click(function () {
        $(".form-main").addClass("form-main-transform");
        return false;
    });
    
    $("#user-close-icon").click(function () {
        $(".form-main").removeClass("form-main-transform");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll('.categories-content li');

    categories.forEach(category => {
        category.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent bubbling up

            // Collapse all categories except the clicked one
            categories.forEach(item => {
                if (item !== category) {
                    item.classList.remove('dropdown-active');
                }
            });

            // Toggle the clicked category
            category.classList.toggle('dropdown-active');
        });
    });
});






document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll('.new-arrivalsy-content li');

    categories.forEach(category => {
        category.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent bubbling up

            // Collapse all categories except the clicked one
            categories.forEach(item => {
                if (item !== category) {
                    item.classList.remove('dropdown-active');
                }
            });

            // Toggle the clicked category
            category.classList.toggle('dropdown-active');
        });
    });
});





// gsap
let tl = gsap.timeline()

tl.from(".nav-links-main ul li", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
});


// gsap



