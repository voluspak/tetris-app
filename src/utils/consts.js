export const TETROMINOS = {
  0: {
    shape: [[0]],
    color: '0, 0, 0'
  },
  I: {
    shape: [
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0]
    ],
    color: '80, 227, 230'
  },
  J: {
    shape: [
      [0, 'J', 0],
      [0, 'J', 0],
      ['J', 'J', 0]
    ],
    color: '36, 95, 223'
  },
  L: {
    shape: [
      [0, 'L', 0],
      [0, 'L', 0],
      [0, 'L', 'L']
    ],
    color: '223, 173, 36'
  },
  O: {
    shape: [
      ['O', 'O'],
      ['O', 'O']
    ],
    color: '223, 217, 36'
  },
  S: {
    shape: [
      [0, 'S', 'S'],
      ['S', 'S', 0],
      [0, 0, 0]
    ],
    color: '48, 211, 56'
  },
  T: {
    shape: [
      [0, 0, 0],
      ['T', 'T', 'T'],
      [0, 'T', 0]
    ],
    color: '132, 61, 198'
  },
  Z: {
    shape: [
      ['Z', 'Z', 0],
      [0, 'Z', 'Z'],
      [0, 0, 0]
    ],
    color: '227, 78, 78'
  }
}

export const randomTetrominos = () => {
  const tetrominos = 'IJLOSTZ'
  const randomTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)]
  return randomTetromino
}

export const darkTheme = {
  body: '#1E1E1E',

  buttonTextColor: '#fff',
  buttonBackgroundColor: '#333',

  stageBackgroundColor: '#111',
  stageBorder: '2px solid #333',

  displayTextColor: '#999',
  displayBackgroundColor: '#000',
  displayBorder: '4px solid #333',

  icons: '#F7F7F7'
}

export const lightTheme = {
  body: '#F7F7F7',

  buttonTextColor: '#333',
  buttonBackgroundColor: '#ccc',

  stageBackgroundColor: '#333',
  stageBorder: '2px solid #ccc',

  displayTextColor: '#333',
  displayBackgroundColor: '#F2F2F2',
  displayBorder: '4px solid #ccc',

  icons: '#1E1E1E'
}
