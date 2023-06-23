import { Link } from 'react-router-dom'
// import Login from './pages/Login'
// import Signup from './pages/Signup'
// import Home from './pages/Homepage'
// import Artist from './pages/Artist'

function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/">home</Link>
          </li>
          {/* <li>
            <Link to="/artist">Artist</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}

export default Nav
