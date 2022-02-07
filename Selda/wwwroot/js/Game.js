// Page entièrement chargé, on lance le jeu
document.addEventListener("DOMContentLoaded", function () { new Game('renderCanvas'); }, false);

Game = function (canvasId) {
    // Canvas et engine défini ici
    var canvas = document.getElementById(canvasId);
    var engine = new BABYLON.Engine(canvas, true);
    var game = this;

    // On initie la scène avec une fonction associé à l'objet Game
    this.scene = this.initScene(engine);

    // Crée un joueur et une arène
    var camera = new Camera(game.scene, canvas);
    var stage = new Stage(game.scene);

    // Permet au jeu de tourner
    engine.runRenderLoop(function () {
        game.scene.render();
    });

    // Ajuste la vue 3D si la fenetre est agrandi ou diminué
    window.addEventListener("resize", function () {
        if (engine) {
            engine.resize();
        }
    }, false);

};


Game.prototype = {
    // Prototype d'initialisation de la scène
    initScene: function (engine) {
        var scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color3(0, 0, 0);
        return scene;
    }
};