import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from './Loader'

class Home extends Component {
  state = {
    courses: [],
    isLoading: true,
    isError: false,
  }

  componentDidMount() {
    fetch('https://apis.ccbp.in/te/courses')
      .then(response => response.json())
      .then(data => {
        this.setState({
          courses: data.courses,
          isLoading: false,
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
    const {courses, isLoading, isError} = this.state

    if (isLoading) {
      return <Loader />
    }

    if (isError) {
      return (
        <div className="failure-view">
          <img
            src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
            alt="failure view"
          />
          <h1>Oops! Something Went Wrong</h1>
          <p>We cannot seem to find the page you are looking for.</p>
          <button type="button" onClick={this.componentDidMount}>
            Retry
          </button>
        </div>
      )
    }

    return (
      <div className="courses-container">
        <nav className="nav">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
              alt="website logo"
            />
          </Link>
        </nav>
        <h1>Courses</h1>
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              <Link to={`/courses/${course.id}`}>
                <img src={course.logo_url} alt={course.name} />
                <p>{course.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
