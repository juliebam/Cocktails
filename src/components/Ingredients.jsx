import {useEffect, useState} from 'react';

import Banner from './Banner.jsx'

import IngredientResultGallery from './IngredientRecipeGallery.jsx'

import { useLocation } from 'react-router-dom';

import {getDrinkData, getDetailsById} from '../api.js'


function useQuery() {
    return new URLSearchParams(useLocation().search);
  }


function Ingredients() {
    const location = useLocation();
    const [drinkData, setDrinkData] = useState([]);
    const [alcoholName, setAlcoholName] =useState('');
    const [cocktailData, setCocktailData] = useState([])

 
    const query = useQuery();
    const ingredientName = query.get('alcohol')

    async function initData() {
        console.log("init")
        try {
            const ingredientName = query.get('alcohol')
            setAlcoholName(ingredientName)
            const drinkData = await  getDrinkData(ingredientName)
            const drinkID = drinkData[0].idDrink;
            if(drinkData.length > 0) {
                console.log(drinkData)
                const detailedDataPromisesArray = drinkData.map(drink => {
                    return getDetailsById(drinkID)
                })
                const detailedData = await Promise.all(detailedDataPromisesArray)
                setDrinkData(detailedData)
            }
        } catch (error) {
            console.error(error.message)
        }
    }
    
    useEffect(() => {
        console.log("1")
        initData()

// const drinkArray = [...cocktailData]
//     getDrinkData().then(
//         drinkData.map(drink => {
//           fetch(`https://thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${drink.idDrink}`)
//           .then(res => res.json())
//           .then((data) => {
//               drinkArray.push(data)
//             })
//             setCocktailData(drinkArray)
//         })
    // )
}
,[location]);


console.log(cocktailData)


    return (
        <div className="ingredientGallery">
            <Banner ingredientName={ingredientName} />
            {cocktailData.length > 0 ?  <IngredientResultGallery cocktailData={cocktailData} /> : console.log('emptyarray')}
        </div>      
    )
}

export default Ingredients;