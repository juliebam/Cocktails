
import { useLocation } from 'react-router-dom';

import { useEffect, useState } from 'react';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }


function DetailedRecipeCard(props) {
    const [drinkObject, setDrinkObject] = useState({})

    const {drinkData} = props;

    console.log(drinkData)
 
    const query = useQuery();
    const id = query.get('id')
    console.log(id);

    const object = drinkData.filter(item => item.idDrink === id)[0]

    useEffect(() => {
                setDrinkObject(object)
    }, [drinkObject])

    console.log(drinkObject)

    const {strDrink, strGlass, strDrinkThumb, strInstructions} = drinkObject;

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


    return (
        <div>
            {/* details about the drink */}
            <img src={strDrinkThumb} alt={strDrink}/>
            <p>{strDrink}</p>
            <p>{strGlass}</p>
            <p>Ingredients: <ul> {ingredientMeasurements.map(item => <li>{item.join(' ')}</li>)} </ul></p>
            <p>Instructions: {strInstructions}</p>

        </div>
    )

}

export default DetailedRecipeCard;