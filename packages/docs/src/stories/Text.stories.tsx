import { Text, TextProps } from '@junielson-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias esse impedit repellat corporis ea similique minus asperiores debitis ad ab ex, totam dolor dolores obcaecati eveniet. Rem fuga minima numquam.',
    size: 'md',
  },

  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias esse impedit repellat corporis ea similique minus asperiores debitis ad ab ex, totam dolor dolores obcaecati eveniet. Rem fuga minima numquam.',
    as: 'strong',
  },
}
