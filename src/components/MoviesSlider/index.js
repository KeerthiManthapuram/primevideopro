// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MovieSlider = props => {
  const {moviesList} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <>
      <Slider {...settings}>
        {moviesList.map(eachMovie => (
          <MovieItem key={eachMovie.id} movieItemDetails={eachMovie} />
        ))}
      </Slider>
    </>
  )
}

export default MovieSlider
