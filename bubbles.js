function Bubble(x, y, c, Vx, Vy,mass) {
    this.x = x;
    this.y = y;
    this.c = c;
    this.Vx = Vx;
    this.Vy = Vy;
    this.Ax = null;
    this.Ay = null;
    this.mass= 0;
    this.move = function() {
        this.x += this.Vx;
        this.y += this.Vy;
        if (this.x > width) {
            this.Vx *= -1;
        }
        if (this.y > height) {
            this.Vy *= -1;
        }
        if (this.x < 0) {
            this.Vx *= -1;
        }
        if (this.y < 0) {
            this.Vy *= -1;
        }
    };
}

bubbles = new Array();


function setup() {
    createCanvas(1000, 1000);
    background(0);
}

function draw() {
    background(0);
    for (var i = 0; i < bubbles.length; i++) {
        noStroke();
        bubbles[i].move();
        fill(bubbles[i].c);
        ellipse(bubbles[i].x, bubbles[i].y, 20, 20);
    }


}

// function mouseClicked() {
//     bubbles.push(new Bubble(mouseX, mouseY, 'red', 10, 10));
// }

var Px ;
var Py ;


function mousePressed() {
    console.log('hi');
     Px = mouseX;
     Py = mouseY;
}

function random(start,stop){
    return Math.floor(Math.random()*(start-stop)+start);
}

function mouseReleased() {
    console.log('bye');
    var mass= random(100,255)
    bubbles.push(new Bubble(Px, Py, 'red', (mouseX-Px)/5, (mouseY-Py)/5,mass));
}
