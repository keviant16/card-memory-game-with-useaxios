import axios from "axios";

/**
 * fetch random image
 * @returns image
 */
export async function getRandomImages() {
    try {
        const response = Promise.all([
            (await axios.get('https://random.imagecdn.app/v1/image?width=90&height=90')).data,
            (await axios.get('https://random.imagecdn.app/v1/image?width=90&height=90')).data,
            (await axios.get('https://random.imagecdn.app/v1/image?width=90&height=90')).data,
            (await axios.get('https://random.imagecdn.app/v1/image?width=90&height=90')).data,
            (await axios.get('https://random.imagecdn.app/v1/image?width=90&height=90')).data,
            (await axios.get('https://random.imagecdn.app/v1/image?width=90&height=90')).data,
            (await axios.get('https://random.imagecdn.app/v1/image?width=90&height=90')).data,
            (await axios.get('https://random.imagecdn.app/v1/image?width=90&height=90')).data,
        ])
        return response
    } catch (error) {
        console.error(error);
    }
}

/**
 * randomize array of images
 * source https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj#:~:text=The%20first%20and%20simplest%20way%20to%20shuffle%20an,shuffledArray%20%3D%20array.sort%28%28a%2C%20b%29%20%3D%3E%200.5%20-%20Math.random%28%29%29%3B
 * @param images
 * @returns 
 */
export const randomizeImage = array => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
    }
    return newArray
}


