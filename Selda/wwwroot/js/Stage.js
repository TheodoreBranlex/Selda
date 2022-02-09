Stage = function (scene) {
    new BABYLON.HemisphericLight("Light", new BABYLON.Vector3(0, 1, 0), scene);
    new Camera(scene);
    this.player = new Player(scene);
};

Stage.prototype.Update = function (dt) {
    this.player.Update(dt);
}
