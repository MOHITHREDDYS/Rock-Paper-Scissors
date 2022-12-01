import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import './index.css'

const RulesPopup = () => (
  <div className="movie-item-container">
    <Popup
      modal
      trigger={
        <button type="button" className="trgButton">
          Rules
        </button>
      }
      position="center center"
      className="popup-content"
    >
      {close => (
        <div>
          <div className="video-sett">
            <div className="video">
              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
                className="thumbnail-image"
              />
            </div>
            <button
              type="button"
              onClick={() => close()}
              className="close-button"
              data-testid="closeButton"
            >
              <RiCloseLine className="close-icon" />
            </button>
          </div>
        </div>
      )}
    </Popup>
  </div>
)

export default RulesPopup
