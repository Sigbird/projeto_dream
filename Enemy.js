function Enemy(speed) {
    
    this.enemy = new lib.Enemy();
    this.addChild(this.enemy);
    
    this.speed = speed;
    
    this.x = canvas.width;
    this.y = Math.random() * (canvas.height -100 - 50) + 50;

}

Enemy.prototype = p = new createjs.Container();

Enemy.prototype.update = function() {
    this.x -= this.speed;
    
    if(this.x <= -100)
    {
        this.x = canvas.width;
        this.y = Math.random() * (canvas.height -100 - 50) + 50;
    }
};