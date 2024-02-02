import './App.css'
import TollBar from "./components/tollBar/TollBar.tsx";
import SettingBar from "./components/settingBar/SettingBar.tsx";
import CanvasDesk from "./components/canvasDesk/CanvasDesk.tsx";

function App() {

    return (
        <div className="app">
            <TollBar/>
            <SettingBar/>
            <div className="content">
                <CanvasDesk/>
            </div>

        </div>
    )
}

export default App
