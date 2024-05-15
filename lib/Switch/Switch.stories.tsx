import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch'
import '../../src/styles/main.scss'

const meta: Meta<typeof Switch> = {
    title: 'Switch',
    component: Switch,
}
export default meta

type Story = StoryObj<typeof Switch>
