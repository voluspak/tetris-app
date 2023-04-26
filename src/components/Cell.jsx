import { TETROMINOS } from '@/utils/consts'
import { StyledCell } from './styles/StyledCell'

const Cell = ({ type }) => {
  return (
    <StyledCell
      type='L'
      color={TETROMINOS.L.color}
    >
      cell
    </StyledCell>
  )
}

export default Cell
