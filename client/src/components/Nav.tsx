import { Link } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Homepage'

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
          {/* <a>Login</a> */}
        </li>
        <li>
          <Link to="/signup">Signup</Link>
          {/* <a href="/signup">Signup</a> */}
        </li>
        <li>
          <Link to="/">home</Link>
          {/* <a href="/">Home</a> */}
        </li>
      </ul>
    </nav>
  )
}

export default Nav
