import styles from "../styles/Header.module.css"
import { useHistory } from 'react-router-dom'

import Hamburger from './Hamburger.jsx'

function Header() {
    const history = useHistory()

    const handleClick = () => {
        history.push(`/`)
    }

    return(
        <div className={styles.header} onClick={handleClick}>
            <h1>Cocktail Recipes</h1>
            {/* <Hamburger /> */}
        </div>

    )
}

export default Header;