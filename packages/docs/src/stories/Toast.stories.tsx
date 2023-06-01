import { Box, Button, Heading, Toast, ToastProps } from '@junielson-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Toast',
  component: Toast,

  args: {
    children: (
      <Button variant="primary" css={{ width: 'fit-content' }}>
        Toast
      </Button>
    ),
    titleToast: 'Agendamento realizado',
    descriptionToast: 'Quarta-feira, 23 de Outubro às 16h',
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
          <Heading>Componente Toast</Heading>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
