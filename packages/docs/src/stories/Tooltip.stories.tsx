import {
  Box,
  Button,
  Heading,
  Tooltip,
  TooltipProps,
} from '@junielson-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Tooltip',
  component: Tooltip,

  args: {
    children: (
      <Button variant="primary" css={{ width: 'fit-content' }}>
        Tooltip
      </Button>
    ),
    textTooltip: '15 de agosto - Disponível',
  },

  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },

  decorators: [
    (Story) => {
      return (
        <Box css={{ display: 'flex', flexDirection: 'column', gap: '$4' }}>
          <Heading>Componente Tooltip</Heading>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
