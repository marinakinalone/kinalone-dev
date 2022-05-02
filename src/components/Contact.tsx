import github from '../resources/icons/github_dark.png'
import email from '../resources/icons/email_dark.svg'
import linkedin from '../resources/icons/linkedin_dark.svg'

const Contact = () => {
  return (
    <section className="contact container" id="contact">
    <div className="contact__header padding-regular">
      <h1>contact</h1>
    </div>
      <ul className="contact__list">
        <li>
          <a className="link-regular" href="mailto:kinalone.dev@gmail.com?subject=new message from kinalone.dev" target="_blank" rel="noopener noreferrer">
            <img className="icon" src={email}  alt="icon of an envelop linking to e-mail address" id="email_icon" />kinalone.dev @ gmail.com
          </a>
        </li>
        <li>
          <a className="link-regular" href="https://github.com/marinakinalone" target="_blank" rel="noopener noreferrer">
            <img className="icon" src={github}  alt="icon of a cat octopus linking to github" id="github_icon"/>github
          </a>
        </li>
        <li>
          <a className="link-regular" href="https://www.linkedin.com/in/marinakinalone-simonnet/" target="_blank" rel="noopener noreferrer">
            <img className="icon" src={linkedin}  alt="icon of linkedin logo, letters i and n in a square" id="linkedin_icon"/>linkedin
          </a>
        </li>
      </ul>
  </section>
  )
}

export default Contact