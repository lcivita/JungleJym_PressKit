document.addEventListener('DOMContentLoaded', function() {
    var text = document.getElementById('loading-text');
    setTimeout(() => {
        text.style.opacity = 0;
    }, 1500);
    
    
    setTimeout(function() {
        var overlay = document.getElementById('loading-overlay');
        
        overlay.style.opacity = 0;
        setTimeout(function() {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 2500);
    }, 2500);
});