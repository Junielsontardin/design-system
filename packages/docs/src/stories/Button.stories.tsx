import { Button, ButtonProps } from '@junielson-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
