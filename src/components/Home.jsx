
import styles from "../styles/Home.module.css"

import { useHistory } from 'react-router-dom'

import { useSelector } from 'react-redux'

import Whiskey from '../images/whiskey.jpg'
import Gin from '../images/gin.jpg'
import Vodka from '../images/vodka.jpg'
import Tequila from '../images/tequila.jpg'
import Rum from '../images/rum.jpg'

function Home() {

        const alcoholList = useSelector(state => state.alcoholList)

        const history = useHistory()
        const handleClick = (alcoholName) => {
        history.push(`/ingredients?alcohol=${alcoholName}`)
        console.log(alcoholName)
    }

    const ingredientImages = {
         Whiskey,
         Gin,
         Vodka,
         Tequila, 
         Rum
    }

    // console.log(whiskey)
//test the click functionality that it takes the item and sends it to the api
// mocking of react router
    return(
        
        <div>
            <div className={styles.homeIngredients}>
                {alcoholList.map(item =>      
                    <div onClick={()=>{handleClick(item)
                        } } className={styles.inner} style={{
                            backgroundImage: `url(${ingredientImages[item]})`
                        }}>
                            <h2>{item}</h2>
                            <p>view recipe</p>
                      
                    </div>)}
            </div>
        </div>
    )
}

export default Home;