import React from 'react'

const Navigation = () => {
  return (
    <nav className="navigation">
    <ul>
      <li>
        <a href="#projects">
          <div className="button__frame">
          <img className="button__icon" src="img/projects.svg" alt="icon of a computer screen with a link leading to the 'projects' section of the homepage" />
          </div>
          projects
        </a>
      </li>
      <li>
        <a href="#about">
          <div className="button__frame">
          <img className="button__icon" src="img/about.svg" alt="icon of a notepad with a link leading to the 'about' section of the homepage" />
          </div>
          about
        </a>
      </li>
      <li>
        <a href="#contact">
          <div className="button__frame">
          <img className="button__icon" src="img/contact.svg" alt="icon of an envelop with a link leading to the 'contact' section of the homepage" />
          </div>
          contact
        </a>
      </li>
      <li>
        <label className="switch" for="lightswitch">
          <input type="checkbox" id="lightswitch" name="lightswitch" value="dark" onClick="toggleDarkMode()">
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