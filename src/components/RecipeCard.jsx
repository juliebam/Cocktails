import { useEffect, useState } from 'react'

function RecipeCard(props) {
    const {drinkDetails} = props;
    console.log(drinkDetails)
    const {strDrink, idDrink} = drinkDetails;
    console.log(drinkDetails)

 
    const [drinkIdData, setDrinkIdData] = useState([]);

    useEffect(() => {
    //     async function getDrinkDataById(url=`https://thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${idDrink}`)
    // {
    //     try {
    //         const response = await fetch(url)
    //         const drinkDataById = await response.json();
    //         console.log(drinkDataById)
    //         const drinkByIdArray = drinkDataById.drinks;
    //         setDrinkIdData(drinkByIdArray)
    //     } catch(error) {
    //         console.log('Error happened here!')
    //         console.log(error)
    //     }
    // }

    // getDrinkDataById()
    },[])
    console.log(props)

    return(
        <div>
            {/* icon of type of glass */}
            <p>{strDrink}</p>
            {/* Type of drink */}
            {/* if drinkIdData is not empty show drinkIdData[0].strCategory */}
            {/* <p>{drinkIdData[0] !==null ? drinkIdData[0].strCategory : ""}</p> */}
            {/* Type of glass */}
            {/* <p>{!drinkIdData ? drinkIdData[0].strGlass : null}</p> */}
        </div>
    )
}

export default RecipeCard;