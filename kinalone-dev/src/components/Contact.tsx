import github from '../resources/icons/github_dark.png'
import email from '../resources/icons/email_dark.svg'
import instagram from '../resources/icons/instagram_dark.svg'
import linkedin from '../resources/icons/linkedin_dark.svg'

const Contact = () => {
  return (
    <section className="contact container">
    <div className="contact__header">
      <h1>contact</h1>
    </div>
      <ul className="contact__list">
        <li>
          <a href="mailto:kinalone.dev@gmail.com?subject=new message from kinalone.dev" target="_blank" rel="noopener noreferrer">
            <img src={email}  alt="icon of an envelop linking to e-mail address" id="email_icon" />kinalone.dev @ gmail.com
          </a>
        </li>
        <li>
          <a href="https://github.com/marinakinalone" target="_blank" rel="noopener noreferrer">
            <img src={github}  alt="icon of a cat octopus linking to github" id="github_icon"/>github
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/marinakinalone-simonnet/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin}  alt="icon of linkedin logo, letters i and n in a square" id="linkedin_icon"/>linkedin
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/marinakinalone/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="icon of an envelop linking to e-mail address" id="instagram_icon" />instagram
          </a>
        </li>
      </ul>
  </section>
  )
}

export default Contact