import {useEffect, useState} from 'react';

import Banner from './Banner.jsx'

import IngredientResultGallery from './IngredientRecipeGallery.jsx'

import { useLocation } from 'react-router-dom';


function useQuery() {
    return new URLSearchParams(useLocation().search);
  }


function Ingredients() {
    const [drinkData, setDrinkData] = useState([]);
    const [alcoholName, setAlcoholName] =useState('');
    const [cocktailData, setCocktailData] = useState([])

 
    const query = useQuery();
    const ingredientName = query.get('alcohol')
    
    useEffect(() => {
        const ingredientName = query.get('alcohol')
        setAlcoholName(ingredientName)
        async function getDrinkData(url= `https://thecocktaildb.com/api/json/v2/9973533/filter.php?i=${ingredientName}`) 
        {
        try {
            const response = await fetch(url)
            const data = await response.json();
            console.log(data);
            const drinkDataArray = data.drinks;
            setDrinkData(drinkDataArray)
            setCocktailData([])
        } catch(error) {
            console.log('Error in the first api call!')
            console.log(error)
        }
    }
console.log("loaded")
    getDrinkData().then(
        drinkData.map(drink => {
          fetch(`https://thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${drink.idDrink}`)
          .then(res => res.json())
          .then((data) => {
              console.log(data)
              let copyCocktailData = [...cocktailData]
              copyCocktailData = data;
              setCocktailData([copyCocktailData])
          })
        })
    )
}
,[]);

console.log(cocktailData)

console.log("Hi")
    return (
        <div className="ingredientGallery">
            <Banner ingredientName={ingredientName} />
            <IngredientResultGallery drinkData={drinkData} />
        </div>      
    )
}

export default Ingredients;