import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipContainer = styled(Tooltip.Content, {
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  padding: '$3 $4',
  gap: '$2',

  backgroundColor: '$gray900',
  borderRadius: '$sm',
  position: 'relative',
})
