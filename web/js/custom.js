/* Add here all your JS customizations */

$(".modalities_carousel").carouFredSel({
    width: 809,
    height: 250,
    items: {
        visible: 1,
        minimum: 2,
        width: 800,
        height: 240
    },
    scroll: {
        fx: "fade",
        pauseOnHover: true,
        duration: 1000
    },
    auto: 6000
});



$(".testimonial_carousel").carouFredSel({
    width: 240,
    height: 230,
    items: {
        visible: 1,
        start: 1,
        width: 210,
        height: 220
    },
    scroll: {
        easing: "linear",
        duration: 1000,
        pauseOnHover: true
    },
    auto: 5000
});
