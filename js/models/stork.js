var Stork = (function() {
  function Stork(game, x, y, sprite) {
    var animations,
        firstFrame,
        framesPerAnimation,
        framesRange,
        lastFrame;

    Phaser.Sprite.call(this, game, x * 32, y * 32, sprite);

    this.hasHitPlayer = false;

    animations = [
      'peck'
    ];
    framesPerAnimation = 8;

    for (var i = 0, l = animations.length; i < l; i += 1) {
      firstFrame = framesPerAnimation * i;
      lastFrame = firstFrame + framesPerAnimation;
      framesRange = _.range(firstFrame, lastFrame);

      this.animations.add(animations[i], framesRange, 12.5, true);
    }

    this.animations.play('peck');

    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.allowGravity = false;
    this.body.immovable = true;
    this.body.bounce.setTo(1, 1);

    game.add.existing(this);
  }

  Stork.prototype = Object.create(Phaser.Sprite.prototype);
  Stork.prototype.constructor = Stork;


  Stork.prototype.hit = function(sprite) {
    if (!sprite.hasShell) {
      if (!this.hasHitPlayer) {
        sprite.damage(1);
        this.hasHitPlayer = true;
        var that = this;

        setTimeout( function() {
          that.hasHitPlayer = false;
        }, 500);
      } 
    } else {
      if (this.body.touching.up) {
        this.kill();
      }
    }

  };

  return Stork;
})();
