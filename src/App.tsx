import { Button, Checkbox, Input } from 'component-library'
import useDarkMode from './hooks/useDarkMode'
// import Buttons from './components/Buttons'

function App() {
    const { toggleDarkMode } = useDarkMode()

    return (
        <>
            <div style={{ margin: '100px 0' }}>
                <Button
                    size="large"
                    variant="dark"
                    disabled={false}
                    loading={false}
                    onClick={() => toggleDarkMode()}>
                    toggle dark mode
                </Button>
            </div>

            <Checkbox />
            <Checkbox variant='secondary' label="sdf" />

            {/* <Buttons /> */}
            {/* <Input id="test" label="label" placeholder="placeholder" inputSize="medium" /> */}
            <Input
                id="test"
                variant="primary"
                label="label"
                placeholder="placeholder"
                inputSize="medium"
            />
            <Input
                id="test"
                variant="secondary"
                label="label"
                placeholder="placeholder"
                inputSize="medium"
            />
            <Input
                id="test"
                variant="dark"
                label="label"
                placeholder="placeholder"
                inputSize="medium"
            />
            <Input
                id="test"
                variant="primary"
                label="label"
                placeholder="placeholder"
                inputSize="small"
            />
            <Input
                id="test"
                variant="secondary"
                label="label"
                placeholder="placeholder"
                inputSize="small"
            />
            <Input
                id="test"
                variant="dark"
                label="label"
                placeholder="placeholder"
                inputSize="small"
            />
            <Input
                id="test"
                variant="primary"
                label="label"
                placeholder="placeholder"
                inputSize="large"
                labelUp={true}
            />
            <Input
                id="test"
                variant="secondary"
                label="label"
                placeholder="placeholder"
                inputSize="large"
                labelUp={true}
            />
            <Input
                id="test"
                variant="dark"
                label="label"
                placeholder="placeholder"
                inputSize="large"
                labelUp={true}
            />
        </>
    )
}

export default App
