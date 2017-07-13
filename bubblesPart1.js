var flag = true;

function Bubble(info) {
    this.radius = info.radius;
    this.x = info.x;
    this.y = info.y;
    this.c = info.c;
    this.Vx = info.Vx;
    this.Vy = info.Vy;
    this.Ax = info.Ax;
    this.Ay = info.Ay;
    this.mass = info.mass;
    this.move = function() {
        this.Vx += this.Ax;
        this.Vy += this.Ay;
        this.x += this.Vx;
        this.y += this.Vy;

        if ((this.x + this.radius) > env.right) {
            this.Vx *= -1;
        }

        if (this.y - this.radius > env.top) {
            this.Vy *= -1;
        }
        if ((this.x - this.radius) < env.left) {
            this.Vx *= -1;
        }
        if (this.y + this.radius < env.bottom) {
            this.Vy *= -1;
        }
    };
}

bubbles = new Array();


function setup() {
    createCanvas(1000, 1000);
    background(0);
}

var env = new theENV(50, 500, 500, 50, 1, 1);

function draw() {
    background(0);
    noFill();
    stroke(255);
    strokeWeight(5);
    rect(env.left, env.bottom, env.right - env.left, env.top - env.bottom);
    for (var i = 0; i < env.bubbles.length; i++) {
        noStroke();
        env.bubbles[i].move();
        fill(env.bubbles[i].c);

        ellipse(env.bubbles[i].x, env.bubbles[i].y, env.bubbles[i].radius * 2, env.bubbles[i].radius * 2);
    }


}

// function mouseClicked() {
//     bubbles.push(new Bubble(mouseX, mouseY, 'red', 10, 10));
// }

var Px;
var Py;


function mousePressed() {
    Px = mouseX;
    Py = mouseY;
    console.log(Px, Py);
    if ((env.left > Px) || (Px > env.right) || (env.bottom < Py) || (Py < env.top)) {
        flag = false;
    }
    else {
        flag = true;
    }
}

function random(start, stop) {
    return Math.floor(Math.random() * (start - stop) + start);
}


function mouseReleased() {
    var mass = random(100, 255)
    var info = {};
    info.radius = 100;
    info.x = Px;
    info.y = Py;
    info.c = [mass, 50, 50];
    info.Vx = (mouseX - Px) / 5;
    info.Vy = (mouseY - Py) / 5;
    info.mass = mass;
    if (flag == true) {
        env.addBubble(info);

    }
}


function theENV(top, right, bottom, left, Ax, Ay) {
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
    this.Ax = Ax;
    this.Ay = Ay;
    this.bubbles = new Array();
    this.addBubble = function(info) {
        info.Ax = this.Ax;
        info.Ay = this.Ay;
        this.bubbles.push(new Bubble(info));
    };

}
