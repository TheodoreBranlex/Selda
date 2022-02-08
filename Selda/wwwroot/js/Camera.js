Camera = function (scene, canvas) {
    var camera = new BABYLON.FreeCamera("Camera", new BABYLON.Vector3(0, 5, 0), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);
};
