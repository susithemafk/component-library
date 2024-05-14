import { ButtonOld, Button } from 'component-library'
import useDarkMode from './hooks/useDarkMode'
// import Buttons from './components/Buttons'
import { Theme } from '@radix-ui/themes'

function App() {
    const { toggleDarkMode } = useDarkMode()

    return (
        <>
            <ButtonOld
                size="large"
                variant="dark"
                disabled={false}
                loading={false}
                onClick={() => toggleDarkMode()}>
                toggle dark mode
            </ButtonOld>

            <Button variant="primary" size="small">ahoj</Button>
            <Button variant="primary" size="medium">ahoj</Button>
            <Button variant="primary" size="large">ahojaa</Button>
        </>
    )
}

export default App
