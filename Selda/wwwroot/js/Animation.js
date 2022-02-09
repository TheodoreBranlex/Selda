Animation = function (down, up, left, right) {
    this.down = down;
    this.up = up;
    this.left = left;
    this.right = right;
}

Animation.prototype.Play = function (sprite, direction, delay, loop = true) {
    if (direction.y < 0)
        sprite.playAnimation(this.down[0], this.down[1], loop, delay);
    if (direction.y > 0)
        sprite.playAnimation(this.up[0], this.up[1], loop, delay);
    if (direction.x < 0)
        sprite.playAnimation(this.left[0], this.left[1], loop, delay);
    if (direction.x > 0)
        sprite.playAnimation(this.right[0], this.right[1], loop, delay);
}
