var PreloadState = {

  preload: function() {
    this.ready = false;

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      
    game.load.audio('aua', 'music/aua.mp3');
    game.load.audio('backgroundmusic', 'music/backgroundmusic.mp3');
    game.load.audio('dring', 'music/dring.mp3');
    game.load.audio('gameover', 'music/gameover.mp3');
    game.load.audio('gulp', 'music/gulp.mp3');
    game.load.audio('menu', 'music/menu.mp3');
    game.load.audio('plop', 'music/plop.mp3');
    game.load.audio('wahoo', 'music/wahoo.mp3');
    game.load.audio('whoop', 'music/whoop.mp3');
    game.load.audio('woo', 'music/woo.mp3');

    this.load.image('forest-tiles', '/img/tiles/forest.png');
    this.load.image('sea-tiles', '/img/tiles/sea.png');
    this.load.image('winter-tiles', '/img/tiles/winter.png');
    this.load.image('life', '/img/images/life.png');

    this.load.spritesheet('lanternfish', '/img/sprites/lanternfish.png', 80, 80);
    this.load.spritesheet('caterpillar', '/img/sprites/caterpillar.png', 48, 16);
    this.load.spritesheet('jellyfish', '/img/sprites/jellyfish.png', 32, 48);
    this.load.spritesheet('penguin', '/img/sprites/penguin.png', 32, 28);
    this.load.spritesheet('player', '/img/sprites/turtle.png', 32, 64);
    this.load.spritesheet('pufferfish', '/img/sprites/pufferfish.png', 32, 32);
    this.load.spritesheet('stork', '/img/sprites/stork.png', 144, 132);
    this.load.spritesheet('worm', '/img/sprites/worm.png', 48, 16);

    this.load.spritesheet('forest-spritesheet', '/img/tiles/forest.png', 32, 32);
    this.load.spritesheet('sea-spritesheet', '/img/tiles/sea.png', 32, 32);
    this.load.spritesheet('winter-spritesheet', '/img/tiles/winter.png', 32, 32);

    this.load.tilemap('1-1-tilemap', '/img/tiles/1-1.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('1-2-tilemap', '/img/tiles/1-2.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('2-1-tilemap', '/img/tiles/2-1.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('3-1-tilemap', '/img/tiles/3-1.json', null, Phaser.Tilemap.TILED_JSON);

  },
  create: function() {
  },
  update: function() {
    if(!!this.ready) {
      this.game.state.start('menu');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};