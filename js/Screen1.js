class Screen1  {
    constructor() {
        this.sc1img=loadImage("Images/513KwEcP3rL._AC_.jpg");
        this.letsplantimg = loadImage("images/letsplant.png");
    }
  
    display(){
        
        text("Plantorium",200,350);
        image(this.sc1img,350,200);
        var letsplant =createSprite(200,100,50,100);
        letsplant.addImage("letsplant",letsplantimg);
        text("Grow Plant",200,350);
        text("Grow India",207,357);
    }
}