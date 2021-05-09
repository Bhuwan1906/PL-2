var gameState = 0;

var rose,welcome,buyinglink,app;
var screen1;

var form, planter, game;
var Letsplant,login,signup;
var Letsplant_img;


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  rose= new Rose();
  app= new App();
  welcome=new Welcome();
  buyinglink= new Buyinglink();
  screen1=new Screen1();
  login=new Login();

}
function preload(){
Letsplant_img= loadImage("Images/Plantit.jpg")

}

function draw(){
  text("Plant",200,200);if(gameState===0){
  welcome.display();
   
   }
   if(gameState===1){
     clear();
     rose.display();
 
   }
   if(gameState===2){
     clear();
    planter.display();
 

   console.log(gameState);

  }
  if(gameState===3){
    clear();
   login.display();

}
}