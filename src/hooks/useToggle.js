import { useState } from 'react'

export const useToggle = () => {
  const [isToggled, setIsToggled] = useState(false)

  const onToggle = () => {
    setIsToggled(!isToggled)
  }

  return { onToggle, isToggled }
}
