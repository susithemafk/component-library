import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import '../../src/styles/main.scss'

const meta: Meta<typeof Input> = {
    title: 'Input',
    component: Input,
}
export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
    args: {
        label: 'Default input',
    },
}

export const Primary: Story = {
    args: {
        label: 'Primary input',
        variant: 'primary',
    },
}

export const Secondary: Story = {
    args: {
        label: 'Secondary input',
        variant: 'secondary',
    },
}

export const Dark: Story = {
    args: {
        label: 'Dark input',
        variant: 'dark',
    },
}

export const Small: Story = {
    args: {
        label: 'Small input',
        inputSize: 'small',
    },
}

export const Medium: Story = {
    args: {
        label: 'Medium input',
        inputSize: 'medium',
    },
}

export const Large: Story = {
    args: {
        label: 'Large input',
        inputSize: 'large',
    },
}

export const Disabled: Story = {
    args: {
        label: 'Disabled input',
        disabled: true,
    },
}

export const LabelUp: Story = {
    args: {
        label: 'Label up input',
        labelUp: true,
    },
}

export const LabelUpPrimary: Story = {
    args: {
        label: 'Label up input Primary',
        labelUp: true,
        variant: 'primary',
    },
}

export const LabelUpSecondary: Story = {
    args: {
        label: 'Label up input Secondary',
        labelUp: true,
        variant: 'secondary',
    },
}

export const LabelUpDark: Story = {
    args: {
        label: 'Label up input Dark',
        labelUp: true,
        variant: 'dark',
    },
}

export const Placeholder: Story = {
    args: {
        label: 'Placeholder input',
        placeholder: 'Placeholder',
    },
}
