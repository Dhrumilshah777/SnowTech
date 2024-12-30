$(document).ready(function () {
    $("#search-icon").click(function () {
        $(".search-bar-main-main").addClass("search-bar-main-main");
        return false;
    });
});

$(document).ready(function () {
    $("#search-close-icon").click(function () {
        $(".search-bar-main-main").removeClass("search-bar-main-main-transform");
    });
});


// menu

// cart icon
// cart
$(document).ready(function () {
    $("#cart-icon").click(function () {
        $(".shopping-cart-main").addClass("shopping-cart-main");
        return false;
    });
});
$(document).ready(function () {
    $("#close-cart-icon").click(function () {
        $(".shopping-cart-main").removeClass("shopping-cart-main-transform");

    });
});
// cart
// cart icon


// user login
$(document).ready(function () {
    $("#user-icon").click(function () {
        $(".form-main").addClass("form-main-transform");
        return false;
    });
    $("#user-close-icon").click(function () {
        $(".form-main").removeClass("form-main-transform");
    });
});
// user login


// gsap
let tl = gsap.timeline()

tl.from(".nav-links-main ul li", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
});



// gsap



