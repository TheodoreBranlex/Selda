Sprite = function (file, scene) {
    var mesh = BABYLON.Mesh.CreateGround("Sprite", 1, 1, 2, scene);
    mesh.material = new BABYLON.StandardMaterial("Sprite", scene);
    mesh.material.diffuseTexture = new BABYLON.Texture(file, scene);
}
