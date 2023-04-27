import { StyledSwitch } from './styles/StyledSwitch'

function Switch ({ onToggle, isToggled }) {
  return (
    <StyledSwitch className='toggle-switch'>
      <input type='checkbox' checked={isToggled} onChange={onToggle} />
      <span className='switch' />
    </StyledSwitch>
  )
}
export default Switch
