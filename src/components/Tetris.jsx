import Display from './Display'
import Stage from './Stage'
import StartButton from './StartButton'

// Styled components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetrisWrapper'

// Hooks
import { usePlayer } from '@/hooks/usePlayer'
import { useStage } from '@/hooks/useStage'
import { useInterval } from '@/hooks/useInterval'
import { useGameStatus } from '@/hooks/useGameStatus'
import { usePlayerMoves } from '@/hooks/usePlayerMoves'

const Tetris = () => {
  const { player, updatePlayerPosition, resetPlayer, playerRotate } = usePlayer()
  const { stage, setStage, rowsCleared } = useStage({ player, resetPlayer })
  const { score, rows, level, resetGameStatus, increaseDificulty, increaseSpeed, playerMoveDown, finishGame, dropTime, gameOver } = useGameStatus({ rowsCleared })

  const { move, keyUp, startGame, drop } = usePlayerMoves({
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
  })
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
