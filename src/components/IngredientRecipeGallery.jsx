import RecipeCard from './RecipeCard.jsx'

import styles from "../styles/IngredientRecipeGallery.module.css"


function IngredientResultGallery(props) {

    console.log(props)

    return(
        <div className={styles.drinkGallery}>
            {props.drinkData.map(drink => <RecipeCard drinkDetails={drink}/>)}
        </div>
    )
}

export default IngredientResultGallery;