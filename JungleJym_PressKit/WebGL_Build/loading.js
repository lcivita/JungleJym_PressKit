document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var overlay = document.getElementById('loading-overlay');
        overlay.style.opacity = 0;
        setTimeout(function() {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }, 2500); // Match the CSS transition duration
    }, 2500); // How long to show the loading screen
});
