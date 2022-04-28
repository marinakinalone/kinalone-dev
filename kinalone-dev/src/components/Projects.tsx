import React from 'react'

const Projects = () => {
  return (
    <section className="projects">
    <div className="projects__header container regular-padding">
      <h1>highlighted projects</h1>
    </div>
    <div className="projects__highlighted">
      <a className="projects__card" href="https://marinakinalone.github.io/geeky-love-letter/" target="_blank" rel="noopener noreferrer">
        <img src="img/project_geekyloveletter.png" alt="project card illustration" />
        <h3>Garden JS</h3>
        <p>A secret message editor (which is only a text to binary convertor) built with ReactJS.</p>
      </a>
      <a className="projects__card" href="https://excusemyfrench.dev" target="_blank" rel="noopener noreferrer">
          <img src="img/project_excusemyfrenchdev.png" alt="project card illustration" />
          <h3>Le Voyage à Stockholm</h3>
          <p>A website which aims at making English news related to front-end development and UX accessible to French-speaking people.</p>
      </a>
      <a className="projects__card" href="https://marinakinalone.github.io/sailor-moon-quote-machine/" target="_blank" rel="noopener noreferrer">
        <img src="img/project_sailormoon.png" alt="project card illustration" />
        <h3>Sailor Moon Quote Machine</h3>
        <p>To build this cute project, I've used ReactJS associated with concepts of randomness and manipulation of arrays.</p>
      </a>
      <a className="projects__card" href="https://marinakinalone.github.io/la-la-dance/" target="_blank" rel="noopener noreferrer">
        <img src="img/project_laladance.png" alt="project card illustration" />
        <h3>La La Dance</h3>
        <p>A personnality test to find their social dance type built with ReactJS and React Bootstrap.</p>
      </a>
    </div>
    <div className="projects__more container">
      <a className="animated-arrow" href="https://github.com/marinakinalone?tab=repositories" target="_blank" rel="noopener noreferrer">
        <span className="the-arrow -left">
          <span className="shaft"></span>
        </span>
        <span className="main">
          <span className="text">more projects</span>
          <span className="the-arrow -right">
            <span className="shaft"></span>
          </span>
        </span>
      </a>
    </div>
  </section>
  )
}

export default Projects