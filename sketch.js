var ball;
var database;
var position;
var form;
var player;
var game;
var gameState=0;
var playerCount;
var allPlayers;
var distance=0;
function setup(){
    database=firebase.database()
    createCanvas(500,500);
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
   if(playerCount==4){
   console.log(playerCount);
   game.update(1)}
   if(gameState==1){
   clear()game.play();
   }
   }

