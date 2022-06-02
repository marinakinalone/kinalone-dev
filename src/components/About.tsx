import me from '../resources/me.jpg'
import resume from '../resources/CV_MarinaKinalone_Simonnet.pdf'
import { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider';

const About = () => {
  const { theme } = useContext(ThemeContext);

  const blackArrow = {
    "--my-color-var": "black"
  }
  const whiteArrow = {
    "--my-color-var": "white"
  }
  return (
    <section className="about container" id="about">
    <div className="about__header padding-regular border-theme">
      <h1>about</h1>
    </div>
      <div className="about__bio padding-regular">
      <img className="about__img" src={me} alt="portrait of Marina Kinalone Simonnet" />
      <h2>Marina Kinalone Simonnet</h2>
      <h3>JavaScript developer with a background in research and education.</h3>
      <p>I have always loved art for its cross-disciplinary scope. When I was a researcher in art history, I was already using technology to create easy-to-use databases, improve my productivity and make the information accessible. <span className="bolder">When things can be automated, why should we do them manually?</span></p>
      <p>After college, I worked in the education field. I see myself as a facilitator between people and knowledge. I enjoy  <span className="bolder">building communities</span> and  <span className="bolder">motivating people</span> to be the best version of themselves. <span className="bolder">Active listening, positive feedback and encouraging creativity</span> are my main communication tools.</p>
      <p>I discovered coding when I took an Intro to Computer Science and Cognitive Science class at Pomona College, California. It was a revelation, and from then, <span className="bolder">I decided to get into the UX design and web development field.</span></p>
      <p><span className="bolder">I am specialised in full-stack Javascript and use React and SASS </span> in most of my coding projects. <span className="bolder">I am still applying my research methods to learn efficiently and keep myself up-to-date.</span></p>
      <p><span className="bolder">I love to create and explore my creativity</span> through personal coding projects, dancing, or teaching. I am active in social dance communities, love to work out, spend as much time as possible in the outdoors, and write about my journeys in a blog, <a className="link-regular" href="https://astroniste.com" target="_blank" rel="noopener noreferrer">l'Astroniste</a>.</p>
      <p>My coding assistant is my cat, Stormy. She is especially fond of printers.</p>
      <p>I come from France, have lived in California, USA, and <span className="bolder">currently live in Stockholm, Sweden</span>.</p>

      </div>
      <div className="about__skills border-theme">
        <h3>coding skills</h3>
        <p>technical skills: JavaScript, React, Node.js, Express, HTML5, CSS3, MongoDB, PostgreSQL, UX/UI, Figma, Adobe XD</p>
        <p>general development tools: Git, REST, Docker, Redux, AWS, TDD, CI/CD, design thinking</p>
        <a className="animated-arrow" href={resume} target="_blank" rel="noopener noreferrer">
          <span className="the-arrow -left">
            <span className="shaft" style={theme === "light" ? (blackArrow as React.CSSProperties) :(whiteArrow as React.CSSProperties)}></span>
          </span>
          <span className="main">
            <span className="text">download my resume</span>
            <span className="the-arrow -right">
              <span className="shaft" style={theme === "light" ? (blackArrow as React.CSSProperties) :(whiteArrow as React.CSSProperties)}></span>
            </span>
          </span>
        </a>
      </div>
  </section>
  )
}

export default About