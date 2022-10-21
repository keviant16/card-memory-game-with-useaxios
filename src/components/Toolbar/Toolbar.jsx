import Attempt from '../Attempt/Attempt';
import Counter from '../Counter/Counter';
import Message from '../Message/Message';
import './style.css'

function Toolbar() {
    return (
        <div className='toolbar-container'>
            <h1 className="toolbar-title">Card Memory Game</h1>
            <div className='toolbar-tool'>
                {/* <Counter /> */}
                {/* <Attempt /> */}
                <Message />

                {/* show try number / show end game message */}
            </div>
        </div>
    );
}

export default Toolbar;