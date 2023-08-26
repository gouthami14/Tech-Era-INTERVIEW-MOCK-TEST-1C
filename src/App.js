import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import './App.css' // Add CSS styles
import Home from './components/Home'
import CourseDetails from './components/CourseDetails'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="nav">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
              alt="website logo"
            />
          </Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/courses/:id" component={CourseDetails} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
