import projectsBtn from '../resources/nav/projects.svg'
import aboutBtn from '../resources/nav/about.svg'
import contactBtn from '../resources/nav/contact.svg'
import moon from '../resources/icons/moon.svg'
import sun from '../resources/icons/sun.svg'

const Navigation = () => {
  const toggleDarkMode = () => {};
  return (
    <nav className="navigation">
    <ul>
      <li className="navigation__button">
          <a className="button__frame" href="#projects">
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
      {/* 
      <li className="navigation__lightswitch">
        <label className="switch" htmlFor="lightswitch">
          <input type="checkbox" id="lightswitch" name="lightswitch" value="dark" onClick={toggleDarkMode} />
          <span className="slider"></span>
          <img className="toggleicon" id="moon" alt="" src={moon} />
          <img className="toggleicon" id="sun" alt="" src={sun} />
        </label>
      </li>
      */}
    </ul>
  </nav>
  )
}

export default Navigation