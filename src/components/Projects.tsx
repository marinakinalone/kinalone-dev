import gardenJs from "../resources/projects/gardenjs.png"
import leVoyageAStockholm from "../resources/projects/levoyageastockholm.png"
import laladance from "../resources/projects/laladance.png"
import sailormoon from "../resources/projects/sailormoon.png"

const Projects = () => {
  return (
    <section className="projects">
    <div className="projects__header container padding-regular">
      <h1>highlighted projects</h1>
    </div>
    <div className="projects__highlighted">
      <a className="projects__card" href={"https://gardenproject-client.herokuapp.com/"} target="_blank" rel="noopener noreferrer">
        <img src={gardenJs} alt="project card illustration" />
        <h3>Garden JS</h3>
        <p>A cute game to practice JavaScript. Built with React, Redux, SASS Node, Express and MongoDB.</p>
      </a>
      <a className="projects__card" href="https://github.com/marinakinalone/le-voyage-a-stockholm" target="_blank" rel="noopener noreferrer">
          <img src={leVoyageAStockholm} alt="project card illustration" />
          <h3>Le Voyage à Stockholm</h3>
          <p>My favorite places in Stockholm, on a map. Built with React, Sass, Node, Express and the Google Maps API.</p>
      </a>
      <a className="projects__card" href="https://marinakinalone.github.io/sailor-moon-quote-machine/" target="_blank" rel="noopener noreferrer">
        <img src={sailormoon} alt="project card illustration" />
        <h3>Sailor Moon Quote Machine</h3>
        <p>A sailormoon-themed random quote machine. Built with React and Sass.</p>
      </a>
      <a className="projects__card" href="https://marinakinalone.github.io/la-la-dance/" target="_blank" rel="noopener noreferrer">
        <img src={laladance} alt="project card illustration" />
        <h3>La La Dance</h3>
        <p>A personnality test to find the social dance type that suits us best. Built with React and React Bootstrap.</p>
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