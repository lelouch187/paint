import './App.css'
import TollBar from "./components/tollBar/TollBar.tsx";
import SettingBar from "./components/settingBar/SettingBar.tsx";
import CanvasDesk from "./components/canvasDesk/CanvasDesk.tsx";

function App() {

    return (
        <>
            <TollBar/>
            <SettingBar/>
            <CanvasDesk/>
        </>
    )
}

export default App
