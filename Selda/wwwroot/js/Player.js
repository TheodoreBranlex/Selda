Player = function (file) {
    Sprite.call(this, file);
}

Player.prototype = Sprite.prototype;
Player.prototype.constructor = Player;

Player.prototype.Move = function (dt) {
    this.position.y -= 1 * dt;
}
