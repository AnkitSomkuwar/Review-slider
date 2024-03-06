import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {
    activeReview: 0,
  }

  onLeftReview = () => {
    const {activeReview} = this.state

    if (activeReview > 0) {
      this.setState(prevState => ({
        activeReview: prevState.activeReview - 1,
      }))
    }
  }

  onRightReview = () => {
    const {activeReview} = this.state
    const {reviewsList} = this.props
    if (activeReview < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReview: prevState.activeReview + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReview} = this.state
    const {imgUrl, username, companyName, description} =
      reviewsList[activeReview]

    return (
      <div className="bg-container">
        <div className="review-container">
          <h1 className="heading">Reviews</h1>
          <div className="curosal-container">
            <button
              type="button"
              data-testid="leftArrow"
              className="left-arrow"
              onClick={this.onLeftReview}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <img src={imgUrl} alt={username} />
            <button
              type="button"
              data-testid="rightArrow"
              className="right-arrow"
              onClick={this.onRightReview}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
            <p className="name">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="description">{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel

