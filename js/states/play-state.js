var PlayState = {
  clouds: null,
  layer: null,
  player: null,

  preload: function() {
    this.load.image('forest-tiles', '/img/tiles/forest.png');
    this.load.image('cloud', '/img/images/cloud.png');

    this.load.spritesheet('player', '/img/sprites/gehen-groesser.png', 32, 48);

    this.load.tilemap('forest-tilemap', '/img/tiles/forest.json', null, Phaser.Tilemap.TILED_JSON);
  },

  create: function() {
    var tilemap;

    tilemap = this.game.add.tilemap('forest-tilemap');
    tilemap.addTilesetImage('forest-tiles');

    this.layer = tilemap.createLayer('layer-1');
    this.layer.resizeWorld();

    this.player = new Player(this.game, 1, 6, 0);

    tilemap.setCollision(2);
    // tilemap.setTileIndexCallback(2, function() {
    //   console.log('hit');
    //   return true;
    // });

    this.initialize();
  },

  update: function() {
    this.game.physics.arcade.collide(this.player, this.layer);
    this.game.physics.arcade.collide(this.player, this.walls);

    this.checkKeys();
  },

  checkKeys: function() {
    var cursorKeys;

    cursorKeys = this.input.keyboard.createCursorKeys();

    if (cursorKeys.left.isDown) {
      this.player.moveLeft();
    }

    if (cursorKeys.right.isDown) {
      this.player.moveRight();
    }
  },

  initialize: function() {
    this.initializeCamera();
    this.initializeClouds();
    this.initializeKeyboard();
    this.initializeLabels();
    this.initializePhysics();
  },

  initializeCamera: function() {
    this.game.camera.follow(this.player);
  },

  initializeClouds: function() {
    this.clouds = this.game.add.group();
    this.clouds.enableBody = true;
    this.clouds.physicsBodyType = Phaser.Physics.ARCADE;

    for (var i = 0, l = 8; i < l; i += 1) {
      this.addCloud(_.random(0, this.world.bounds.width / 32) * 32);
    }
  },

  initializeKeyboard: function() {
    var cursorKeys;

    cursorKeys = this.input.keyboard.createCursorKeys();

    this.input.keyboard.addKeyCapture([
        cursorKeys.up,
        cursorKeys.down,
        cursorKeys.Left,
        cursorKeys.right,

        Phaser.Keyboard.SPACEBAR
    ]);

    var jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    jumpButton.onDown.add(this.player.jump, this.player);

    cursorKeys.right.onDown.add(this.player.turnRight, this.player);
    cursorKeys.left.onDown.add(this.player.turnLeft, this.player);
  },

  initializeLabels: function() {
    var menuLabel;

    menuLabel = this.add.text(10, 10, 'Menu');
    menuLabel.fixedToCamera = true;
    menuLabel.inputEnabled = true;

    menuLabel.events.onInputUp.add(function() {
      game.state.start('menu');
    });
  },

  initializePhysics: function() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 1200;
    this.game.physics.enable(this.player);
  },

  addCloud: function(x) {
    var cloud,
        that = this;

    if (typeof x === 'undefined') {
      x = this.world.bounds.width;
    }

    cloud = this.clouds.create(x, _.random(1, 3) * 32, 'cloud');
    cloud.body.velocity.x = -1 * _.random(1, 2) * 32;
    cloud.body.allowGravity = false;
    cloud.checkWorldBounds = true;
    cloud.events.onKilled.add(function() {
      that.addCloud();
    });
    cloud.outOfBoundsKill = true;
  }
};
