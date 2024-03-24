document.addEventListener('DOMContentLoaded', function () {
    // no scroll
    window.addEventListener('wheel', function (event) {
        event.preventDefault();
    }, {passive: false});

    // no touchscreen scroll
    window.addEventListener('touchmove', function (event) {
        event.preventDefault();
    }, {passive: false});
});