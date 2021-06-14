import { getDrinkData } from '../api.js'
import { getDetailsById } from '../api.js'

export const updateDrinkData = (data) => {
    // console.log(data)
    return {
        type: 'UPDATE_DRINK_DATA',
        payload: data,
    }
}

export const getDrinkDataById = (data) => {
    // console.log(data)
    return {
        type: 'GET_DATA_BY_ID',
        payload: data
    }
}

export const thunkAction = (alcohol) => {
    return async(dispatch) => {
        const ingredientName = alcohol
        const drinkData = await  getDrinkData(ingredientName)
        // console.log(drinkData)
        dispatch(updateDrinkData(drinkData))

    }
}

export const thunkActionForID = (drinkID) => {
    return async(dispatch) => {
        const drinkByID = await getDetailsById(drinkID)
        // console.log(drinkByID)
        dispatch(getDrinkDataById({[drinkID]:drinkByID}))
    }
}
