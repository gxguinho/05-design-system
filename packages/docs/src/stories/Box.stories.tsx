import type { StoryObj, Meta } from '@storybook/react'

import { Box, BoxProps, Text } from '@gx-ignite-ui/react'

export default {
  title: 'Surface/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta

export const Primary: StoryObj<BoxProps> = {}
