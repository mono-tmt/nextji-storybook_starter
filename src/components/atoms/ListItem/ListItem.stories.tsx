import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ListItem } from './ListItem'

export default {
  title: 'Atoms/ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>

const Template: ComponentStory<typeof ListItem> = (args) => (
  <ListItem {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
