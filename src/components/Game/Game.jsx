import Button from "../Button/Button";
import Matrice from "../Matrice/Matrice";
import Toolbar from "../Toolbar/Toolbar";
import './style.css'

export default function Game() {
    return (
        <div className="block-game">
            <div>
                <Toolbar />
            </div>
            <div>
                <Matrice />
            </div>
            <div>
                <Button />
            </div>
        </div>
    );
}

