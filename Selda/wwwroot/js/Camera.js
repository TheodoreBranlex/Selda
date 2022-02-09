Camera = function (scene) {
    BABYLON.FreeCamera.call(this, "Camera", new BABYLON.Vector3(0, 0, -5), scene);
    this.setTarget(BABYLON.Vector3.Zero());
};
Camera.prototype = BABYLON.FreeCamera.prototype;
