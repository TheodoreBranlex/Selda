Sprite = function (name, manager) {
    BABYLON.Sprite.call(this, name, manager);

    if (manager.cellWidth > manager.cellHeight)
        this.width = manager.cellWidth / manager.cellHeight;
    else
        this.height = manager.cellHeight / manager.cellWidth;
}
Sprite.prototype = BABYLON.Sprite.prototype;
Sprite.prototype.constructor = Sprite;

Sprite.prototype.Collide = function (sprite) {
    return false;
}
