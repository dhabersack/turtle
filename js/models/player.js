var Player = (function() {
  function Player(game, x, y) {
    var animations,
        firstFrame,
        framesPerAnimation,
        framesRange,
        lastFrame;

    Phaser.Sprite.call(this, game, x * 32, y * 32, 'player');

    this.walkVelocity = 200;
    this.walkDrag = 800;
    this.jumpVelocity = -400;
    this.currentJumpCount = 0;
    this.maximumJumpCount = 2;
    this.health = 3;
    this.hasShell = false;
    this.isInHazardousTerrain = false;
    this.auInterval = null;

    animations = [
      'walk-right',
      'walk-left',
      'walk-right-naked',
      'walk-left-naked',
      'eat',
      'eat-naked',
      'jump',
      'jump-naked'
    ];
    framesPerAnimation = 10;

    for (var i = 0, l = animations.length; i < l; i += 1) {
      firstFrame = framesPerAnimation * i;
      lastFrame = firstFrame + framesPerAnimation;
      framesRange = _.range(firstFrame, lastFrame);

      this.animations.add(animations[i], framesRange, 12.5, true);
    }

    this.animations.play('walk-right-naked');

    game.physics.enable(this, Phaser.Physics.ARCADE);
    game.add.existing(this);

    this.body.collideWorldBounds = true;
    this.body.checkCollision.up = false;
    this.body.drag.x = this.walkDrag;
  }

  Player.prototype = Object.create(Phaser.Sprite.prototype);
  Player.prototype.constructor = Player;

  Player.prototype.update = function() {
    if (this.body.velocity.y === 0) {
      this.currentJumpCount = 0;
    }
  };

  /* Custom methods */
  Player.prototype.addEffect = function(property, valueChange, duration) {
    var that;

    that = this;

    that[property] += valueChange;

    if (duration) {
      setTimeout(function() {
        that[property] -= valueChange;
      }, duration);
    }
  };

  Player.prototype.addBooleanEffect = function(property, value, duration) {
    var that;

    that = this;

    that[property] = value;

    if (duration) {
      setTimeout(function() {
        that[property] = !value;
      }, duration);
    }
  };


  Player.prototype.cheer = function() {
    this.animations.play('cheer');

  };

  Player.prototype.die = function() {
    this.animations.play('die');
  };

  Player.prototype.eatGoody = function(goody) {
    var effect,
        effects;

    if (this.hasShell) {
      this.animations.play('eat', null, false); 
    } else {
      this.animations.play('eat-naked', null, false);
    }

    effects = config.goodies[goody.name].effects;

    for (var i = 0, l = effects.length; i < l; i += 1) {
      effect = effects[i];

      if (effect.addShell) {
        this.addBooleanEffect('hasShell', effect.addShell, effect.duration);
      }

      if (effect.healthIncrease) {
        this.addEffect('health', effect.healthIncrease, effect.duration);
      }

      if (effect.speedIncrease) {
        this.addEffect('walkVelocity', effect.speedIncrease, effect.duration);
      }

      if (effect.jumpHeightIncrease) {
        this.addEffect('jumpVelocity', effect.jumpHeightIncrease, effect.duration);
      }
    }
  };

  Player.prototype.hitGround = function() {
    if (this.isInHazardousTerrain) {
      // this.animations.play('walk-right');

      if (!this.body.blocked.left && !this.body.blocked.right && !this.body.blocked.down){
        this.isInHazardousTerrain = false;
        this.au();
      }
    }
  };

  Player.prototype.fallIntoHazardousTerrain = function() {
    if (this.alive){
      if (!this.isInHazardousTerrain) {
        if (this.body.blocked.down) {
          this.damage(1);
          this.isInHazardousTerrain = true;
          this.au();
        }
      }
    }
  };

  Player.prototype.au = function() {
    var that;

    that = this;

    if (this.isInHazardousTerrain) {
      this.auInterval = setInterval(function() {
        if (that.alive) {
          that.damage(1);
        }
      }, 1000);
    } else {
      clearInterval(this.auInterval);
    }
  };

  Player.prototype.jump = function() {
    var previousAnimation,
        that,
        wasWalking;

    that = this;

    wasWalking = this.animations.currentAnim.name.indexOf('walk') === 0;
    if (wasWalking) {
      previousAnimation = this.animations.currentAnim;
    }

    if (this.currentJumpCount < this.maximumJumpCount) {
      this.animations.stop();

      this.body.velocity.y = this.jumpVelocity;
      this.currentJumpCount += 1;

      if (this.hasShell) {
        this.animations.play('jump', null, false); 
      } else {
        this.animations.play('jump-naked', null, false);
      }

      if (previousAnimation) {
        this.events.onAnimationComplete.add(function() {
          that.animations.play(previousAnimation.name);
        });
      }
    }
  };

  Player.prototype.moveLeft = function() {
    this.body.velocity.x = -1 * this.walkVelocity;
  };

  Player.prototype.moveRight = function() {
    this.body.velocity.x = this.walkVelocity;
  };

  Player.prototype.turnLeft = function() {
    if (this.hasShell) {
      this.animations.play('walk-left'); 
    } else {
      this.animations.play('walk-left-naked');
    }
  };

  Player.prototype.turnRight = function() {
    if (this.hasShell) {
      this.animations.play('walk-right'); 
    } else {
      this.animations.play('walk-right-naked');
    }
  };

  return Player;
})();
