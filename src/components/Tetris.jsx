import { useState } from 'react'
import Display from './Display'
import Stage from './Stage'
import StartButton from './StartButton'

// Styled components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetrisWrapper'

// Utils
import { createStage, checkCollision } from '@/utils/gameHelpers'

// Hooks
import { usePlayer } from '@/hooks/usePlayer'
import { useStage } from '@/hooks/useStage'
import { useInterval } from '@/hooks/useInterval'
import { useGameStatus } from '@/hooks/useGameStatus'

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null)
  const [gameOver, setGameOver] = useState(false)
  const { player, updatePlayerPosition, resetPlayer, playerRotate } = usePlayer()
  const { stage, setStage, rowsCleared } = useStage({ player, resetPlayer })
  const { score, setScore, rows, setRows, level, setLevel } = useGameStatus({ rowsCleared })

  const movePlayer = (movement, dir = '+') => {
    if (!checkCollision(player, stage, { x: Number(dir + 1), y: 0 })) {
      updatePlayerPosition({ x: Number(dir + movement), y: 0 })
    }
  }

  const startGame = () => {
    // reset everything
    setStage(createStage())
    setDropTime(1000)
    resetPlayer()
    setGameOver(false)
    setScore(0)
    setLevel(0)
    setRows(0)
  }

  const drop = () => {
    // increase level and speed when player has cleared 10 rows
    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1)
      setDropTime(1000 / (level + 1) + 200)
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPosition({ x: 0, y: 0.5, collided: false })
    } else {
      if (player.position.y < 1) {
        console.log('Game over!!!')
        setGameOver(true)
        setDropTime(null)
      }
      updatePlayerPosition({ x: 0, y: 0, collided: true })
    }
  }

  const keyUp = ({ key }) => {
    if (gameOver) return

    if (key === 'ArrowDown') setDropTime(1000 / (level + 1) + 200)
  }

  const dropPlayer = () => {
    setDropTime(null)
    drop()
  }

  const move = ({ key }) => {
    if (gameOver) return

    if (key === 'ArrowLeft') {
      movePlayer(0.5, '-')
    }
    if (key === 'ArrowRight') {
      movePlayer(0.5)
    }
    if (key === 'ArrowDown') {
      dropPlayer()
    }
    if (key === 'ArrowUp') {
      playerRotate(stage, 1)
    }
  }

  useInterval(() => {
    drop()
  }, dropTime)

  return (
    <StyledTetrisWrapper role='button' tabIndex={0} onKeyDown={move} onKeyUp={keyUp}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>

          {gameOver
            ? (<Display gameOver={gameOver} text='Game Over' />)
            : (
              <div>
                <Display text={`Score: ${score}`} />
                <Display text={`Rows: ${rows}`} />
                <Display text={`Level: ${level}`} />
              </div>
              )}

          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris
