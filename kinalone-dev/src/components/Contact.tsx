import React from 'react'

const Contact = () => {
  return (
    <section className="contact">
    <div className="contact__header">
      <h1>contact</h1>
    </div>
      <ul className="contact__list">
        <li>
          <a href="mailto:kinalone.dev@gmail.com?subject=new message from kinalone.dev" target="_blank" rel="noopener noreferrer">
            <img src="./img/icon_email_dark.svg" alt="icon of an envelop linking to e-mail address" id="email_icon" />kinalone.dev @ gmail.com
          </a>
        </li>
        <li>
          <a href="https://github.com/marinakinalone" target="_blank" rel="noopener noreferrer">
            <img src="./img/icon_github_dark.png" alt="icon of a cat octopus linking to github" id="github_icon"/>github
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/marinakinalone-simonnet/" target="_blank" rel="noopener noreferrer">
            <img src="./img/icon_linkedin_dark.svg" alt="icon of linkedin logo, letters i and n in a square" id="linkedin_icon"/>linkedin
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/marinakinalone/" target="_blank" rel="noopener noreferrer">
            <img src="./img/icon_instagram_dark.svg" alt="icon of an envelop linking to e-mail address" id="instagram_icon" />instagram
          </a>
        </li>
      </ul>
  </section>
  )
}

export default Contact