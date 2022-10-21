import Card from "../Card/Card";

const array = Array(4).fill(Array(4))

function Matrice() {
    return (
        <div>
            {array.map(() => <Card />)}
        </div>
    );
}

export default Matrice;
