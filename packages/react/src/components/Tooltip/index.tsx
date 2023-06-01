import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { Text } from '../Text'
import { TooltipContainer } from './styles'
import { ReactNode } from 'react'

export interface TooltipProps {
  children: ReactNode
  textTooltip: string
}

export const Tooltip = ({ children, textTooltip }: TooltipProps) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipContainer
            className="TooltipContent"
            sideOffset={5}
            side="top"
          >
            <Text size="sm">{textTooltip}</Text>
            <TooltipPrimitive.Arrow className="TooltipArrow" fill="#121214" />
          </TooltipContainer>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
