import { Box, Text, TextInput, TextInputProps } from '@junielson-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'TextInput',
  component: TextInput,

  args: {},

  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Add any observations...',
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
  },
}
