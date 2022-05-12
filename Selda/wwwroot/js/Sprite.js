Sprite = function (name, manager) {
    BABYLON.Sprite.call(this, name, manager);

    if (manager.cellWidth > manager.cellHeight)
        this.width = manager.cellWidth / manager.cellHeight;
    else
        this.height = manager.cellHeight / manager.cellWidth;
}
Sprite.prototype = new BABYLON.Sprite();
Sprite.prototype.constructor = Sprite;

Sprite.prototype.Collide = function (sprite) {
    return this.position.x < sprite.position.x + sprite.width
    && sprite.position.x < this.position.x + this.width
    && this.position.y < sprite.position.y + sprite.height
    && sprite.position.y < this.position.y + this.height;
}
