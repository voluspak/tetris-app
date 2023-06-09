import styled from 'styled-components'

export const StyledTetrisWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.body};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledTetris = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  width: 80%;
  outline: auto;

  aside {
    align-self: flex-start;
    display: block;
  }
`
