import { Button } from 'component-library'
import useDarkMode from './hooks/useDarkMode'
import './App.scss'
import Buttons from './components/Buttons'
import Checkboxes from './components/Checkboxes'
import Avatars from './components/Avatars'
import Switches from './components/Switches'

function App() {
    const { toggleDarkMode } = useDarkMode()
    return (
        <>
            <div style={{ margin: '100px 0' }}>
                <Button
                    size="large"
                    variant="dark"
                    disabled={false}
                    rounded={true}
                    loading={false}
                    onClick={() => toggleDarkMode()}>
                    toggle dark mode
                </Button>
            </div>

            <Buttons />

            <Checkboxes />

            <Avatars />

            <Switches />
        </>
    )
}

export default App
