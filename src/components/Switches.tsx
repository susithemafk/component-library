import { Switch, SwitchProps } from 'component-library'
import Grid from './Grid/Grid'
import { useState } from 'react'

const Switches = (): JSX.Element => {
    const [checked, setChecked] = useState(false)

    const generateSwitches = (switches: SwitchProps[]): JSX.Element[] => {
        return switches.map((s, index) => (
            <Switch
                key={index}
                size={s.size}
                variant={s.variant}
                circle={s.circle}
                id={s.id}
                checked={checked}
                disabled={s.disabled}
                onChange={setChecked}>
                {s.children}
            </Switch>
        ))
    }

    const variantSwitches = (): SwitchProps[][] => {
        const switches: SwitchProps[][] = []

        ;['primary', 'secondary', 'dark'].forEach((variant) => {
            switches.push(
                [
                    {
                        size: 'small' as const,
                        children: 'Small',
                    },
                    {
                        size: 'medium' as const,
                        children: 'Medium',
                    },
                    {
                        size: 'large' as const,
                        children: 'Large',
                    },
                ].map((button) => ({
                    ...button,
                    id: 'switch' + button.size + Math.random() * 1000,
                    variant: variant as 'primary' | 'secondary' | 'dark',
                    onChange: setChecked,
                }))
            )
        })

        return switches
    }

    const squareSwitches = () => {
        return variantSwitches().map((switches) =>
            switches.map((button) => ({ ...button, circle: false }))
        )
    }

    const disabledSwitches = () => {
        return variantSwitches().map((switches) =>
            switches.map((button) => ({ ...button, disabled: true }))
        )
    }

    return (
        <div className="switches">
            {variantSwitches().map((switches, index) => (
                <Grid
                    key={index}
                    items={generateSwitches(switches)}
                    title={`${switches[0].variant} switches`}
                />
            ))}

            {disabledSwitches().map((switches, index) => (
                <Grid
                    key={index}
                    items={generateSwitches(switches)}
                    title={`${switches[0].variant} disabled switches`}
                />
            ))}

            {squareSwitches().map((switches, index) => (
                <Grid
                    key={index}
                    items={generateSwitches(switches)}
                    title={`${switches[0].variant} rounded switches`}
                />
            ))}
        </div>
    )
}

export default Switches
