import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'
import '../../src/styles/main.scss'

const src = 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
const alt = 'alt'

const meta: Meta<typeof Avatar> = {
    title: 'Avatar',
    component: Avatar,
}
export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
    args: {
        children: 'Default avatar',
        src,
        alt,
    },
}

export const Small: Story = {
    args: {
        children: 'Small avatar',
        src,
        alt,
        size: 'small',
    },
}

export const Medium: Story = {
    args: {
        children: 'Medium avatar',
        src,
        alt,
        size: 'medium',
    },
}

export const Large: Story = {
    args: {
        children: 'Large avatar',
        src,
        alt,
        size: 'large',
    },
}

export const Square: Story = {
    args: {
        children: 'Square avatar',
        src,
        alt,
        shape: 'square',
    },
}

export const Shadow: Story = {
    args: {
        children: 'Shadow avatar',
        src,
        alt,
        shadow: true,
    },
}

export const Border: Story = {
    args: {
        children: 'Border avatar',
        src,
        alt,
        border: true,
    },
}
