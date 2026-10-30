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
        defaultChecked: true,
    },
}

export const Primary: Story = {
    args: {
        label: 'Primary checkbox',
        defaultChecked: true,
        variant: 'primary',
    },
}

export const Secondary: Story = {
    args: {
        label: 'Secondary checkbox',
        defaultChecked: true,
        variant: 'secondary',
    },
}

export const Dark: Story = {
    args: {
        label: 'Dark checkbox',
        defaultChecked: true,
        variant: 'dark',
    },
}

export const Small: Story = {
    args: {
        label: 'Small checkbox',
        defaultChecked: true,
        cbSize: 'small',
    },
}

export const Medium: Story = {
    args: {
        label: 'Medium checkbox',
        defaultChecked: true,
        cbSize: 'medium',
    },
}

export const Large: Story = {
    args: {
        label: 'Large checkbox',
        defaultChecked: true,
        cbSize: 'large',
    },
}

export const Disabled: Story = {
    args: {
        label: 'Disabled checkbox',
        defaultChecked: true,
        disabled: true,
    },
}

export const Reversed: Story = {
    args: {
        label: 'Reversed checkbox',
        defaultChecked: true,
        reversed: true,
    },
}

export const Unchecked: Story = {
    args: {
        label: 'Unchecked checkbox',
        defaultChecked: false,
    },
}

export const NoLabel: Story = {
    args: {
        defaultChecked: true,
    },
}

export const Custom: Story = {
    args: {
        label: 'Custom checkbox',
        defaultChecked: true,
        className: 'custom-class',
    },
}
