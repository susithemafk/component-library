import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'
import '../../src/styles/main.scss'

const meta: Meta<typeof Checkbox> = {
    title: 'Checkbox',
    component: Checkbox,
}
export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
    args: {
        label: 'Default checkbox',
        checked: true,
    },
}

export const Primary: Story = {
    args: {
        label: 'Primary checkbox',
        checked: true,
        variant: 'primary',
    },
}

export const Secondary: Story = {
    args: {
        label: 'Secondary checkbox',
        checked: true,
        variant: 'secondary',
    },
}

export const Dark: Story = {
    args: {
        label: 'Dark checkbox',
        checked: true,
        variant: 'dark',
    },
}

export const Small: Story = {
    args: {
        label: 'Small checkbox',
        checked: true,
        cbSize: 'small',
    },
}

export const Medium: Story = {
    args: {
        label: 'Medium checkbox',
        checked: true,
        cbSize: 'medium',
    },
}

export const Large: Story = {
    args: {
        label: 'Large checkbox',
        checked: true,
        cbSize: 'large',
    },
}

export const Disabled: Story = {
    args: {
        label: 'Disabled checkbox',
        checked: true,
        disabled: true,
    },
}

export const Reversed: Story = {
    args: {
        label: 'Reversed checkbox',
        checked: true,
        reversed: true,
    },
}

export const Unchecked: Story = {
    args: {
        label: 'Unchecked checkbox',
        checked: false,
    },
}

export const NoLabel: Story = {
    args: {
        checked: true,
    },
}

export const Custom: Story = {
    args: {
        label: 'Custom checkbox',
        checked: true,
        className: 'custom-class',
    },
}
