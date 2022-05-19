class Ship {
    constructor() {
        this.x = width / 2;


        show(); {
            fill(255);
            rectMode(CENTER);
            push();
            noStroke();
            translate(this.x, height - 10);
            scale(0.8, 0.8);
            fill('#c32929');
            rect(0, 0, 40, 40);
            fill('#d5d589');
            rect(0, -25, 10, 25);
            pop();
        }
    }
}