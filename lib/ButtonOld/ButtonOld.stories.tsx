import type { Meta, StoryObj } from '@storybook/react'
import { ButtonOld } from './ButtonOld'
import '../../src/styles/main.scss'

const meta: Meta<typeof ButtonOld> = {
    title: 'ButtonOld',
    component: ButtonOld,
}
export default meta

type Story = StoryObj<typeof ButtonOld>

export const Default: Story = {
    args: {
        children: 'Default button',
    },
}

export const Primary: Story = {
    args: {
        children: 'Primary button',
        variant: 'primary',
    },
}

export const Secondary: Story = {
    args: {
        children: 'Secondary button',
        variant: 'secondary',
    },
}

export const Dark: Story = {
    args: {
        children: 'Dark button',
        variant: 'dark',
    },
}

export const Small: Story = {
    args: {
        children: 'Small button',
        size: 'small',
    },
}

export const Medium: Story = {
    args: {
        children: 'Medium button',
        size: 'medium',
    },
}

export const Large: Story = {
    args: {
        children: 'Large button',
        size: 'large',
    },
}

export const Rounded: Story = {
    args: {
        children: 'Rounded button',
        rounded: true,
    },
}

export const Disabled: Story = {
    args: {
        children: 'Disabled button',
        disabled: true,
    },
}

export const Loading: Story = {
    args: {
        children: 'Loading button',
        loading: true,
    },
}

export const Custom: Story = {
    args: {
        children: 'Custom button',
        className: 'custom-class',
    },
}
