import styled from 'styled-components'

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  border: 4px solid #333;
  min-height: 30px;
  width: auto;
  border-radius: 20px;
  color: ${props => (props.gameOver ? 'red' : '#999')};
  background-color: #000;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
`
