import { Checkbox, CheckboxProps } from 'component-library'
import Grid from './Grid/Grid'
import { useState } from 'react'

const Checkboxes = (): JSX.Element => {
    const [checked, setChecked] = useState(false)

    const generateCheckboxes = (buttons: CheckboxProps[]): JSX.Element[] => {
        return buttons.map((button, index) => (
            <Checkbox
                label={button.label}
                key={index}
                cbSize={button.cbSize}
                variant={button.variant}
                disabled={button.disabled}
                checked={checked}
                reversed={button.reversed}
                onChange={setChecked}
            />
        ))
    }

    const variantCheckboxes = (): CheckboxProps[][] => {
        const checkboxes: CheckboxProps[][] = []

        ;['primary', 'secondary', 'dark'].forEach((variant) => {
            checkboxes.push(
                [
                    {
                        cbSize: 'small' as const,
                        label: 'Small',
                        children: 'Small',
                        onChange: () => {},
                    },
                    {
                        cbSize: 'medium' as const,
                        label: 'Medium',
                        children: 'Medium',
                        onChange: () => {},
                    },
                    {
                        cbSize: 'large' as const,
                        label: 'Large',
                        children: 'Large',
                        onChange: () => {},
                    },
                ].map((checkbox) => ({
                    ...checkbox,
                    variant: variant as 'primary' | 'secondary' | 'dark',
                }))
            )
        })

        return checkboxes
    }

    const disabledCheckboxes = () => {
        return variantCheckboxes().map((checkboxes) =>
            checkboxes.map((checkbox) => ({ ...checkbox, disabled: true }))
        )
    }

    const reversedCheckboxes = () => {
        return variantCheckboxes().map((checkboxes) =>
            checkboxes.map((checkbox) => ({ ...checkbox, reversed: true }))
        )
    }

    return (
        <div className="checkboxes">
            {variantCheckboxes().map((checkboxes, index) => (
                <Grid
                    key={index}
                    items={generateCheckboxes(checkboxes)}
                    title={`${checkboxes[0].variant} checkboxes`}
                />
            ))}

            {disabledCheckboxes().map((checkboxes, index) => (
                <Grid
                    key={index}
                    items={generateCheckboxes(checkboxes)}
                    title={`${checkboxes[0].variant} disabled checkboxes`}
                />
            ))}

            {reversedCheckboxes().map((checkboxes, index) => (
                <Grid
                    key={index}
                    items={generateCheckboxes(checkboxes)}
                    title={`${checkboxes[0].variant} reversed checkboxes`}
                />
            ))}
        </div>
    )
}

export default Checkboxes
