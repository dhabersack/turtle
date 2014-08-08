var levelFourTwo = {
  'id': '4-2',
  'name': 'This was never a good idea',
  'backgroundMusic': 'desert',
  'type': 'desert',
  'goal': {
    'position': {
      'x': 144,
      'y': 8,
    },
    'height': 8
  },
  'goodies': [
    {
      'type': 'bubble',
      'positions': [
        {
          'x': 49,
          'y': 0
        },
        {
          'x': 125,
          'y': 5
        }
      ]
    },
    {
      'type': 'chili',
      'positions': [
        {
          'x': 15,
          'y': 3
        },
        {
          'x': 120,
          'y': 2
        }
      ]
    },
    {
      'type': 'strawberry',
      'positions': [
        {
          'x': 108,
          'y': 1
        }
      ]
    }
  ],
  'hazardousWater': [
    {
      'start': {
        'x': 28,
        'y': 9
      },
      'length': 9
    },
    {
      'start': {
        'x': 63,
        'y': 9
      },
      'length': 9
    },
    {
      'start': {
        'x': 75,
        'y': 9
      },
      'length': 3
    },
    {
      'start': {
        'x': 80,
        'y': 9
      },
      'length': 6
    },
    {
      'start': {
        'x': 122,
        'y': 9
      },
      'length': 13
    }
  ],
  'hazardousTerrain': [
    {
      'start': {
        'x': 48,
        'y': 7
      },
      'length': 1
    },
    {
      'start': {
        'x': 49,
        'y': 8
      },
      'length': 3
    },
    {
      'start': {
        'x': 55,
        'y': 8
      },
      'length': 5
    },
    {
      'start': {
        'x': 88,
        'y': 8
      },
      'length': 4
    },
    {
      'start': {
        'x': 94,
        'y': 8
      },
      'length': 3
    },
    {
      'start': {
        'x': 97,
        'y': 6
      },
      'length': 1
    },
    {
      'start': {
        'x': 100,
        'y': 7
      },
      'length': 1
    },
    {
      'start': {
        'x': 101,
        'y': 8
      },
      'length': 3
    }
  ],
  'minions': [
    {
      'type': 'scorpion',
      'positions': [
        {
          'x': 40,
          'y': 8
        },
        {
          'x': 106,
          'y': 5
        }
      ]
    }
  ],
  'platforms': [
    {
      'start': {
        'x': 11,
        'y': 5
      },
      'length': 3
    },
    {
      'start': {
        'x': 14,
        'y': 4
      },
      'length': 2
    },
    {
      'start': {
        'x': 119,
        'y': 3
      },
      'length': 2
    }
  ],
  'slidingTerrain': [
    {
      'start': {
        'x': 10,
        'y': 9
      },
      'length': 18
    },
    {
      'start': {
        'x': 70,
        'y': 6
      },
      'length': 5
    }
  ],
  'player': {
    'hasShell': true,
    'jumpVelocity' : -400,
    'walkDrag' : 800,
    'position': {
      'x': 1,
      'y': 7
    }
  },
  'physics': {
    'gravity' : 1200
  }
};
