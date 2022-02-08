Stage = function (scene) {
    var light = new BABYLON.HemisphericLight("Light", new BABYLON.Vector3(0, 1, 0), scene);
    this.player = new Player("../img/Game/Testure.jpg");
};
