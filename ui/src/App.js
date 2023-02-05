import axios from 'axios';
import { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';
import MoviesTable from './components/MoviesTable';
import YearPicker from './components/YearPicker';

function App() {
  const [movies, setMovies] = useState([]);
  const [moviesToDisplay, setMoviesToDisplay] = useState([]);
  const [years, setYears] = useState([]);
  const [isChoosingYear, setIsChoosingYear] = useState(false);
  const [yearPicked, setYearPicked] = useState(null);

  let loadingMovies = false;

  useEffect(() => {
    console.log("inside use effect movies")
    setDisplayedMovies(true)
  }, [movies])
  useEffect(() => {
    console.log("inside use effect yearpicked", yearPicked)
    async function loadMovies() {
      let moviesResponse;
      try {
        if (yearPicked != null && typeof yearPicked === "number") {
          moviesResponse = await axios.get(`http://localhost:8080/movies/${yearPicked}`)
        } else {
          moviesResponse = await axios.get("http://localhost:8080/movies")
        }
        console.log(moviesResponse.data)
        setMovies([...moviesResponse.data])
      } catch {
        console.log("Failed to load movies")
      }
    }
    loadMovies()
  }, [yearPicked])


  useEffect(() => {
    async function loadData() {
      try {
        const years = await axios.get("http://localhost:8080/movies/years")
        setYears(years.data)
      } catch {
        console.log("Failed to load data")
      }
    }
    loadData()
    document.addEventListener('scroll', trackScrolling);

    return () => document.removeEventListener('scroll', trackScrolling);
  }, [])

  function isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  function trackScrolling() {
    const wrappedElement = document.querySelector('.App');
    if (isBottom(wrappedElement) && !loadingMovies) {
      console.log('header bottom reached');
      loadingMovies = true
      setDisplayedMovies()
      loadingMovies = false
    }
  }

   function setDisplayedMovies(forceCleanUp) {
    console.log(`setDisplayedMovies force ${forceCleanUp} with length`, moviesToDisplay.length)
    const moviesLength = movies.length
    const currentDisplayedLength = moviesToDisplay.length
    if (moviesLength <= currentDisplayedLength) {
      console.log(`movie length ${movies.length} is less than current displayed ${currentDisplayedLength}`)
      return}
    let endIndex = currentDisplayedLength + 10
    if (endIndex == moviesToDisplay.length && !forceCleanUp)  {
      console.log('all movies showing')
      return}
    if (moviesLength < endIndex) {
      endIndex = moviesLength
    }
    let subarray = movies.slice(currentDisplayedLength, endIndex)
    let helper = forceCleanUp ? [] : moviesToDisplay
    helper.push(...subarray)
    setMoviesToDisplay([...moviesToDisplay, ...subarray])
    console.log("setDisplayedMovies done", helper)

  }

  function onClickedChooseYear() {
    console.log("onClickedChooseYear")
    setIsChoosingYear(!isChoosingYear)
  }

  function onClickNoYear() {
    console.log("onClickNoYear")
    setIsChoosingYear(false)
    setYearPicked(null)
  }

  return (
    <div className="App">
      <header />
      <div className='container'>
        <div className='movie-ranking-title'>Movie ranking</div>
        <div className='button-container'>
          <button onClick={() => onClickNoYear()}>Top 10 Revenue</button>
          <div className="dropdown" onClick={() => onClickedChooseYear()}>
            <button className={isChoosingYear ? 'choosing-year' : null}>Top 10 Revenue {yearPicked != null ? yearPicked : 'per Year'}</button>
            {isChoosingYear ? <YearPicker years={years} onSelectYear={year => setYearPicked(year)} /> : null}
          </div>
        </div>
        <MoviesTable movies={moviesToDisplay} />
      </div>
    </div>
  );
}

export default App;
