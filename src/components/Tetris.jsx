import { useState } from 'react'
import Display from './Display'
import Stage from './Stage'
import StartButton from './StartButton'

import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetrisWrapper'

import { createStage } from '@/utils/gameHelpers'

import { usePlayer } from '@/hooks/usePlayer'
import { useStage } from '@/hooks/useStage'

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null)
  const [gameOver, setGameOver] = useState(false)
  const { player, updatePlayerPosition, resetPlayer } = usePlayer()
  const { stage, setStage } = useStage({ player })

  const movePlayer = direction => {
    updatePlayerPosition({ x: direction, y: 0 })
  }

  const startGame = () => {
    // reset everything
    setStage(createStage())
    resetPlayer()
  }

  const drop = () => {
    updatePlayerPosition({ x: 0, y: 1, collided: false })
  }

  const dropPlayer = () => {
    drop()
  }

  const move = ({ key }) => {
    if (gameOver) return

    if (key === 'ArrowLeft') {
      movePlayer(-1)
    }
    if (key === 'ArrowRight') {
      movePlayer(1)
    }
    if (key === 'ArrowDown') {
      movePlayer(-1)
    }
  }

  return (
    <StyledTetrisWrapper role='button' tabIndex={0} onKeyDown={(e) => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>

          {gameOver
            ? (<Display gameOver={gameOver} text='Game Over' />)
            : (
              <div>
                <Display text='Score' />
                <Display text='Rows' />
                <Display text='Level' />
              </div>
              )}

          <StartButton onClick={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris
