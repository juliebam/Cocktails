import RecipeCard from './RecipeCard.jsx'



function IngredientResultGallery(props) {

    console.log(props)

    return(
        <div>
            {props.cocktailData.map(drink => <RecipeCard drinkDetails={drink} key={drink.idDrink}/>)}
        </div>
    )
}

export default IngredientResultGallery;