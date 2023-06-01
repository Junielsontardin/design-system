import { Box, MultiStep, MultiStepProps } from '@junielson-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'MultiStep',
  component: MultiStep,

  args: {
    size: 4,
    currentStep: 1,
  },

  argTypes: {
    size: {
      control: {
        type: 'number',
      },
    },
  },

  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}
