import projectsBtn from '../../resources/nav/projects.svg'
import aboutBtn from '../../resources/nav/about.svg'
import contactBtn from '../../resources/nav/contact.svg'
import Lightswitch from './Lightswitch'
const Navigation = () => {
  return (
    <nav className="navigation">
    <ul>
      <li className="navigation__button">
          <a href="#projects" className="button__frame">
          <img className="button__icon icon" src={projectsBtn} alt="'projects' section of homepage" />
          projects
          </a>
      </li>
      <li className="navigation__button">
          <a href="#about" className="button__frame">
          <img className="button__icon" src={aboutBtn} alt="'about' section of homepage" />
          about
            </a>
      </li>
      <li className="navigation__button">
          <a href="#contact" className="button__frame">
          <img className="button__icon" src={contactBtn} alt="'contact' section of homepage" />
          contact
          </a>
      </li>
      <li className="navigation__lightswitch">
        <Lightswitch />
      </li>
    </ul>
  </nav>
  )
}

export default Navigation