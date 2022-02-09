Player = function (scene) {
    var texture = "../img/Game/Link.png";
    var size = { width: 102.4, height: 111 };

    var manager = new BABYLON.SpriteManager("Player", texture, 1, size, scene);
    Sprite.call(this, "Player", manager);

    this.idle = new Animation([0, 2], [20, 20], [10, 12], [30, 32]);
    this.run = new Animation([40, 49], [60, 69], [50, 59], [70, 79]);

    this.direction = new BABYLON.Vector3(0, -1, 0);
}
Player.prototype = Sprite.prototype;
Player.prototype.constructor = Player;

Player.prototype.Update = function (dt) {
    var move = new BABYLON.Vector3(input.KeyD - input.KeyA, input.KeyW - input.KeyS, 0);

    this.position.addInPlace(move.multiplyByFloats(dt, dt, 0));

    if (!move.equals(this.direction)) {
        if (move.equals(BABYLON.Vector3.Zero()))
            this.idle.Play(this, this.direction, 300);
        else
            this.run.Play(this, move, 100);
    }

    this.direction = move;
}
