import React from 'react'

const Intro = () => {
  return (
    <section className="intro">
    <img className="intro__portrait" id="marina" src="./img/marina_portraitparlulo.png" alt="drawn portrait of Marina by artist Lu Lo"/>
    <div className="intro__content">
      <h1 className="intro__title">Marina Kinalone Simonnet</h1>
      <h2 className="intro__subtitle">full-stack developer</h2>
      <p><span className="bolder">Enthusiastic</span> developer with a <span className="bolder">focus on user experience</span>. Eager learner and researcher, I grow fast in the projects I’m involved with.</p>
      <p className="intro__copyright">p.s.: drawing is from <a href="https://www.instagram.com/lulu.xalo/" target="_blank" rel="noopener noreferrer">amazing artist Lu Lo</a></p>
    </div>
  </section>
  )
}

export default Intro