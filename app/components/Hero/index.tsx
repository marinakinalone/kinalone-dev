import React from 'react'
import Container from '../ui/Container'
import Subtitle from '../ui/Subtitle'
import Text from '../ui/Text'
import Title from '../ui/Title'

const STRINGS = {
  title: 'Marina Kinalone Simonnet',
  subtitle: 'front-end developer',
  description:
    'Enthusiastic developer with a focus on user experience. Avid learner and dedicated researcher, I thrive on the dynamic energy of projects.',
}

const Hero = () => {
  return (
    <Container>
      <Title>{STRINGS.title}</Title>
      <Subtitle>{STRINGS.subtitle}</Subtitle>
      <Text>{STRINGS.description}</Text>
    </Container>
  )
}

export default Hero

/*
const Intro = () => {
  return (
    <section className="intro">
      <img className="intro__portrait" id="marina" src={portrait} alt="drawn portrait of Marina by artist Lu Lo"/>
      <div className="intro__content sub-containers">
        <h1 className="intro__title">Marina Kinalone Simonnet</h1>
        <h2 className="intro__subtitle">full-stack developer</h2>
        <p><span className="bolder">Enthusiastic</span> developer with a <span className="bolder">focus on user experience</span>. Eager learner and researcher, I grow fast in the projects I’m involved with.</p>
        <p className="intro__copyright">p.s.: drawing is from <a className="link-regular" href="https://www.instagram.com/lulu.xalo/" target="_blank" rel="noopener noreferrer">amazing artist Lu Lo</a></p>
      </div>
  </section>
  )
}

const HighlightedText = styled.span`
  color: #ff8c00; /* Set the color for highlighted words 
  font-weight: bold;
`;

  // Words to highlight
  const highlightedWords = ['Enthusiastic', 'user experience', 'Avid learner', 'dedicated researcher'];

  // Split the description into words
  const words = description.split(' ');

  return (
    <>
      <Title>{title}</Title>
      <p>
        {words.map((word, index) => {
          // Check if the current word should be highlighted
          const isHighlighted = highlightedWords.includes(word);

          return isHighlighted ? (
            <HighlightedText key={index}>{word} </HighlightedText>
          ) : (
            <span key={index}>{word} </span>
          );
        })}
      </p>
    </>
  );
};

*/
