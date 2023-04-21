import { useParams } from 'react-router-dom';
import Game from "../components/Game.js";

function PuzzleScreen() {
    const params = useParams();
    var { slug } = params;
    slug = slug.replaceAll("-"," ")
    return (
        <div className="theGame">
            <h1>{slug}</h1>
            <Game />
        </div>
    );
};
export default PuzzleScreen;