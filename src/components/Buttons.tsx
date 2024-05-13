import { Button, ButtonProps } from 'component-library'
import Grid from './Grid/Grid'

const Buttons = (): JSX.Element => {
    const generateButtons = (buttons: ButtonProps[]): JSX.Element[] => {
        return buttons.map((button, index) => (
            <Button
                key={index}
                size={button.size}
                variant={button.variant}
                rounded={button.rounded}
                disabled={button.disabled}
                loading={button.loading}
                onClick={(e) => console.log(e + ' clicked')}>
                {button.children}
            </Button>
        ))
    }

    const variantButtons = (): ButtonProps[][] => {
        const buttons: ButtonProps[][] = []

        ;['primary', 'secondary', 'dark'].forEach((variant) => {
            buttons.push(
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
                    variant: variant as 'primary' | 'secondary' | 'dark',
                }))
            )
        })

        return buttons
    }

    const roundedButtons = () => {
        return variantButtons().map((buttons) =>
            buttons.map((button) => ({ ...button, rounded: true }))
        )
    }

    const disabledButtons = () => {
        return variantButtons().map((buttons) =>
            buttons.map((button) => ({ ...button, disabled: true }))
        )
    }

    const loadingButtons = () => {
        return variantButtons().map((buttons) =>
            buttons.map((button) => ({ ...button, loading: true }))
        )
    }

    return (
        <div className="buttons">
            {variantButtons().map((buttons, index) => (
                <Grid
                    key={index}
                    items={generateButtons(buttons)}
                    title={`${buttons[0].variant} buttons`}
                />
            ))}

            {roundedButtons().map((buttons, index) => (
                <Grid
                    key={index}
                    items={generateButtons(buttons)}
                    title={`${buttons[0].variant} rounded buttons`}
                />
            ))}

            {disabledButtons().map((buttons, index) => (
                <Grid
                    key={index}
                    items={generateButtons(buttons)}
                    title={`${buttons[0].variant} disabled buttons`}
                />
            ))}

            {loadingButtons().map((buttons, index) => (
                <Grid
                    key={index}
                    items={generateButtons(buttons)}
                    title={`${buttons[0].variant} loading buttons`}
                />
            ))}
        </div>
    )
}

export default Buttons
