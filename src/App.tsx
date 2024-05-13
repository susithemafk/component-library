import { Button, Input } from 'component-library'
import useDarkMode from './hooks/useDarkMode'
// import Buttons from './components/Buttons'

function App() {
    const { toggleDarkMode } = useDarkMode()

    return (
        <>
            <Button
                size="large"
                variant="dark"
                disabled={false}
                loading={false}
                onClick={() => toggleDarkMode()}>
                toggle dark mode
            </Button>

            {/* <Buttons /> */}
            <Input label="label" placeholder="placeholder" inputSize="medium" disabled={false} />
        </>
    )
}

export default App
