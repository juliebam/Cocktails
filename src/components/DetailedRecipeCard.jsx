
import { useLocation } from 'react-router-dom';

import { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import { thunkActionForID } from '../connect/action.js'

import styles from '../styles/DetailedRecipeCard.module.css'

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }


function DetailedRecipeCard() {

    
    const query = useQuery();
    const id = query.get('id')
    console.log(id);
    
    const drinkObject = useSelector(state => state.drinkDataByID[id])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunkActionForID(id))
    }, [dispatch])

    console.log(drinkObject)


    function getIngredientsAndMeasurements () {
        if (!drinkObject) {
            return []
        } 
        //convert drink object to an array anf filter out strIngredient
        const ingredientArray = Object.entries(drinkObject).filter(([key, value])=> key.includes("strIngredient"))
        console.log(ingredientArray)
        //filter out further for everything that does not include null or empty ""
        const filteredIngredientsArray = ingredientArray.filter(([key, value]) => value !== null && value !== "" )
        console.log(filteredIngredientsArray)

        //map through the filtered array and for each item remove the strIngredients
        filteredIngredientsArray.map(item => {
            //for each inner array item, remove the first string
            item.splice(0, 1)
        })

        const finalIngredientArray = filteredIngredientsArray.flat(1)
        console.log(finalIngredientArray)


        //get measurements
        const measurementsArray = Object.entries(drinkObject).filter(([key, value])=> key.includes("strMeasure"))

        const filteredMeasurementArray = measurementsArray.filter(([key, value]) => value !== null && value !== "" )
        console.log(filteredMeasurementArray)


        filteredMeasurementArray.map(item => {
            //for each inner array item, remove the first string
            item.splice(0, 1)
        })

        const finalMeasurementArray = filteredMeasurementArray.flat(1);


        const ingredientMeasurements = finalIngredientArray.map((_, item) => [finalMeasurementArray[item], finalIngredientArray[item]])

        return ingredientMeasurements
    }

    return (
        <div className={styles.details}>
            {/* details about the drink */}
            <div>
                <img src={drinkObject?.strDrinkThumb} alt={drinkObject?.strDrink}/>
            </div>
            <div className={styles.moreDetails}>
                <p className={styles.title}>{drinkObject?.strDrink}</p>
                <p>{drinkObject?.strGlass}</p>
                <p><ul> {getIngredientsAndMeasurements().map(item => <li>{item.join(' ')}</li>)} </ul></p>
                <div className={styles.instructions}>
                    <p>Instructions:</p>
                    <p>{drinkObject?.strInstructions}</p>
                </div>
            </div>
        </div>
    )

}
DetailedRecipeCard.defaultProps =  {drinkData: []}
export default DetailedRecipeCard;