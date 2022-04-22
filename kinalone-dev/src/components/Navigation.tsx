const Navigation = () => {
  const toggleDarkMode = () => {};
  return (
    <nav className="navigation">
    <ul>
      <li>
        <a href="#projects">
          <div className="button__frame">
          <img className="button__icon" src="img/projects.svg" alt="'projects' section of homepage" />
          </div>
          projects
        </a>
      </li>
      <li>
        <a href="#about">
          <div className="button__frame">
          <img className="button__icon" src="img/about.svg" alt="'about' section of homepage" />
          </div>
          about
        </a>
      </li>
      <li>
        <a href="#contact">
          <div className="button__frame">
          <img className="button__icon" src="img/contact.svg" alt="'contact' section of homepage" />
          </div>
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