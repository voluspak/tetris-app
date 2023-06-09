import styled from 'styled-components'

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    minmax(calc(23vw / ${props => props.width}) , auto)
  );
  grid-template-columns: repeat(
    ${props => props.width},
    1fr
  );
  gap: 1px;
  border: ${(props) => props.theme.stageBorder};
  min-width: 10rem;
  width: 25%;
  background-color: ${(props) => props.theme.stageBackgroundColor};
`
