const initialState = {
    alcoholList: ['Whiskey', 'Gin', 'Vodka', 'Tequila', 'Rum'],
    drinkData: [],
    drinkDataByID: {}
}


const drinkDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_DRINK_DATA' : {

            return {
                ...state,
                drinkData: action.payload,
            }
        }

        case 'GET_DATA_BY_ID' : {
            const newDrinkState = Object.assign({}, state.drinkDataByID, action.payload)
            return {
                ...state,
                drinkDataByID: newDrinkState,
            }
        }

        default: 
            return state;

    }
}

export default drinkDataReducer;