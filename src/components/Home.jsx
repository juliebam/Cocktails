
import styles from "../styles/Home.module.css"

import { useHistory } from 'react-router-dom'


function Home() {

        const history = useHistory()
        const handleClick = (alcoholName) => {
        history.push(`/ingredients?alcohol=${alcoholName}`)
        console.log(alcoholName)
    }
    return(
        <div>
            <div className={styles.homeIngredients}>
                    <div onClick={()=>{handleClick('Whiskey')
                        } } className={styles.inner}>
                        <h2>Whiskey</h2>
                        <p>view recipe</p>
                    </div>
                <div>
                    <div onClick={()=>{handleClick('Vodka')
                        } } className={styles.inner}>
                        <h2>Vodka</h2>
                        <p>view recipe</p>
                    </div>
                </div>
                <div>
                    <div onClick={()=>{handleClick('Gin')
                        } } className={styles.inner}>
                            <h2>Gin</h2>
                            <p>view recipe</p>
                        </div>
                </div>
                <div>
                    <div onClick={()=>{handleClick('Rum')
                        } } className={styles.inner}>
                            <h2>Rum</h2>
                            <p>view recipe</p>
                        </div>
                </div>
                <div>  
                    <div onClick={()=>{handleClick('Tequila')
                        } } className={styles.inner}>
                        <h2>Tequila</h2>
                        <p>view recipe</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;