import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// Usage of FA npm package
// https://www.npmjs.com/package/@fortawesome/react-fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// FA icons can be found Here: https://fontawesome.com/v4.7.0/icons/
// faCog = settings icon
// faFolder = projects icon
// faInfoCircle = about icon
import { faHome, faCog, faFolder, faUser, faCubes, faComments } from '@fortawesome/free-solid-svg-icons';

// import css
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-custom">
      <ul className="navbar-section">
        <li className="nav-item">
          <Link to='/'>
          <div className="logo logo-main"></div>
          <div className="icon-text">
            <p>Kenny</p>
          </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/'>
          <FontAwesomeIcon icon={faHome} color="rgba(255, 255, 255, 0.38)" size="2x"/>
          <div className="icon-text">
            <p>Home</p>
          </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/about'>
          <FontAwesomeIcon icon={faUser} color="rgba(255, 255, 255, 0.38)" size="2x"/>
          <div className="icon-text">
            <p>About</p>
          </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link>
          <FontAwesomeIcon icon={faCubes} color="rgba(255, 255, 255, 0.38)" size="2x"/>
          <div className="icon-text">
            <p>Skills</p>
          </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link>
          <FontAwesomeIcon icon={faFolder} color="rgba(255, 255, 255, 0.38)" size="2x"/>
          <div className="icon-text">
            <p>Projects</p>
          </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/contact'>
          <FontAwesomeIcon icon={faComments} color="rgba(255, 255, 255, 0.38)" size="2x"/>
          <div className="icon-text">
            <p>Contact</p>
          </div>
          </Link>
        </li>
        <li className="nav-item">
          <div>
          <FontAwesomeIcon icon={faCog} color="rgba(255, 255, 255, 0.38)" size="2x"/>
          <div className="icon-text">
            <p>Settings</p>
          </div>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Navbar);