import { TETROMINOS } from '@/utils/consts'
import { StyledCell } from './styles/StyledCell'

const Cell = ({ type }) => {
  return (
    <StyledCell
      type={type}
      color={TETROMINOS[type].color}
    />
  )
}

export default Cell
