import styled from 'styled-components'
import theme from '@/styles/theme'

interface PadButtonProps {
  name: string
  state: 'active' | 'deactive' | 'pending-on' | 'pending-off'
  onClick: (event: MouseEvent) => void
}

const PadButton = ({ name, state, onClick = () => {} }: PadButtonProps) => {
  let buttonTemplate = PadButtonCore
  switch (state) {
    case 'active':
      buttonTemplate = ActiveButton
      break
    case 'pending-on':
    case 'pending-off':
      buttonTemplate = PendingButton
      break
    case 'deactive':
      buttonTemplate = DisabledButton
      break
    default:
      break
  }
  return (
    <PadButtonCore as={buttonTemplate} onClick={onClick}>
      {/* {name} {state} */}
    </PadButtonCore>
  )
}

export default PadButton

const PadButtonCore = styled.button`
  position: relative;
  padding-bottom: 100%;
  width: 100%;
  cursor: pointer;
  border: 1px solid ${theme.colors.dark};
`

const ActiveButton = styled(PadButtonCore)`
  background: ${theme.colors.success};
`
const DisabledButton = styled(PadButtonCore)`
  background: ${theme.colors.danger};
`
const PendingButton = styled(PadButtonCore)`
  background: ${theme.colors.yellow};
`
