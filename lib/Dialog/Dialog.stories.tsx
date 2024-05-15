import type { Meta, StoryObj } from '@storybook/react'
import { Dialog } from './Dialog'
import '../../src/styles/main.scss'

const meta: Meta<typeof Dialog> = {
    title: 'Dialog',
    component: Dialog,
}
export default meta

type Story = StoryObj<typeof Dialog>
