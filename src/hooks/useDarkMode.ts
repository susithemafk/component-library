import { useEffect, useState } from 'react'
import { Theme } from '../enums/Theme'

const useDarkMode = () => {
    const usersPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
    const [isDarkMode, setIsDarkMode] = useState(usersPreference)

    useEffect(() => {
        const body = document.body
        const theme = body.getAttribute('data-theme')
        setIsDarkMode(theme === Theme.Dark)
    }, [])

    const toggleDarkMode = () => {
        const body = document.body
        const theme = body.getAttribute('data-theme')
        const newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark
        body.setAttribute('data-theme', newTheme)
        setIsDarkMode(newTheme === Theme.Dark)
    }

    return { isDarkMode, toggleDarkMode }
}

export default useDarkMode
