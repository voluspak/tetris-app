import { TETROMINOS } from '@/utils/consts'

const PIECE_COLOR_SELECTOR = {
  [TETROMINOS[0]]: 'clearPiece',
  [TETROMINOS.I]: 'iPiece',
  [TETROMINOS.J]: 'jPiece',
  [TETROMINOS.L]: 'lPiece',
  [TETROMINOS.O]: 'oPiece',
  [TETROMINOS.S]: 'sPiece',
  [TETROMINOS.T]: 'tPiece',
  [TETROMINOS.Z]: 'zPiece'
}

const Cell = ({ type }) => {
  return (
    <div
      className={` w-auto ${PIECE_COLOR_SELECTOR[TETROMINOS[0]]}`}
    >cell
    </div>
  )
}

export default Cell
