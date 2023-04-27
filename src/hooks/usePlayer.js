import { useCallback, useState } from 'react'
import { TETROMINOS, randomTetrominos } from '@/utils/consts'
import { STAGE_WIDTH, checkCollision } from '@/utils/gameHelpers'

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    position: { x: 0, y: 1 },
    piece: TETROMINOS[0].shape,
    collided: false
  })

  const rotate = (matrix, dir) => {
    const rotatedTetro = matrix.map((_, index) => matrix.map((col) => col[index]))

    if (dir > 0) {
      return rotatedTetro.map(row => row.reverse())
    }
    return rotatedTetro.reverse()
  }

  const playerRotate = (stage, dir) => {
    const clonedPlayer = structuredClone(player)

    const position = clonedPlayer.position.x
    let offset = 1
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.position.x += offset
      offset = -(offset + (offset > 0 ? 1 : -1))

      if (offset > clonedPlayer.piece.length) {
        rotate(clonedPlayer.piece, -dir)
        clonedPlayer.position.x = position
        return
      }
    }

    clonedPlayer.piece = rotate(clonedPlayer.piece, dir)
    setPlayer(clonedPlayer)
  }

  const updatePlayerPosition = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: {
        x: (prev.position.x += x),
        y: (prev.position.y += y)
      },
      collided
    }))
  }

  const resetPlayer = useCallback(() => {
    setPlayer({
      position: {
        x: STAGE_WIDTH / 2 - 2,
        y: 1
      },
      piece: TETROMINOS[randomTetrominos()].shape,
      collided: false
    })
  }, [])
  return { player, updatePlayerPosition, resetPlayer, playerRotate }
}
