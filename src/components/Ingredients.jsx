import {useEffect, useState} from 'react';

import Banner from './Banner.jsx'

import IngredientResultGallery from './IngredientRecipeGallery.jsx'

import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }


function Ingredients(props) {

    const {drinkData, initData} = props;

    const location = useLocation();

   

 
    const query = useQuery();
    const ingredientName = query.get('alcohol')

    useEffect(() => {
        initData(ingredientName)
        // props.test('whiskey')
}
,[location]);

console.log(drinkData)


    return (
        <div className="ingredientGallery">
            <Banner ingredientName={ingredientName} />
            <IngredientResultGallery drinkData={drinkData}/>
        </div>      
    )
}

export default Ingredients;