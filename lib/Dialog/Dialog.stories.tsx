import type { Meta, StoryObj } from '@storybook/react'
import { Dialog, DialogProps } from './Dialog'
import '../../src/styles/main.scss'
import { useState } from 'react'

const meta: Meta<typeof Dialog> = {
    title: 'Dialog',
    component: Dialog,
}
export default meta

type Story = StoryObj<typeof Dialog>
type StoryFunctional = StoryObj<DialogProps>

export const Default: Story = {
    args: {
        children: <strong>Default dialog</strong>,
        open: true,
    },
}

export const OverlayNone: Story = {
    args: {
        children: <div>Overlay none dialog</div>,
        open: true,
        overlay: 'none',
    },
}

export const OverlayMedium: Story = {
    args: {
        children: 'Overlay medium dialog',
        open: true,
        overlay: 'medium',
    },
}

export const OverlayDark: Story = {
    args: {
        children: <strong>Overlay dark dialog</strong>,
        open: true,
        overlay: 'dark',
    },
}

export const ControlledDialog: StoryFunctional = (args: DialogProps) => {
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)

    return (
        <div>
            <button onClick={() => setOpen(true)}>Open Dialog</button>
            <Dialog {...args} open={open} onClose={handleClose} />
        </div>
    )
}

ControlledDialog.args = {
    children: <strong>On close dialog</strong>,
    overlay: 'dark',
}
