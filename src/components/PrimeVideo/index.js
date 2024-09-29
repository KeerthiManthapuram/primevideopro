// Write your code here
import './index.css'

import MoviesSlider from '../MoviesSlider'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    each => each.categoryId === actionMovie,
  )
  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === comedyMovie,
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-image"
      />
      <h1 className="heading">Action Movies</h1>
      <MoviesSlider moviesList={actionMoviesList} />
      <h1 className="heading">Comedy Movies</h1>
      <MoviesSlider moviesList={comedyMoviesList} />
    </div>
  )
}

export default PrimeVideo
