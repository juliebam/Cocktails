import styles from "../styles/RecipeCard.module.css"

import { useHistory } from 'react-router-dom'


function RecipeCard(props) {
    const {drinkDetails} = props;
    const {strDrink, strCategory, strGlass,idDrink} = drinkDetails;

    const history = useHistory()
    const handleClick = (idDrink) => {
    history.push(`/detailedRecipeCard?id=${idDrink}`)
    console.log(idDrink)
    }

    return(
        <div className={styles.recipeCard} onClick={()=>handleClick(idDrink)}>
            <img src="" alt=""/>
            <p>{strDrink}</p>
            <p>{strCategory}</p>
            <p>{strGlass}</p>
        </div>
    )
}

export default RecipeCard;