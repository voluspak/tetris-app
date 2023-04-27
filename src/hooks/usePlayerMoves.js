import { createStage, checkCollision } from '@/utils/gameHelpers'

export const usePlayerMoves = ({
  playerRotate,
  updatePlayerPosition,
  setStage,
  resetGameStatus,
  increaseDificulty,
  increaseSpeed,
  playerMoveDown,
  finishGame,
  player,
  stage,
  resetPlayer,
  rows,
  level,
  gameOver
}) => {
  const movePlayer = (movement, dir = '+') => {
    if (!checkCollision(player, stage, { x: Number(dir + 1), y: 0 })) {
      updatePlayerPosition({ x: Number(dir + movement), y: 0 })
    }
  }

  const startGame = () => {
    // reset everything
    setStage(createStage())
    resetPlayer()
    resetGameStatus()
  }

  const drop = () => {
    // increase level and speed when player has cleared 10 rows
    if (rows > (level + 1) * 10) {
      increaseDificulty()
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPosition({ x: 0, y: 0.5, collided: false })
    } else {
      if (player.position.y < 1) {
        console.log('Game over!!!')
        finishGame()
      }
      updatePlayerPosition({ x: 0, y: 0, collided: true })
    }
  }

  const keyUp = ({ key }) => {
    if (gameOver) return

    if (key === 'ArrowDown') increaseSpeed()
  }

  const dropPlayer = () => {
    playerMoveDown()
    drop()
  }

  const move = ({ key }) => {
    if (gameOver) return

    const MOVEMENT = {
      ArrowLeft: () => movePlayer(0.5, '-'),
      ArrowRight: () => movePlayer(0.5),
      ArrowDown: () => dropPlayer(),
      ArrowUp: () => playerRotate(stage, 1)
    }

    const MOVE = MOVEMENT[key]
    if (MOVE) {
      MOVE()
    }
  }

  return { startGame, move, keyUp, drop }
}
