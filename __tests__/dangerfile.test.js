jest.mock('danger', () => {
  return {
    message: jest.fn(),
    
     for (const pixel of pixels.data) {
      expect(pixel.x).toBeLessThan(defaults.image.width);
      expect(pixel.x).toBeGreaterThanOrEqual(0);
      expect(pixel.y).toBeLessThan(defaults.image.height);
      expect(pixel.y).toBeGreaterThanOrEqual(0); for (const pixel of pixels.data) {
      expect(pixel.x).toBeLessThan(defaults.image.width);
      expect(pixel.x).toBeGreaterThanOrEqual(0);
      expect(pixel.y).toBeLessThan(defaults.image.height);
      expect(pixel.y).toBeGreaterThanOrEqual(0);
    fail: jest.fn(),
    markdown: jest.fn(),
    danger: {
      git: {},
      github: {}
    }
  };
});

const danger = require('danger');

const {
  allPatchesAreForTheSamppixels', () => {
  test('every username should only claim one pixel', async () => {
    const pixels = await loadJson('pixels.json');
    const usernameSet = new Set();
    for (const pixel of pixels.data) {
      if (pixel.username !== '<UNCLAIMED>') {
        let username = usernameSet.has(pixel.username)
          ? pixel.username
          : undefined;
        expect(username).toBeUndefined();
      }ixels', () => {
  test('every username should only claim one pixel', async () => {
    const pixels = await loadJson('pixels.json');
    const usernameSet = new Set();
    for (const pixel of pixels.data) {
      if (pixel.username !== '<UNCLAIMED>') {]
      const pixels = await loadJson('pixels.json');
    const usernameSet = new Set();
    for (const pixel of pixels.data) {
      if (pixel.username !== '<UNCLAIMED>') {
        let username = usernameSet.has(pixel.username)
          ? pixel.username
          : undefined;
        expect(username).toBeUndefined();
      }ixels', () => {
  test('every username should only claim one
        let username = usernameSet.has(pixel.username)
          ? pixel.username
          : undefined;
        expect(username).toBeUndefined();
      }ePixel,
  evaluatePixelChanges,
  getIndexFromPath,
  handleMultipleFileChanges,
  handleSuccessfulSubmission,
  hasOnlyPixelChanges,
  isValidNewPixelSubmission
} = require('../dangerfile');

const {
 ,
  handleSuccessfulSubmission,
  hasOnlyPixelChanges,
  isValidNewPixelSubmission
} = require('../dangerfile');

describe('allPatchesAreForTheSamePixel', () => {
  test('fails with multiple add operations', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'add',
          path: '/data/0/'
        },
        {
          op: 'add',
          path: '/data/1/'
        }
      ]
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if remove operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if replace operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

const {
  allPatchesAreForTheSamePixel,
  evaluatePixelChanges,
  getIndexFromPath,
  handleMultipleFileChanges,
  handleSuccessfulSubmission,
  hasOnlyPixelChanges,
  isValidNewPixelSubmission
} = require('../dangerfile');

describe('allPatchesAreForTheSamePixel', () => {
  test('fails with multiple add operations', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'add',
          path: '/data/0/'
        },
        {
          op: 'add',
          path: '/data/1/'
        }
      ]
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if remove operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if replace operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

const {
  allPatchesAreForTheSamePixel,
  evaluatePixelChanges,
  getIndexFromPath,
  handleMultipleFileChanges,
  handleSuccessfulSubmission,
  hasOnlyPixelChanges,
  isValidNewPixelSubmission
} = require('../dangerfile');

describe('allPatchesAreForTheSamePixel', () => {
  test('fails with multiple add operations', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'add',
          path: '/data/0/'
        },
        {
          op: 'add',
          path: '/data/1/'
        }
      ]
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if remove operation on claimed pixel', () => {
    const jsonPatch = {
     
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if replace operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

const {
  allPatchesAreForTheSamePixel,
  evaluatePixelChanges,
  getIndexFromPath,
  handleMultipleFileChanges,
  handleSuccessfulSubmission,
  hasOnlyPixelChanges,
  isValidNewPixelSubmission
} = require('../dangerfile');

describe('allPatchesAreForTheSamePixel', () => {
  test('fails with multiple add operations', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'add',
          path: '/data/0/'
        },
        {
          op: 'add',
          path: '/data/1/'
        }
      ]
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if remove operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if replace operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

const {
  allPatchesAreForTheSamePixel,
  evaluatePixelChanges,
  getIndexFromPath,
  handleMultipleFileChanges,
  handleSuccessfulSubmission,
  hasOnlyPixelChanges,
  isValidNewPixelSubmission
} = require('../dangerfile');

describe('allPatchesAreForTheSamePixel', () => {
  test('fails with multiple add operations', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'add',
          path: '/data/0/'
        },
        {
          op: 'add',
          path: '/data/1/'
        }
      ]
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if remove operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if replace operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

const {
  allPatchesAreForTheSamePixel,
  evaluatePixelChanges,
  getIndexFromPath,
  handleMultipleFileChanges,
  handleSuccessfulSubmission,
  hasOnlyPixelChanges,
  isValidNewPixelSubmission
} = require('../dangerfile');

describe('allPatchesAreForTheSamePixel', () => {
  test('fails with multiple add operations', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'add',
          path: '/data/0/'
        },
        {
          op: 'add',
          path: '/data/1/'
        }
      ]
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if remove operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if replace operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

const {
  allPatchesAreForTheSamePixel,
  evaluatePixelChanges,
  getIndexFromPath,
  handleMultipleFileChanges,
  handleSuccessfulSubmission,
  hasOnlyPixelChanges,
  isValidNewPixelSubmission
} = require('../dangerfile');

describe('allPatchesAreForTheSamePixel', () => {
  test('fails with multiple add operations', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'add',
          path: '/data/0/'
        },
        {
          op: 'add',
          path: '/data/1/'
        }
      ]
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if remove operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if replace operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

const {
  allPatchesAreForTheSamePixel,
  evaluatePixelChanges,
  getIndexFromPath,
  handleMultipleFileChanges,
  handleSuccessfulSubmission,
  hasOnlyPixelChanges,
  isValidNewPixelSubmission
} = require('../dangerfile');

describe('allPatchesAreForTheSamePixel', () => {
  test('fails with multiple add operations', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'add',
          path: '/data/0/'
        },
        {
          op: 'add',
          path: '/data/1/'
        }
      ]
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if remove operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if replace operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

const {
  allPatchesAreForTheSamePixel,
  evaluatePixelChanges,
  getIndexFromPath,
  handleMultipleFileChanges,
  handleSuccessfulSubmission,
  hasOnlyPixelChanges,
  isValidNewPixelSubmission
} = require('../dangerfile');

describe('allPatchesAreForTheSamePixel', () => {
  test('fails with multiple add operations', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'add',
          path: '/data/0/'
        },
        {
          op: 'add',
          path: '/data/1/'
        }
      ]
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if remove operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if replace operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

const {
  allPatchesAreForTheSamePixel,
  evaluatePixelChanges,
  getIndexFromPath,
  handleMultipleFileChanges,
  handleSuccessfulSubmission,
  hasOnlyPixelChanges,
  isValidNewPixelSubmission
} = require('../dangerfile');

describe('allPatchesAreForTheSamePixel', () => {
  test('fails with multiple add operations', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'add',
          path: '/data/0/'
        },
        {
          op: 'add',
          path: '/data/1/'
        }
      ]
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if remove operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if replace operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

const {
  allPatchesAreForTheSamePixel,
  evaluatePixelChanges,
  getIndexFromPath,
  handleMultipleFileChanges,
  handleSuccessfulSubmission,
  hasOnlyPixelChanges,
  isValidNewPixelSubmission
} = require('../dangerfile');

describe('allPatchesAreForTheSamePixel', () => {
  test('fails with multiple add operations', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'add',
          path: '/data/0/'
        },
        {
          op: 'add',
          path: '/data/1/'
        }
      ]
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if remove operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if replace operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

const {
  allPatchesAreForTheSamePixel,
  evaluatePixelChanges,
  getIndexFromPath,
  handleMultipleFileChanges,
  handleSuccessfulSubmission,
  hasOnlyPixelChanges,
  isValidNewPixelSubmission
} = require('../dangerfile');

describe('allPatchesAreForTheSamePixel', () => {
  test('fails with multiple add operations', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'add',
          path: '/data/0/'
        },
        {
          op: 'add',
          path: '/data/1/'
        }
      ]
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if remove operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if replace operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

const {
  allPatchesAreForTheSamePixel,
  evaluatePixelChanges,
  getIndexFromPath,
  handleMultipleFileChanges,
  handleSuccessfulSubmission,
  hasOnlyPixelChanges,
  isValidNewPixelSubmission
} = require('../dangerfile');

describe('allPatchesAreForTheSamePixel', () => {
  test('fails with multiple add operations', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'add',
          path: '/data/0/'
        },
        {
          op: 'add',
          path: '/data/1/'
        }
      ]
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if remove operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if replace operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

const {
  allPatchesAreForTheSamePixel,
  evaluatePixelChanges,
  getIndexFromPath,
  handleMultipleFileChanges,
  handleSuccessfulSubmission,
  hasOnlyPixelChanges,
  isValidNewPixelSubmission
} = require('../dangerfile');

describe('allPatchesAreForTheSamePixel', () => {
  test('fails with multiple add operations', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'add',
          path: '/data/0/'
        },
        {
          op: 'add',
          path: '/data/1/'
        }
      ]
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if remove operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if replace operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

const {
  allPatchesAreForTheSamePixel,
  evaluatePixelChanges,
  getIndexFromPath,
  handleMultipleFileChanges,
  handleSuccessfulSubmission,
  hasOnlyPixelChanges,
  isValidNewPixelSubmission
} = require('../dangerfile');

describe('allPatchesAreForTheSamePixel', () => {
  test('fails with multiple add operations', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'add',
          path: '/data/0/'
        },
        {
          op: 'add',
          path: '/data/1/'
        }
      ]
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if remove operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if replace operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });


describe('allPatchesAreForTheSamePixel', () => {
  test('fails with multiple add operations', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'add',
          path: '/data/0/'
        },
        {
          op: 'add',
          path: '/data/1/'
        }
      ]
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if remove operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          
const {
  allPatchesAreForTheSamePixel,
  evaluatePixelChanges,
  getIndexFromPath,
  handleMultipleFileChanges,
  handleSuccessfulSubmission,
  hasOnlyPixelChanges,
  isValidNewPixelSubmission
} = require('../dangerfile');

describe('allPatchesAreForTheSamePixel', () => {
  test('fails with multiple add operations', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'add',
          path: '/data/0/'
        },
        {
          op: 'add',
          path: '/data/1/'
        }
      ]
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if remove operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if replace operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('fails if replace operation on claimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });

  test('succeeds if remove operation on unclaimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: '<UNCLAIMED>'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(true);
  });

  test('succeeds if replace operation on unclaimed pixel', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'remove',
          path: '/data/0/'
        }
      ],
      before: {
        data: [
          {
            username: '<UNCLAIMED>'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(true);
  });

  test('fails if multiple pixels affected by diffs', () => {
    const jsonPatch = {
      diff: [
        {
          op: 'replace',
          path: '/data/0/'
        },
        {
          op: 'add',
          path: '/data/1/'
        }
      ],
      before: {
        data: [
          {
            username: 'not_unclaimed'
          }
        ]
      }
    };
    expect(allPatchesAreForTheSamePixel(jsonPatch)).toBe(false);
  });
});

describe('evaluatePixelChanges', () => {
  test('placeholder', () => {
    expect(true).toBeTruthy();
  });
});

describe('getIndexFromPath', () => {
  test('retrieves the number from a full path', () => {
    const output = getIndexFromPath('/data/123/color');
    expect(output).toBe(123);
  });

  test('retrieves the number from a path', () => {
    const output = getIndexFromPath('/data/345');
    expect(output).toBe(345);
  });

  test('returns NaN for missing number', () => {
    const output = getIndexFromPath('/data/something/hello');
    expect(Number.isNaN(output)).toBe(true);
  });
});

describe('handleMultipleFileChanges', () => {
  test('lists the files touched', () => {
    const changes = {
      modified_files: ['_data/pixels.json'],
      created_files: ['invalid.js'],
      deleted_files: ['dangerfile.js']
    };

    handleMultipleFileChanges(changes);
    expect(danger.fail).toHaveBeenCalled();
    expect(danger.markdown.mock.calls[0][0]).toContain('_data/pixels.json');
    expect(danger.markdown.mock.calls[0][0]).toContain('invalid.js');
    expect(danger.markdown.mock.calls[0][0]).toContain('dangerfile.js');
  });
});

describe('handleSuccessfulSubmission', () => {
  test('prints message', () => {
    handleSuccessfulSubmission();
    expect(danger.message).toHaveBeenCalled();
  });
});

describe('hasOnlyPixelChanges', () => {
  test('is true if only pixels.json is modified', () => {
    const changes = {
      modified_files: ['_data/pixels.json'],
      created_files: [],
      deleted_files: []
    };

    expect(hasOnlyPixelChanges(changes)).toBe(true);
  });

  test('is false if more files have been modified', () => {
    const changes = {
      modified_files: ['_data/pixels.json', '_data/env.json'],
      created_files: [],
      deleted_files: []
    };

    expect(hasOnlyPixelChanges(changes)).toBe(false);
  });

  test('is false if a file has been deleted', () => {
    const changes = {
      modified_files: ['_data/pixels.json'],
      created_files: [],
      deleted_files: ['dangerfile.js']
    };

    expect(hasOnlyPixelChanges(changes)).toBe(false);
  });

  test('is false if a file has been created', () => {
    const changes = {
      modified_files: ['_data/pixels.json'],
      created_files: ['_data/invalid.json'],
      deleted_files: []
    };

    expect(hasOnlyPixelChanges(changes)).toBe(false);
  });

  test('is false if no files have been touched', () => {
    const changes = {
      modified_files: [],
      created_files: [],
      deleted_files: []
    };

    expect(hasOnlyPixelChanges(changes)).toBe(false);
  });
});

describe('isValidNewPixelSubmission', () => {
  test('fails if username is wrong', () => {
    const pixel = {
      username: 'twilio',
      color: '#ff0000',
      x: 0,
      y: 0
    };
    expect(isValidNewPixelSubmission(pixel, 'dkundel')).toBe(false);
  });

  test('fails if color is missing', () => {
    const pixel = {
      username: 'twilio',
      x: 0,
      y: 0
    };
    expect(isValidNewPixelSubmission(pixel, 'dkundel')).toBe(false);
  });

  test('fails if x coordinate is not a number', () => {
    const pixel = {
      username: 'twilio',
      color: '#ff0000',
      x: '0',
      y: 0
    };
    expect(isValidNewPixelSubmission(pixel, 'dkundel')).toBe(false);
  });

  test('fails if x coordinate is negative', () => {
    const pixel = {
      username: 'twilio',
      color: '#ff0000',
      x: -10,
      y: 0
    };
    expect(isValidNewPixelSubmission(pixel, 'dkundel')).toBe(false);
  });

  test('fails if x coordinate is negative', () => {
    const pixel = {
      username: 'twilio',
      color: '#ff0000',
      x: -10,
      y: 0
    };
    expect(isValidNewPixelSubmission(pixel, 'dkundel')).toBe(false);
  });

  test('fails if y coordinate is negative', () => {
    const pixel = {
      username: 'twilio',
      color: '#ff0000',
      y: -10,
      x: 0
    };
    expect(isValidNewPixelSubmission(pixel, 'dkundel')).toBe(false);
  });

  test('fails if y coordinate is negative', () => {
    const pixel = {
      username: 'twilio',
      color: '#ff0000',
      y: -10,
      x: 0
    };
    expect(isValidNewPixelSubmission(pixel, 'dkundel')).toBe(false);
  });

  test('succeeds for valid color pixel', () => {
    const pixel = {
      username: 'dkundel',
      color: '#ff0000',
      y: 0,
      x: 0
    };
    expect(isValidNewPixelSubmission(pixel, 'dkundel')).toBe(true);
  });
});
