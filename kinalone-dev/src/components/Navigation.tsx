import projectsBtn from '../resources/nav/projects.svg'
import aboutBtn from '../resources/nav/about.svg'
import contactBtn from '../resources/nav/contact.svg'

const Navigation = () => {
  const toggleDarkMode = () => {};
  return (
    <nav className="navigation">
    <ul>
      <li>
          <div>
          <a className="button__frame" href="#projects">
          <img className="button__icon" src={projectsBtn} alt="'projects' section of homepage" />
          projects
          </a>
          </div>
      </li>
      <li>
          <div >
          <a href="#about" className="button__frame">
          <img className="button__icon" src={aboutBtn} alt="'about' section of homepage" />
          about
            </a>
          </div>
      </li>
      <li>
          <a href="#contact" className="button__frame">
          <img className="button__icon" src={contactBtn} alt="'contact' section of homepage" />
          contact
          </a>
      </li>
      <li>
        <label className="switch" htmlFor="lightswitch">
          <input type="checkbox" id="lightswitch" name="lightswitch" value="dark" onClick={toggleDarkMode} />
          <span className="slider"></span>
          <img className="toggleicon" id="moon" alt="" src="./img/moon.svg" />
          <img className="toggleicon" id="sun" alt="" src="./img/sun.svg" />
        </label>
      </li>
    </ul>
  </nav>
  )
}

export default Navigation