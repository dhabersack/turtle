var levelTwo = {
  'name': 'Level 2: Under the sea',
  'backgroundMusic': 'sea',
  'tilemap': 'sea-tilemap',
  'tilemapImage': 'sea-tiles',
  'goal': {
    'position': {
      'x': 64,
      'y': 8,
    },
    'height': 8
  },
  'goodies': [
    {
      'goody': 'bubble',
      'positions': [
        {
          'x': 41,
          'y': 5
        }
      ]
    },
    {
      'goody': 'candy',
      'positions': [
        {
          'x': 10,
          'y': 4
        }
      ]
    },
    {
      'goody': 'chili',
      'positions': [
        {
          'x': 12,
          'y': 5
        },
        {
          'x': 14,
          'y': 8
        }
      ]
    },
    {
      'goody': 'ice',
      'positions': [
        {
          'x': 16,
          'y': 5
        }
      ]
    },
    {
      'goody': 'strawberry',
      'positions': [
        {
          'x': 16,
          'y': 8
        }
      ]
    }
  ],
  'platforms': [],
  'player': {
    'hasShell': true,
    'isUnderWater': true,
    'jumpVelocity' : -200,
    'walkDrag' : 800
  },
  'physics': {
    'gravity' : 400
  }
};
