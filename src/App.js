import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import PuzzleScreen from './screens/PuzzleScreen';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <header>
        <h1>Sliding puzzle game</h1>
        <Link to="/"><h3>Heim</h3></Link>
      </header>
      <main>
        <Routes>
          <Route path="/puzzle/:slug" element={<PuzzleScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </main>
      <footer>
        <h2>Margrét Dís</h2>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
