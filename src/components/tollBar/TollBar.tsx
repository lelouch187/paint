import Brush from '../../assets/brush.svg'
import Rect from '../../assets/rect.svg'
import Circle from '../../assets/circle.svg'
import Eraser from '../../assets/eraser.svg'
import Line from '../../assets/line.svg'
import Rainbow from '../../assets/rainbow.png'
import Undo from '../../assets/undo.svg'
import Redo from '../../assets/redo.svg'
import Save from '../../assets/save.svg'

const TollBar = () => {
    return (
        <div className='tollBar'>
            <div className='leftPanel'>
                <div className='svgWrapper'>
                    <img src={Brush} />
                </div>
                <div className='svgWrapper'>
                    <img src={Rect}/>
                </div>
                <div className='svgWrapper'>
                    <img src={Circle}/>
                </div>
                <div className='svgWrapper'>
                    <img src={Eraser}/>
                </div>
                <div className='svgWrapper'>
                    <img src={Line}/>
                </div>
                <div className='svgWrapper'>
                    <img src={Rainbow}/>
                </div>
            </div>
            <div className='rightPanel'>
                <div className='svgWrapper'>
                    <img src={Undo}/>
                </div>
                <div className='svgWrapper'>
                    <img src={Redo}/>
                </div>
                <div className='svgWrapper'>
                    <img src={Save}/>
                </div>
            </div>
        </div>
    );
};

export default TollBar;
