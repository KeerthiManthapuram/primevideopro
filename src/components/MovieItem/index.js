// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import './index.css'

import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {movieItemDetails} = props
  const {thumbnailUrl, videoUrl} = movieItemDetails

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <div className="movie-item-card">
            <img
              src={thumbnailUrl}
              alt="thumbnail"
              className="movie-thumbnail"
            />
          </div>
        }
        className="popup-content"
      >
        {close => (
          <>
            <button
              type="button"
              data-testid="closeButton"
              aria-label="Click me"
              className="close-button"
              onClick={() => close()}
            >
              <IoMdClose size="30" />
            </button>
            <div className="responsive-container">
              <ReactPlayer height="350px" width="400px" url={videoUrl} />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
