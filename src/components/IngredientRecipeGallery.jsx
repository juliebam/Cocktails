import RecipeCard from './RecipeCard.jsx'


function IngredientResultGallery(props) {
    console.log(props)
    const {drinkData} = props;

    return(
        <div>
            {drinkData.map(drink => <RecipeCard drinkDetails={drink} key={drink.idDrink}/>)}
        </div>
    )
}

export default IngredientResultGallery;