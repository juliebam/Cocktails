import styles from '../styles/Banner.module.css'

import Whiskey from '../images/whiskey.jpg'
import Gin from '../images/gin.jpg'
import Vodka from '../images/vodka.jpg'
import Tequila from '../images/tequila.jpg'
import Rum from '../images/rum.jpg'

function Banner(props) {

    
    console.log(props)
    const {ingredientName} = props
    
    const ingredientImages = {
        Whiskey,
        Gin,
        Vodka,
        Tequila, 
        Rum
   }
    return(
        <div className={styles.banner} style={{backgroundImage: `url(${ingredientImages[ingredientName]})`}} >
            <div>
                <h2>{ingredientName}</h2>
            </div>
        </div>
    )
}

export default Banner;