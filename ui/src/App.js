import axios from 'axios';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './App.css';
import MoviesTable from './components/MoviesTable';
import YearPicker from './components/YearPicker';
import { useIsVisible } from './core/useIsVisibleHook';

function App() {
  const movieTableContainerRef = useRef()
  const [movies, setMovies] = useState([]);
  const [numberOfMovies, setNumberOfMovies] = useState(0);
  const [movieLastIndexToShow, setMovieLastIndexToShow] = useState(10);
  const [years, setYears] = useState([]);
  const [isChoosingYear, setIsChoosingYear] = useState(false);
  const [yearPicked, setYearPicked] = useState(null);

  const isVisible = useIsVisible(movieTableContainerRef)

  useEffect(() => {
    if (isVisible) {
      onEndOfListIsInView()
    }
    console.log("component is visible ", isVisible)
  }, [isVisible])

  useEffect(() => {
    console.log("movieLastIndexToShow updated ",movieLastIndexToShow ,numberOfMovies)
    setDisplayedMovies()
  }, [movieLastIndexToShow])

  useEffect(() => {
    console.log("numberOfMovies updated", numberOfMovies)
    
    setMovieLastIndexToShow(0)
    setDisplayedMovies()
  }, [numberOfMovies])

  useEffect(() => {
    if (movies.length > 0) {
      console.log("setting movie length to", movies.length)
      setNumberOfMovies(movies.length)
    // setDisplayedMovies()
      
    }
  }, [movies])

  useEffect(() => {
    if (typeof yearPicked === "number") {
      loadMovies()
    }
  }, [yearPicked])

  useEffect(() => {
    async function loadData() {
      try {
        const years = await axios.get("http://localhost:8080/movies/years")
        setYears(years.data)
        loadMovies()
      } catch {
        console.log("Failed to load data")
      }
    }
    loadData()
  }, [])

  async function loadMovies() {
    let moviesResponse;
    try {
      if (yearPicked && typeof yearPicked === "number" && yearPicked > 0) {
        moviesResponse = await axios.get(`http://localhost:8080/movies/${yearPicked}`)
      } else {
        moviesResponse = await axios.get("http://localhost:8080/movies")
      }
      setMovies(moviesResponse.data)
    } catch {
      console.log("Failed to load movies")
    }
  }

  function setDisplayedMovies() {
    if (!isVisible) return  
    console.log("updating index ", numberOfMovies, movieLastIndexToShow)
    if (numberOfMovies < movieLastIndexToShow) return 

    let newLastIndex = movieLastIndexToShow + 10
    if (newLastIndex > numberOfMovies) {
      newLastIndex = numberOfMovies
    }
    setMovieLastIndexToShow(newLastIndex)
  }

  function onClickedChooseYear() {
    setIsChoosingYear(!isChoosingYear)
  }

  function onClickNoYear() {
    setIsChoosingYear(false)
    setYearPicked(0)
  }

  let isUpdatingList = false
  function onEndOfListIsInView() {
    if (isUpdatingList) return

    isUpdatingList = true
    setDisplayedMovies()
    isUpdatingList = false
  }


  return (
    <div className="App">
      <header />
      <div className='container'>
        <div className='movie-ranking-title'>Movie ranking</div>
        <div className='button-container'>
          <button onClick={() => onClickNoYear()}>Top 10 Revenue</button>
          <div className="dropdown" onClick={() => onClickedChooseYear()}>
            <button className={isChoosingYear ? 'choosing-year' : null}>Top 10 Revenue {yearPicked > 0 ? yearPicked : 'per Year'}</button>
            {isChoosingYear ? <YearPicker years={years} onSelectYear={year => setYearPicked(year)} /> : null}
          </div>
        </div>
        <div >
          <MoviesTable movies={movies} lastIndexToShow={movieLastIndexToShow} />
          <div ref={movieTableContainerRef}/>
        </div>
      </div>
    </div>
  );
}

export default App;
