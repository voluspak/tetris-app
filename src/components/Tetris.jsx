import Display from './Display'
import Stage from './Stage'
import StartButton from './StartButton'
import Switch from './Switch'
import { MoonIcon, SunIcon } from './Icons'

// Styled components
import { ThemeProvider } from 'styled-components'
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetrisWrapper'

import { darkTheme, lightTheme } from '@/utils/consts'

// Hooks
import { usePlayer } from '@/hooks/usePlayer'
import { useStage } from '@/hooks/useStage'
import { useInterval } from '@/hooks/useInterval'
import { useGameStatus } from '@/hooks/useGameStatus'
import { usePlayerMoves } from '@/hooks/usePlayerMoves'
import { useToggle } from '@/hooks/useToggle'

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

  const { onToggle, isToggled } = useToggle()
  useInterval(() => {
    drop()
  }, dropTime)

  return (
    <ThemeProvider theme={isToggled ? darkTheme : lightTheme}>
      <StyledTetrisWrapper role='button' tabIndex={0} onKeyDown={move} onKeyUp={keyUp}>
        <StyledTetris>
          <aside>
            <SunIcon />
            <Switch onToggle={onToggle} isToggled={isToggled} />
            <MoonIcon />
          </aside>

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
    </ThemeProvider>

  )
}

export default Tetris
