

export async function getDrinkData(ingredientName) 
{
try {
    const url = `https://thecocktaildb.com/api/json/v2/9973533/filter.php?i=${ingredientName}`
    const response = await fetch(url)
    const data = await response.json();
    console.log(data);
    const drinkDataArray = data.drinks;
    return drinkDataArray;
} catch(error) {
    console.log('Error in the first api call!')
    console.error(error.message)
    throw error;
}
}

export async function getDetailsById(drinkId) {
    try {
        const url = `https://thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${drinkId}`
        const response = await fetch(url)
        const data = await response.json();
        if (data.drinks.length > 0) {
            const detailedData= data.drinks[0];
            return detailedData;
        } else {
            return null
        }
    } catch (error) {
        console.log('Error in the 2nd api call!')
        console.error(error.message)
        throw error;
    }
}




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