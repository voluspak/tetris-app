import { useState, useEffect } from 'react'
import { createStage } from '@/utils/gameHelpers'

export const useStage = ({ player, resetPlayer }) => {
  const [stage, setStage] = useState(createStage())

  useEffect(() => {
    const updateStage = prevStage => {
      // flush the stage first
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      )

      // draw the tetromino
      player.piece.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            const posX = x + player.position.x
            const posY = y + player.position.y
            if (
              posY < stage.length &&
              posX < stage[0].length &&
              posY >= 0 &&
              posX >= 0
            ) {
              newStage[posY][posX] = [
                value,
                `${player.collided ? 'merged' : 'clear'}`
              ]
            }
          }
        })
      })

      if (player.collided) {
        resetPlayer()
      }

      return newStage
    }

    setStage(prev => updateStage(prev))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player.collided, player.piece, player.position, resetPlayer])

  return { stage, setStage }
}
