import { useCallback, useState } from 'react'
import { TETROMINOS, randomTetrominos } from '@/utils/consts'
import { STAGE_WIDTH } from '@/utils/gameHelpers'

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    position: { x: 0, y: 0 },
    piece: TETROMINOS[randomTetrominos()].shape,
    collided: false
  })

  const updatePlayerPosition = ({ x, y, collided }) => {
    setPlayer((prevState) => ({
      ...prevState,
      pos: {
        x: (prevState.position.x += x),
        y: (prevState.position.x += y)
      },
      collided
    }))
  }

  const resetPlayer = useCallback(() => {
    setPlayer({
      position: {
        x: STAGE_WIDTH / 2 - 2,
        y: 0
      },
      piece: TETROMINOS[randomTetrominos()].shape,
      collided: false
    })
  }, [])
  console.log(player.piece)
  return { player, updatePlayerPosition, resetPlayer }
}
