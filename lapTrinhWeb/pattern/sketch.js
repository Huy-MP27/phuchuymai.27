function setup() {
    createCanvas(600, 400); // kích thước khung hình trò chơi
    ship = new Ship();
}

function draw() {
    background(51); // mày nền
    ship.show()
}

var ship;


