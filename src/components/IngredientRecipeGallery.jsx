import RecipeCard from './RecipeCard.jsx'

import styles from "../styles/IngredientRecipeGallery.module.css"

import { useSelector } from 'react-redux';

function IngredientResultGallery(props) {
    const drinkData = useSelector(state => state.drinkData)
    // console.log(props)

    return(
        <div className={styles.drinkGallery}>
            {drinkData.map((drink, index) => <RecipeCard drinkDetails={drink} key={index}/>)}
        </div>
    )
}

export default IngredientResultGallery;