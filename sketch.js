var fondo
var canvas
var player1img
var player1
function preload () {
fondo = loadImage ("./assets/fondo.jpeg");
player1img = loadImage ("./assets/player1.png"); 
}

function setup () {
canvas = createCanvas(480,640);
game =  new Game();
game.start();
game.handlePlayerControls();
}

function draw () {
background (fondo); 
drawSprites();
}