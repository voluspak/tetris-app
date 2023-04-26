import Display from './Display'
import Stage from './Stage'
import StartButton from './StartButton'
import { createStage } from '@/utils/gameHelpers'
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetrisWrapper'

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text='Score' />
            <Display text='Rows' />
            <Display text='Level' />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris
