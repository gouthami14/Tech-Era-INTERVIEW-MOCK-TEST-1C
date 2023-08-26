import {Component} from 'react'
import Loader from './Loader'

class CourseItemDetails extends Component {
  state = {
    courseDetails: {},
    isLoading: true,
    isError: false,
  }

  componentDidMount() {
    this.fetchCourseDetails()
  }

  fetchCourseDetails = () => {
    const {match} = this.props // Destructuring props
    const courseId = match.params.id
    const courseDetailsApiUrl = `https://apis.ccbp.in/te/courses/${courseId}`

    fetch(courseDetailsApiUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          courseDetails: data.course_details,
          isLoading: false,
          isError: false,
        })
      })
      .catch(error => {
        // Omitted the error variable
        this.setState({
          isError: true,
          isLoading: false,
        })
      })
  }

  render() {
    const {courseDetails, isLoading, isError} = this.state

    if (isLoading) {
      return <Loader />
    }

    if (isError) {
      return (
        <div className="failure-view">
          <h1>Oops! Something Went Wrong</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
            alt="failure view"
          />
          <p>We cannot seem to find the page you are looking for</p>
          <button type="button" onClick={this.fetchCourseDetails}>
            Retry
          </button>
        </div>
      )
    }

    return (
      <div className="course-details-container">
        <h1>{courseDetails.name}</h1>
        <img src={courseDetails.image_url} alt={courseDetails.name} />
        <p>{courseDetails.description}</p>
      </div>
    )
  }
}

export default CourseItemDetails
