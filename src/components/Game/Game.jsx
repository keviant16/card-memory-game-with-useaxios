import { startGame } from ".";
import Matrice from "../Matrice/Matrice";

export default function Game() {
    return (
        <div className="block-game">
            <div>
                <Matrice />
            </div>
            <div>
                <button onClick={startGame}>Lancez le jeu</button>
            </div>
        </div>
    );
}

