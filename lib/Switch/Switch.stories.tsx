import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Switch, SwitchProps } from './Switch'
import '../../src/styles/main.scss'

const meta: Meta<typeof Switch> = {
    title: 'Switch',
    component: Switch,
}
export default meta

type Story = StoryObj<typeof Switch>
type StoryFunctional = StoryObj<SwitchProps>

export const Default: Story = {
    args: {
        id: 'default',
    },
}

export const Primary: Story = {
    args: {
        id: 'primary',
        variant: 'primary',
    },
}

export const Secondary: Story = {
    args: {
        id: 'secondary',
        variant: 'secondary',
    },
}

export const Dark: Story = {
    args: {
        id: 'dark',
        variant: 'dark',
    },
}

export const Small: Story = {
    args: {
        id: 'small',
        size: 'small',
    },
}

export const Medium: Story = {
    args: {
        id: 'medium',
        size: 'medium',
    },
}

export const Large: Story = {
    args: {
        id: 'large',
        size: 'large',
    },
}

export const Checked: Story = {
    args: {
        id: 'checked',
        defaultChecked: true,
    },
}

export const Circle: Story = {
    args: {
        id: 'circle',
        circle: true,
    },
}

export const Rectangle: Story = {
    args: {
        id: 'rectangle',
        circle: false,
    },
}

export const Disabled: Story = {
    args: {
        id: 'disabled',
        disabled: true,
    },
}

export const ControlledSwitch: StoryFunctional = (args: SwitchProps) => {
    const [checked, setChecked] = useState(false)
    const handleChange = (value: boolean, event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(value, event.target.checked, event.target)
        alert(
            `Switch is ${value ? 'checked' : 'unchecked'}. Clicked on input with ID: ${event.target.id}`
        )
        setChecked(value)
    }

    return <Switch {...args} defaultChecked={checked} onChange={handleChange} />
}

ControlledSwitch.args = {
    id: 'controlled',
}
