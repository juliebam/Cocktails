

import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Ingredients from './components/Ingredients.jsx'
// import {useState} from 'react';
// import {getDrinkData, getDetailsById} from './api.js'

// import { updateDrinkData } from './connect/action.js'

import { useDispatch } from 'react-redux'

import { useSelector } from 'react-redux'

import { thunkAction } from './connect/action.js'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DetailedRecipeCard from './components/DetailedRecipeCard.jsx';


function App() {
  const dispatch = useDispatch();
  const drinkData = useSelector(state => state.drinkData)
 
  // const [drinkData, setDrinkData] = useState([])

  async function initData(alcohol) {
    console.log("init")
    try {
      dispatch(thunkAction(alcohol))
      // move this code to the action and setup "thunk" because its asychronous 
        // const ingredientName = alcohol
        // const drinkData = await  getDrinkData(ingredientName)
        // console.log(drinkData)
        // const detailedDataPromisesArray = [];
        // if (drinkData.length > 0) {
        //     for (let i = 0; i < drinkData.length; i++) {
        //         const drinkID = drinkData[i].idDrink
        //         console.log(drinkID)
        //         const detailedData = getDetailsById(drinkID);
        //         detailedDataPromisesArray.push(detailedData)
        //     } 
        //     console.log(detailedDataPromisesArray)
        //     const detailedDataWithID = await Promise.all(detailedDataPromisesArray)
        //     setDrinkData(detailedDataWithID)
        // }
    } catch (error) {
        console.error(error.message)
    }
}
console.log(drinkData)
  return (

      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/ingredients">
                  <Ingredients initData={initData} drinkData={drinkData} />
            </Route>
            <Route path="/detailedRecipeCard">
                  <DetailedRecipeCard drinkData={drinkData} />
            </Route>
          </Switch>
        </div>
      </Router>

  );
}

export default App;
