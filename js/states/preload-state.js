var PreloadState = {
  preload: function() {
    var audioFile,
        audioFiles,
        goodies,
        goody,
        level,
        levels,
        loadingLabel;

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.ready = false;
    this.stage.backgroundColor = config.colors.gray;

    loadingLabel = helper.addText(0, 0, 'Loading…');
    loadingLabel.x = (game.width - loadingLabel.width) / 2;
    loadingLabel.y = (game.height - loadingLabel.height) / 2;

    goodies = config.goodies;
    for (goody in goodies) {
      if (goodies.hasOwnProperty(goody)) {
        game.load.image(goody, 'img/goodies/' + goody + '.png');
      }
    }

    game.load.spritesheet('player', 'img/sprites/turtle.png', 32, 64);

    audioFiles = config.audioFiles;
    for (var i = 0, l = audioFiles.length; i < l; i += 1) {
      audioFile = audioFiles[i];
      game.load.audio(audioFile, 'music/' + audioFile + '.mp3');
    }

    game.load.image('desert-tiles', 'img/tiles/desert.png');
    game.load.image('forest-tiles', 'img/tiles/forest.png');
    game.load.image('sea-tiles', 'img/tiles/sea.png');
    game.load.image('winter-tiles', 'img/tiles/winter.png');
    game.load.image('life', 'img/images/life.png');

    game.load.spritesheet('lanternfish', 'img/sprites/lanternfish.png', 80, 80);
    game.load.spritesheet('caterpillar', 'img/sprites/caterpillar.png', 48, 16);
    game.load.spritesheet('jellyfish', 'img/sprites/jellyfish.png', 32, 48);
    game.load.spritesheet('penguin', 'img/sprites/penguin.png', 32, 28);
    game.load.spritesheet('player', 'img/sprites/turtle.png', 32, 64);
    game.load.spritesheet('polarbaer', 'img/sprites/polarbaer.png', 72, 72);
    game.load.spritesheet('pufferfish', 'img/sprites/pufferfish.png', 32, 32);
    game.load.spritesheet('scorpion', 'img/sprites/scorpion.png', 32, 18);
    game.load.spritesheet('snake', 'img/sprites/snake.png', 82, 80);
    game.load.spritesheet('stork', 'img/sprites/stork.png', 144, 132);
    game.load.spritesheet('worm', 'img/sprites/worm.png', 48, 16);

    game.load.spritesheet('desert-spritesheet', 'img/tiles/desert.png', 32, 32);
    game.load.spritesheet('forest-spritesheet', 'img/tiles/forest.png', 32, 32);
    game.load.spritesheet('sea-spritesheet', 'img/tiles/sea.png', 32, 32);
    game.load.spritesheet('winter-spritesheet', 'img/tiles/winter.png', 32, 32);

    levels = ['1-1', '1-2', '1-3', '2-1', '2-2', '2-3', '3-1', '3-2', '3-3', '4-1', '4-2', '4-3'];
    for (var j = 0, k = levels.length; j < k; j += 1) {
      level = levels[j];

      game.load.tilemap(level + '-tilemap', 'img/tiles/' + level + '.json', null, Phaser.Tilemap.TILED_JSON);
    }
  },

  create: function() {
    game.scale.maxWidth = 960;
    game.scale.maxHeight = 640;
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setShowAll();
    game.scale.refresh();
  },

  update: function() {
    if (!!this.ready) {
      this.game.state.start('menu');
    }
  },

  onLoadComplete: function() {
    this.ready = true;
  }
};
