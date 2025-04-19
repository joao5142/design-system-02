import { Meta, StoryObj } from '@storybook/vue3'

import ColorsGrid from '../components/ColorsGrid.vue'

const meta = {
  title: 'Tokens/Colors',
  component: ColorsGrid
} as Meta

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    layout: 'dark'
  },

  parameters: {
    providerProps: {
      fullHeight: true,  
    },
  },

  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: 'select',
      description: 'theme'
    }
  }
}
