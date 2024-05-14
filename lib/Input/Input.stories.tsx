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
        id: 'Default input',
    },
}

export const Primary: Story = {
    args: {
        label: 'Primary input',
        variant: 'primary',
        id: 'Primary input',
    },
}

export const Secondary: Story = {
    args: {
        label: 'Secondary input',
        variant: 'secondary',
        id: 'Secondary input',
    },
}

export const Dark: Story = {
    args: {
        label: 'Dark input',
        variant: 'dark',
        id: 'Dark input',
    },
}

export const Small: Story = {
    args: {
        label: 'Small input',
        id: 'Small input',
        inputSize: 'small',
    },
}

export const Medium: Story = {
    args: {
        label: 'Medium input',
        id: 'Medium input',
        inputSize: 'medium',
    },
}

export const Large: Story = {
    args: {
        label: 'Large input',
        id: 'Large input',
        inputSize: 'large',
    },
}

export const Disabled: Story = {
    args: {
        label: 'Disabled input',
        id: 'Disabled input',
        disabled: true,
    },
}

export const Placeholder: Story = {
    args: {
        label: 'Placeholder input',
        id: 'Placeholder input',
        placeholder: 'Placeholder',
    },
}

export const LabelUp: Story = {
    args: {
        label: 'Label up input',
        id: 'Label up input',
        labelUp: true,
    },
}

export const LabelUpPrimary: Story = {
    args: {
        label: 'Label up input Primary',
        id: 'Label up input Primary',
        labelUp: true,
        variant: 'primary',
    },
}

export const LabelUpSecondary: Story = {
    args: {
        label: 'Label up input Secondary',
        id: 'Label up input Secondary',
        labelUp: true,
        variant: 'secondary',
    },
}

export const LabelUpDark: Story = {
    args: {
        label: 'Label up input Dark',
        labelUp: true,
        id: 'Label up input Dark',
        variant: 'dark',
    },
}

export const NoLabel: Story = {
    args: {
        label: '',
        id: 'No label input',
    },
}
