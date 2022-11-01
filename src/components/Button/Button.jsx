import { useContext } from 'react';
import { getRandomImages, randomizeImage } from '.';
import { StateContext } from '../../App'
import './style.css'

/**
 * Start the game
 * @returns 
 */
function Button() {
    const { state, setState } = useContext(StateContext)

    const handleClick = async (e) => {
        e.preventDefault();
        setState((prev) => ({ ...prev, isGameLoding: true }))

        const fetchedImages = await getRandomImages()
        const duplicatedImages = fetchedImages.concat(fetchedImages)
        const shuffledImages = randomizeImage(duplicatedImages)
        setState((prev) => ({ ...prev, images: shuffledImages, isGameLoding: false }))
    }

    return (
        <button onClick={handleClick} className="btn">
            {state.isGameLoding ? "Chargement..." : "Jouez !"}
        </button>
    );
}
export default Button;