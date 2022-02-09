var input = {
    KeyW: false,
    KeyS: false,
    KeyA: false,
    KeyD: false
}

window.addEventListener("keydown", function (evt) {
    for (key in input)
        if (evt.code == key)
            input[key] = true;
}, false);

window.addEventListener("keyup", function (evt) {
    for (key in input)
        if (evt.code == key)
            input[key] = false;
}, false);