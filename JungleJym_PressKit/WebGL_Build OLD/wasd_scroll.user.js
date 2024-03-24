// ==UserScript==
// @name          WASD Scroll hotkeys for websites
// @namespace     wasd_scroll
// @author        Owyn
// @version       1.0
// @description   Use WASD keys to scroll websites, not just arrows
// @updateURL     https://github.com/Owyn/WASD_Scroll/raw/master/WASD_Scroll.user.js
// @downloadURL   https://github.com/Owyn/WASD_Scroll/raw/master/WASD_Scroll.user.js
// @supportURL    https://github.com/Owyn/WASD_Scroll/issues
// @homepage      https://github.com/Owyn/WASD_Scroll
// @run-at        document-end
// @grant         GM_registerMenuCommand
// @include       *
// ==/UserScript==

"use strict";

var by = 70;
var scroll_speed = "auto"; // "smooth" / "instant" / "auto" - same as browser settings

if (typeof GM_registerMenuCommand !== "undefined")
{
    GM_registerMenuCommand("WASD Scroll - Disable (this once)", disable, "w");
}

window.addEventListener("keydown", onkeydown, false); // after all others

if (typeof KeyEvent === "undefined")
{
    var KeyEvent = {
        DOM_VK_A: 65,
        DOM_VK_D: 68,
        DOM_VK_S: 83,
        DOM_VK_W: 87
    };
}

var inputs = ['input', 'select', 'button', 'textarea'];

function onkeydown (b)
{
    let a = (window.event) ? b.keyCode : b.which;

    if (b.altKey || b.ctrlKey || b.metaKey)
    {
        return;
    }

    let activeElement = document.activeElement;
    if (activeElement && inputs.indexOf(activeElement.tagName.toLowerCase()) !== -1)
    {
        return;
    }

    switch (a)
    {
        case KeyEvent.DOM_VK_D:
            window.scrollBy({
                top: 0,
                left: by,
                behavior: scroll_speed
            });
            break;
        case KeyEvent.DOM_VK_A:
            window.scrollBy({
                top: 0,
                left: by * -1,
                behavior: scroll_speed
            });
            break;
        case KeyEvent.DOM_VK_W:
            window.scrollBy({
                top: by * -1,
                left: 0,
                behavior: scroll_speed
            });
            break;
        case KeyEvent.DOM_VK_S:
            window.scrollBy({
                top: by,
                left: 0,
                behavior: scroll_speed
            });
            break;
    }
}

function disable()
{
    window.removeEventListener("keydown", onkeydown, false);
    console.warn("WASD Scroll disabled");
}