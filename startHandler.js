if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    var meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
    document.getElementsByTagName('head')[0].appendChild(meta);


    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
    overlay.style.zIndex = '1000';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.color = '#fff';
    overlay.style.fontSize = '20px';
    overlay.style.textAlign = 'center';
    overlay.style.padding = '20px';
    
    overlay.innerHTML = 'Device not supported <br><br><a href="https://example.com">mobile view</a>';
    
    document.body.appendChild(overlay);
    
    document.body.style.overflow = 'hidden';
    
    document.body.style.textAlign = "center";
}

function isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

if (isSafari()) {
    // Create overlay div
    var overlay = document.createElement('div');
    overlay.setAttribute('id', 'browserOverlay');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.75)';
    overlay.style.zIndex = '1000';
    overlay.style.display = 'absolute';
    overlay.style.flexDirection = 'column';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.color = '#fff';
    overlay.style.fontSize = '20px';
    overlay.style.textAlign = 'center';
    overlay.style.paddingTop = '40vh';
    
    overlay.innerHTML = 'Browser not fully supported. <br><br> Consider using a different browser.<br><br>' ;
    
    document.body.appendChild(overlay);

    // Dismiss button
    var dismissButton = document.createElement('button');
    dismissButton.innerText = 'Continue anyway';
    dismissButton.style.marginTop = '20px';
    dismissButton.style.padding = '10px 20px';
    dismissButton.style.fontSize = '16px';
    dismissButton.style.color = '#fff';
    dismissButton.style.backgroundColor = '#000';
    dismissButton.style.border = 'solid white 2px';
    dismissButton.style.cursor = 'pointer'; // Updated cursor style for consistency
    // Hover effects
    dismissButton.onmouseover = function() {
        dismissButton.style.backgroundColor = '#555'; // Darker shade on hover
        dismissButton.style.color = '#fff';
        
    };
    dismissButton.onmouseout = function() {
        dismissButton.style.backgroundColor = '#000'; // Back to original color
        dismissButton.style.color = '#fff';
    };
    dismissButton.onclick = function() {
        document.getElementById('browserOverlay').style.display = 'none';
    };

    overlay.appendChild(dismissButton);

    document.body.appendChild(overlay);

    document.body.style.overflow = 'hidden';

    document.body.style.textAlign = "center";

}

createUnityInstance(document.querySelector("#unity-canvas"), {
    dataUrl: "Build/WebGL_Build.data",
    frameworkUrl: "Build/WebGL_Build.framework.js",
    codeUrl: "Build/WebGL_Build.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "Imuhjym",
    productName: "JungleJym_PressKit",
    productVersion: "0.1",
    // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
    // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
});