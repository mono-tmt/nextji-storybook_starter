import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { List } from './List'

export default {
  title: 'molecules/List',
  component: List,
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = (args) => <List />

export const Primary = Template.bind({})
Primary.args = {}
