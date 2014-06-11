function Heart(speed) {
    
    this.heart = new lib.Heart();
    this.addChild(this.heart);
    
    this.speed = speed;
    
    this.x = canvas.width;
    this.y = Math.random() * (canvas.height -100 - 50) + 50;

}

Heart.prototype = p = new createjs.Container();

Heart.prototype.update = function() {
    //this.visible = true; FUNCIONA
    this.x -= this.speed;
    
    if(this.x <= -100)
    {
        this.x = canvas.width;
        this.y = Math.random() * (canvas.height -100 - 50) + 50;
    }
    
};