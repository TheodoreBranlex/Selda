Player = function (scene) {
    var texture = "../img/Game/Link.png";
    var size = { width: 102.4, height: 111 };

    var manager = new BABYLON.SpriteManager("Player", texture, 1, size, scene);
    Sprite.call(this, "Player", manager);

    this.move = new BABYLON.Vector3(0, 0, 0);
}
Player.prototype = Sprite.prototype;

Player.prototype.Update = function (dt) {
    var move = new BABYLON.Vector3(input.KeyD - input.KeyA, input.KeyW - input.KeyS, 0);

    this.position.addInPlace(move.multiplyByFloats(dt, dt, 0));

    if (!move.equals(this.move)) {
        if (move.y < 0)
            this.playAnimation(40, 49, true, 100);
        else if (move.x < 0)
            this.playAnimation(50, 59, true, 100);
        else if (move.y > 0)
            this.playAnimation(60, 69, true, 100);
        else if (move.x > 0)
            this.playAnimation(70, 79, true, 100);
        else {
            if (this.move.y < 0)
                this.playAnimation(0, 2, true, 100);
            if (this.move.x < 0)
                this.playAnimation(10, 12, true, 100);
            if (this.move.y > 0)
                this.playAnimation(20, 20, true, 100);
            if (this.move.x > 0)
                this.playAnimation(30, 32, true, 100);
        }
    }

    this.move = move;
}
