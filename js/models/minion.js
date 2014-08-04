var Minion = (function() {
  function Minion(game, x, y, sprite) {
    var animations,
        firstFrame,
        framesPerAnimation,
        framesRange,
        lastFrame;

    Phaser.Sprite.call(this, game, x * 32, y * 32, sprite);

    this.hasHitPlayer = false;
    this.walkVelocity = 150;

    animations = [
      'walk'
    ];
    framesPerAnimation = 4;

    for (var i = 0, l = animations.length; i < l; i += 1) {
      firstFrame = framesPerAnimation * i;
      lastFrame = firstFrame + framesPerAnimation;
      framesRange = _.range(firstFrame, lastFrame);

      this.animations.add(animations[i], framesRange, 12.5, true);
    }

    this.animations.play('walk');

    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.collideWorldBounds = true;
    this.body.bounce.x = 1;

    this.move();

    game.add.existing(this);
  }

  Minion.prototype = Object.create(Phaser.Sprite.prototype);
  Minion.prototype.constructor = Minion;

  Minion.prototype.move = function() {
    if (game.rnd.integerInRange(0, 1) === 1) {
      this.body.velocity.x = this.walkVelocity;
    } else {
      this.body.velocity.x = -this.walkVelocity;
    }
  };

  Minion.prototype.hit = function(sprite) {
    var that;

    if (!this.hasHitPlayer) {
      that = this;

      sprite.damage(1);
      that.hasHitPlayer = true;

       setTimeout(function() {
         that.hasHitPlayer = false;
       }, 500);
    }

    if (this.body.touching.up) {
      this.kill();
    }
  };

  return Minion;
})();
