import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import MoviesTable from './components/MoviesTable';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies()
  }, [])

  async function loadMovies() {
    try {
      const response = await axios.get("http://localhost:8080/movies")
      setMovies(response.data)
    } catch {
      console.log("Failed to load movies")
    }

  }

  return (
    <div className="App">
      <header />
      <div className='container'>
        <div>Movie ranking</div>
        <div className='button-container'>
          <button>Top 10 Revenue</button>
          <button>Top 10 Revenue per Year</button>
        </div>
        <MoviesTable movies={movies} />
      </div>
    </div>
  );
}

export default App;
