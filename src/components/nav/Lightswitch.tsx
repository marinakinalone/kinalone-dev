import moon from '../../resources/icons/moon.svg'
import sun from '../../resources/icons/sun.svg'
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';

const Lightswitch = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <label className="switch" htmlFor="lightswitch">
            <input type="checkbox" id="lightswitch" name="lightswitch" value="dark" onClick={toggleTheme} />
            <span className="slider"></span>
            <img className="toggleicon" id="moon" alt="" src={moon} />
            <img className="toggleicon" id="sun" alt="" src={sun} />
        </label>
    )
}

export default Lightswitch