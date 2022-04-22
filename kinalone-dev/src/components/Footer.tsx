import heartIcon from '../resources/icons/heart_dark.svg';

const Footer = () => {
  return (
    <footer className="footer">
    <p className="footer__copyright"><span className="desktop--only">Made with <img className="copyright__img" id="heart" src={heartIcon} alt="love"/> between Nantes & Sthlm </span>© mks 2022 | <a href="https://github.com/marinakinalone/kinalone-dev/blob/main/LICENSE.txt" target="_blank" rel="noopener noreferrer">license</a></p>
    </footer>
  )
}

export default Footer