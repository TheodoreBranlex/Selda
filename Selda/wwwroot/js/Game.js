// Page entièrement chargé, on lance le jeu
document.addEventListener("DOMContentLoaded", function () { new Game('Canvas'); }, false);

Game = function (canvasId) {
    var canvas = document.getElementById(canvasId);
    var engine = new BABYLON.Engine(canvas, true);

    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(0, 0, 0);

    var camera = new Camera(scene, canvas);
    var stage = new Stage(scene);

    engine.runRenderLoop(function () {
        scene.render();
        stage.player.Move(engine.getDeltaTime() / 1000);
    });

    window.addEventListener("resize", function () {
        if (engine)
            engine.resize();
    }, false);

};
