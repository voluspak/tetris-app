export const STAGE_WIDTH = 12
export const STAGE_HEIGHT = 20

export const createStage = () => {
  return Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  )
}

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.piece.length; y++) {
    for (let x = 0; x < player.piece[y].length; x++) {
      if (player.piece[y][x] !== 0) {
        if (!stage[y + player.position.y + moveY] ||
          !stage[y + player.position.y + moveY][x + player.position.x + moveX] ||
          stage[y + player.position.y + moveY][x + player.position.x + moveX][1] !== 'clear'
        ) {
          return true
        }
      }
    }
  }
}
