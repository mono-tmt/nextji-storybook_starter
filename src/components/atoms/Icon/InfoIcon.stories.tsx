import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { InfoIcon } from './InfoIcon'

export default {
  title: 'Atoms/InfoIcon',
  component: InfoIcon,
} as ComponentMeta<typeof InfoIcon>

const Template: ComponentStory<typeof InfoIcon> = () => <InfoIcon />

export const Infomation = Template.bind({})
Infomation.args = {}
