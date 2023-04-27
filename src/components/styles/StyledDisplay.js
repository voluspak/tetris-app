import styled from 'styled-components'

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 20px 0;

  border: ${(props) => props.theme.displayBorder};
  min-height: 30px;
  min-width: 8rem;
  width: auto;
  border-radius: 20px;
  color: ${props => (props.gameOver ? 'red' : props.theme.displayTextColor)};
  background-color: ${(props) => props.theme.displayBackgroundColor};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
`
