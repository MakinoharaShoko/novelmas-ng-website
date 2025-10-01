import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          NOVELM@STER NG
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="navbar-link">主页</Link>
          </li>
          <li>
            <Link to="/tutorial" className="navbar-link">教程</Link>
          </li>
          <li>
            <Link to="/resources" className="navbar-link">资源</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
