let imgs = ();
let orange, banana, pear;

function preload(){
  orange = loadImage('images/orange.jpg');
  banana = loadImage('images/banana.jpg');
  pear = loadImage('images/pear.jpg')
}

function setup(){
  createCanvas(400, 400);
  frameRate(1);
  imgs.push(orange);
  imgs.push(banana);
  imgs.push(pear);
}

function draw(){
  background(220);
  let r = random(imgs);
  image(r, 0, 0);
}
