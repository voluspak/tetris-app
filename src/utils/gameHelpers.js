export const STAGE_WIDTH = 12
export const STAGE_HEIGHT = 18

export const createStage = () =>
  Array(STAGE_HEIGHT)
    .fill()
    .map(() => new Array(STAGE_WIDTH).fill([0, 'clear']))

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  const piece = player.piece
  const position = player.position

  for (let y = 0; y < piece.length; y++) {
    for (let x = 0; x < piece[y].length; x++) {
      const isPieceCell = piece[y][x] !== 0

      const isOutOfStage = !stage[y + position.y + moveY] ||
        !stage[y + position.y + moveY][x + position.x + moveX]

      const isNotClearCell = isOutOfStage ||
        stage[y + position.y + moveY][x + position.x + moveX][1] !== 'clear'

      if (isPieceCell && isNotClearCell) {
        return true
      }
    }
  }

  return false
}
