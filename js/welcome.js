class Welcome  {
  constructor() {
    this.roseimg=loadImage("Images/PicsArt_05-08-09.11.06.jpg");
   
    
  }

  display(){
      Letsplant = createSprite(880,500);
      Letsplant.addImage("Letsplant",Letsplant_img);
      Letsplant.scale=0.2;
      text("Cut the greed, not the green",100,100,100,100);
   
      if(mousePressedOver(Letsplant)) {
      gameState=1
    }
   

    
    
    image(this.roseimg,0,0,displayWidth/1 , displayHeight/1 );
    
    drawSprites();
    
    {
       
    }

    
     

      
     
  
   
      
    
    
    
  }
}

