import { ReactRenderer, type Preview } from '@storybook/react'
import {
    DataAttributeStrategyConfiguration,
    withThemeByDataAttribute,
} from '@storybook/addon-themes'

import './storybook.scss'

interface CustomDataAttributeStrategyConfiguration extends DataAttributeStrategyConfiguration {
    dataAttribute: string
}

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        withThemeByDataAttribute<ReactRenderer>({
            themes: {
                light: 'light',
                dark: 'dark',
            },
            defaultTheme: 'light',
            dataAttribute: 'data-theme',
        } as CustomDataAttributeStrategyConfiguration),
    ],
}

export default preview
