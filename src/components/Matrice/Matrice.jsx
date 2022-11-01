import { useContext } from 'react';
import { QUESTION_MARK, StateContext } from '../../App';
import './style.css'

function Matrice() {
    const { state } = useContext(StateContext)

    return (
        <div className="grid-container">
            {!state.isGameLoding
                ? state.images.map((image, idx) =>
                    <div className="grid-item" key={idx}>
                        {QUESTION_MARK}
                        {/* {image === "?" ? image : <img alt='cell-img' src={image} />} */}
                    </div>
                )
                : <div>Chargement...</div>
            }
        </div>
    );
}

export default Matrice;
