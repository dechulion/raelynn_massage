/* Add here all your JS customizations */

$(".modalities_carousel").carouFredSel({
    width: 809,
    height: 250,
    items: {
        visible: 1,
        minimum: 1,
        width: 800,
        height: 240
    },
    scroll: {
        fx: "crossfade",
        duration: 1000
    },
    auto: 5000
});



$(".testimonial_carousel").carouFredSel({
    width: 213,
    height: 230,
    items: {
        visible: 1,
        start: 1,
        width: 205,
        height: 220
    },
    scroll: {
        easing: "linear",
        duration: 1000,
        pauseOnHover: true
    },
    auto: 5000
});
