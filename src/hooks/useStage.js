import { useState, useEffect } from 'react'
import { createStage } from '@/utils/gameHelpers'

export const useStage = ({ player, resetPlayer }) => {
  const [stage, setStage] = useState(createStage())
  const [rowsCleared, setRowsCleared] = useState(0)

  const playgroundAreaLimits = { x: stage[0].length, y: stage.length }

  useEffect(() => {
    setRowsCleared(0)

    const isInBoundary = (posX, posY) => {
      return (
        posY < playgroundAreaLimits.y &&
        posX < playgroundAreaLimits.x &&
        posY >= 0 &&
        posX >= 0
      )
    }

    const sweepRows = newStage => {
      return newStage.reduce((acc, row) => {
        if (row.findIndex(cell => cell[0] === 0) === -1) {
          setRowsCleared(prev => prev + 1)
          acc.unshift(new Array(newStage[0].length).fill([0, 'clear']))
          return acc
        }
        acc.push(row)
        return acc
      }, [])
    }

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

            if (!isInBoundary(posX, posY) && newStage === undefined) return

            newStage[posY][posX] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`
            ]
          }
        })
      })
      if (player.collided) {
        resetPlayer()
        return sweepRows(newStage)
      }

      return newStage
    }

    setStage(prev => updateStage(prev))
    console.log('effect')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player, resetPlayer])

  return { stage, setStage, rowsCleared }
}
