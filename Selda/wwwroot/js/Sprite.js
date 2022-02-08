Sprite = function (file) {
    var manager = new BABYLON.SpriteManager("Manager", file, 2000, { width: 512, height: 512 });
    BABYLON.Sprite.call(this, "Sprite", manager);
}

Sprite.prototype = BABYLON.Sprite.prototype;
Sprite.prototype.constructor = Sprite;
