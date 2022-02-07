Camera = function (scene, canvas) {
    // Creating babylon camera
    var camera = new BABYLON.FreeCamera("Camera", new BABYLON.Vector3(0, 5, 0), scene);

    // Look at origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // Set as main camera
    camera.attachControl(canvas, true);
};