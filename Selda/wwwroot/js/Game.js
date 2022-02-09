document.addEventListener("DOMContentLoaded", function () { new Game('Canvas'); }, false);

Game = function (canvasId) {
    var canvas = document.getElementById(canvasId);
    var engine = new BABYLON.Engine(canvas, true);

    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(0, 0, 0);

    var stage = new Stage(scene);

    engine.runRenderLoop(function () {
        var dt = engine.getDeltaTime() / 1000;
        stage.Update(dt);
        scene.render();
    });

    window.addEventListener("resize", function () {
        if (engine)
            engine.resize();
    }, false);

};
