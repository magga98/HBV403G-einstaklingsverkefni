import data from "../data";
import { Link } from 'react-router-dom';

function HomeScreen() {
    return <div>
        <h1>Púsluspil í boði</h1>
        <div className="puzzles">
          {data.puzzles.map((puzzle) => (
            <div className="puzzle" key={puzzle.slug}>
              <Link to={`/puzzle/${puzzle.slug}`}>
                <img src={puzzle.image} alt={puzzle.name} />
              </Link>
              <div class="puzzle-info">
                <Link to={`/puzzle/${puzzle.slug}`}>
                  <h3>{puzzle.name}</h3>
                </Link>
                <h3>{puzzle.description}</h3>
                <p><strong>{puzzle.category}</strong></p>
              </div>
            </div>
          ))}
        </div>
    </div>;
}
export default HomeScreen;