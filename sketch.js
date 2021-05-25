var canvas;
var music;
var red, yellow, blue, green;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    red=createSprite(100,580,190,20);
    red.shapeColor="red";

    yellow=createSprite(300,580,190,20);
    yellow.shapeColor="yellow";

    green=createSprite(500,580,190,20);
    green.shapeColor="green";

    blue=createSprite(700,580,190,20);
    blue.shapeColor="blue";

    box = createSprite(random(20,780),100,50,50);
    box.velocityX=20;
    box.velocityY=10;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();

    box.bounceOff(edges);

    if(red.isTouching(box)&&box.bounceOff(red)){
        box.shapeColor="red";
        music.play();
    }

    if(yellow.isTouching(box)&&box.bounceOff(yellow)){
        box.shapeColor="yellow";
    }

    if(blue.isTouching(box)&&box.bounceOff(blue)){
        box.shapeColor="blue";
    }

    if(green.isTouching(box)&&box.bounceOff(green)){
        box.shapeColor="green";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }

    drawSprites();
}
