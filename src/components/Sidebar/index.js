import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoIA from '../../assets/images/ia.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={LogoIA} alt='logo' />
      <img className='sub-logo' src={LogoSubtitle} alt='logo Subtitle' />
    </Link>
    <nav>
      <NavLink
        className="home-link"
        exact="true"
        activeclassname="active"
        to="/"
      >
        <FontAwesomeIcon icon={faHome} color="#5e5e5e"/>
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#5e5e5e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#5e5e5e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/isaacaguirreb/"
        >
          <FontAwesomeIcon icon={faLinkedinIn} color="#5e5e5e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/iiaguirrebhn"
        >
          <FontAwesomeIcon icon={faGithub} color="#5e5e5e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
