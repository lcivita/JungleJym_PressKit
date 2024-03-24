document.addEventListener('DOMContentLoaded', function() {
    var text = document.getElementById('loading-text');
    setTimeout(() => {
        text.style.opacity = 0;
    }, 1300);
    
    
    setTimeout(function() {
        var overlay = document.getElementById('loading-overlay');
        
        overlay.style.opacity = 0;
        setTimeout(function() {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 2200);
    }, 2200);
});
//
// document.addEventListener('DOMContentLoaded', function() {
//     const loadingText = document.getElementById('loading-text');
//
//     // Start the fade-out effect for the text immediately
//     setTimeout(() => {
//         loadingText.style.opacity = 0;
//     }, 1500); // Delay before the fade starts, adjust as needed
// });