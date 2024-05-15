/**
 * This file is for vite application, not for storybook
 * makes sure to import components using "import { Button } from 'component-library'"
 */
import '../src/styles/main.scss'

export { Button } from './Button/Button'
export type { ButtonProps } from './Button/Button'

export { Checkbox } from './Checkbox/Checkbox'
export type { CheckboxProps } from './Checkbox/Checkbox'

export { Input } from './Input/Input'
export type { InputProps } from './Input/Input'

export { Avatar } from './Avatar/Avatar'
export type { AvatarProps } from './Avatar/Avatar'

export { Dialog } from './Dialog/Dialog'
export type { DialogProps } from './Dialog/Dialog'

export { Switch } from './Switch/Switch'
export type { SwitchProps } from './Switch/Switch'