var player1,player2;
var player1img,player2img;
var sceneimg,scene;

function preload(){

}
function setup(){
    createCanvas(400,400);
    scene = createSprite(20,10,80,90);
    scene.addImage(sceneimg);
    player1 = createSprite(30,20,6,80);
    player1.addImage(player1img);
    player2 = createSprite(30,20,6,80);
    player2.addImage(player2img);
    
}
function draw(){
    background("red");

    drawSprites();
}