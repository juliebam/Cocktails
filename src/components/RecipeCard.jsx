import styles from "../styles/RecipeCard.module.css"

import { useHistory } from 'react-router-dom'

import { useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux";

import { thunkActionForID } from '../connect/action.js'



function RecipeCard(props) {
    const {drinkDetails} = props;
    const {strDrink, idDrink} = drinkDetails;

    const drinkData = useSelector(state => state.drinkDataByID[idDrink])
    const dispatch = useDispatch()

    
    useEffect(() => {
        dispatch(thunkActionForID(idDrink))
    }, [dispatch])


    console.log(drinkData);

    const history = useHistory()
    const handleClick = (idDrink) => {
    history.push(`/detailedRecipeCard?id=${idDrink}`)
    console.log(idDrink)
    }

    return(
        <div className={styles.recipeCard} onClick={()=>handleClick(idDrink)}>
            <p>{strDrink}</p>
        {/* ternary if drinkData exist return  if not  */}
            <p>{drinkData?.strCategory}</p>
            <p>{drinkData?.strGlass}</p>
        </div>
    )
}

export default RecipeCard;