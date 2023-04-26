import Display from './Display'
import Stage from './Stage'
import StartButton from './StartButton'
import { createStage } from '@/utils/gameHelpers'
import { StyledTetrisWrapper } from './styles/StyledTetrisWrapper'

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <Stage stage={createStage()} />
      <aside>
        <div>
          <Display text='Score' />
          <Display text='Rows' />
          <Display text='Level' />
        </div>
        <StartButton />
      </aside>
    </StyledTetrisWrapper>
  )
}

export default Tetris
