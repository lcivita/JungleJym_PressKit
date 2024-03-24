let moveDir;

const scrollAmount = 300;

const inputAccel = 0.05;

let Wdown = false, Adown = false, Sdown = false, Ddown = false;

function setup() {
    window.scrollTo(1500 - windowWidth/2, windowHeight/3);
    moveDir = createVector(0, 0);
    let canvas = createCanvas(1,1);
    canvas.parent("unity-canvas");

    window.onblur = function() {
        moveDir.set(0, 0); // Reset moveDir to 0,0
        
        Wdown = false;
        Adown = false;
        Sdown = false;
        Ddown = false;
    };

    window.onfocus = function() {
        moveDir.set(0, 0); // Reset moveDir to 0,0

        Wdown = false;
        Adown = false;
        Sdown = false;
        Ddown = false;
    };
}

function draw() {
    // Acceleration
    if (Wdown) {
        moveDir.add(0, -inputAccel);
    } else if (moveDir.y < 0) {
        moveDir.y += inputAccel;
        if (moveDir.y > 0) moveDir.y = 0;
    }

    if (Sdown) {
        moveDir.add(0, inputAccel);
    } else if (moveDir.y > 0) {
        moveDir.y -= inputAccel;
        if (moveDir.y < 0) moveDir.y = 0;
    }

    if (Adown) {
        moveDir.add(-inputAccel, 0);
    } else if (moveDir.x < 0) {
        moveDir.x += inputAccel;
        if (moveDir.x > 0) moveDir.x = 0;
    }

    if (Ddown) {
        moveDir.add(inputAccel, 0);
    } else if (moveDir.x > 0) {
        moveDir.x -= inputAccel;
        if (moveDir.x < 0) moveDir.x = 0;
    }
    
    if (moveDir.mag() > 1) {
        moveDir.normalize();
    }
    
    window.scrollBy(moveDir.x * scrollAmount * deltaTime/1000, moveDir.y * scrollAmount * deltaTime/1000);

}

function keyPressed() {

    if (key === 'W' || key === 'w') {
        Wdown = true;
    }

    if (key === 'S' || key === 's') {
        Sdown = true;
    }

    if (key === 'A' || key === 'a') {
        Adown = true;
    }

    if (key === 'D' || key === 'd') {
        Ddown = true;
    }
}

function keyReleased() {
    if (key === 'W' || key === 'w') {
        Wdown = false;
    }

    if (key === 'S' || key === 's') {
        Sdown = false;
    }

    if (key === 'A' || key === 'a') {
        Adown = false;
    }

    if (key === 'D' || key === 'd') {
        Ddown = false;
    }
}